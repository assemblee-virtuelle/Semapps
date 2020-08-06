const urlJoin = require('url-join');
const { PUBLIC_URI } = require('../constants');
const { defaultToArray } = require('../utils');

const DispatchService = {
  name: 'activitypub.dispatch',
  settings: {
    actorsContainer: null
  },
  dependencies: ['activitypub.collection'],
  events: {
    async 'activitypub.outbox.posted'(ctx) {
      const { activity } = ctx.params;

      if (activity.to) {
        const recipients = await this.getAllRecipients(activity);
        for (const recipientUri of recipients) {
          // TODO find inbox URI from the actor's profile
          const inboxUri = urlJoin(recipientUri, 'inbox');
          if (this.isLocalActor(recipientUri)) {
            // Attach activity to the inbox of the local actor
            await this.broker.call('activitypub.collection.attach', {
              collectionUri: inboxUri,
              item: activity
            });
          } else {
            // If the QueueService mixin is available, use it
            if (this.createJob) {
              this.createJob('remotePost', { inboxUri, activity });
            } else {
              // Send directly
              await this.remotePost(inboxUri, activity);
            }
          }
        }

        this.broker.emit('activitypub.inbox.received', { activity, recipients });
      }
    },
    'activitypub.inbox.received'() {
      // Do nothing. We must define one event listener for EventsWatcher middleware to act correctly.
    }
  },
  methods: {
    getFollowersUri(actorUri) {
      return urlJoin(actorUri, 'followers');
    },
    isLocalActor(uri) {
      return uri.startsWith(this.settings.actorsContainer);
    },
    async getAllRecipients(activity) {
      let output = [],
        recipients = defaultToArray(activity.to);
      for (const recipient of recipients) {
        if (recipient === PUBLIC_URI || recipient === 'as:Public' || recipient === 'Public') {
          // Public URI. No need to add to inbox.
          // We accept all three representations https://www.w3.org/TR/activitypub/#public-addressing
          continue;
        } else if (activity.actor && recipient === this.getFollowersUri(activity.actor)) {
          // Followers list. Add the list of followers.
          // TODO improve detection of Collections
          const collection = await this.broker.call('activitypub.collection.get', { id: recipient });
          if (collection && collection.items) output.push(...defaultToArray(collection.items));
        } else {
          // Simple actor URI
          output.push(recipient);
        }
      }
      return output;
    },
    async remotePost(inboxUri, activity) {
      const body = JSON.stringify(activity);

      const signatureHeaders = await this.broker.call('signature.generateSignatureHeaders', {
        url: inboxUri,
        body,
        actorUri: activity.actor
      });

      // Post activity to the inbox of the remote actor
      return await fetch(inboxUri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...signatureHeaders
        },
        body
      });
    }
  },
  queues: {
    async remotePost(job) {
      const response = await this.remotePost(job.data.inboxUri, job.data.activity);

      if (!response.ok) {
        job.moveToFailed({ message: 'Unable to send to remote host ' + job.data.inboxUri }, true);
      } else {
        job.progress(100);
      }

      return {
        response: {
          ok: response.ok,
          status: response.status,
          statusText: response.statusText
        }
      };
    }
  }
};

module.exports = DispatchService;
