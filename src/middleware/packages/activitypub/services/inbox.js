const urlJoin = require('url-join');
const { MIME_TYPES } = require('@semapps/mime-types');
const { objectCurrentToId, objectIdToCurrent } = require('../utils');

const InboxService = {
  name: 'activitypub.inbox',
  settings: {
    actorsContainer: null
  },
  dependencies: ['activitypub.collection', 'triplestore'],
  actions: {
    async post(ctx) {
      let { username, collectionUri, ...activity } = ctx.params;

      if (!username && !collectionUri) {
        throw new Error('Inbox post: a username or collectionUri must be specified');
      }

      const collectionExists = await ctx.call('activitypub.collection.exist', {
        collectionUri: collectionUri || this.getInboxUri(username)
      });

      if (!collectionExists) {
        ctx.meta.$statusCode = 404;
        return;
      }

      const validDigest = await ctx.call('signature.verifyDigest', {
        body: JSON.stringify(activity),
        headers: ctx.meta.headers
      });

      const validSignature = await ctx.call('signature.verifyHttpSignature', {
        url: collectionUri || this.getInboxUri(username),
        headers: ctx.meta.headers
      });

      if (!validDigest || !validSignature) {
        ctx.meta.$statusCode = 401;
        return;
      }

      // TODO check activity is valid

      // Save the remote activity in the local triple store
      // TODO see if we could cache it elsewhere
      await ctx.call('triplestore.insert', {
        resource: objectIdToCurrent(activity),
        contentType: MIME_TYPES.JSON
      });

      // Attach the activity to the inbox
      ctx.call('activitypub.collection.attach', {
        collectionUri: collectionUri || this.getInboxUri(username),
        item: activity
      });

      ctx.emit('activitypub.inbox.received', {
        activity,
        recipients: [urlJoin(this.settings.actorsContainer, username)]
      });

      ctx.meta.$statusCode = 202;
    },
    async list(ctx) {
      ctx.meta.$responseType = 'application/ld+json';

      const collection = await ctx.call('activitypub.collection.get', {
        id: ctx.params.collectionUri || this.getInboxUri(ctx.params.username),
        dereferenceItems: true,
        queryDepth: 3
      });

      if (collection) {
        return {
          ...collection,
          orderedItems: collection.orderedItems.map(activityJson => objectCurrentToId(activityJson))
        };
      } else {
        ctx.meta.$statusCode = 404;
      }
    }
  },
  methods: {
    getInboxUri(username) {
      return urlJoin(this.settings.actorsContainer, username, 'inbox');
    }
  }
};

module.exports = InboxService;
