const urlJoin = require('url-join');
const DbService = require('moleculer-db');
const { MoleculerError, ServiceSchemaError } = require('moleculer').Errors;
const { TripleStoreAdapter } = require('@semapps/ldp');

const WebhooksService = {
  name: 'webhooks',
  mixins: [DbService],
  adapter: new TripleStoreAdapter(),
  settings: {
    containerUri: null,
    usersContainer: null,
    allowedActions: [],
    context: { '@vocab': 'http://semapps.org/ontology/webhooks#' }
  },
  async started() {
    this.settings.allowedActions.forEach(actionName => {
      if (!this.actions[actionName]) {
        throw new ServiceSchemaError(`Missing action "${actionName}" in service settings!`);
      }
    });
  },
  actions: {
    async process(ctx) {
      const { hash, ...data } = ctx.params;
      try {
        const webhook = await this.actions.get({ id: hash });
        return await this.actions[webhook.action]({ data, user: webhook.user });
      } catch (e) {
        ctx.meta.$statusCode = 404;
      }
    },
    async generate(ctx) {
      let userId = ctx.meta.webId || ctx.params.userId,
        action = ctx.params.action;

      if (!userId || !action || !this.settings.allowedActions.includes(action)) {
        throw new MoleculerError('Bad request', 400, 'BAD_REQUEST');
      }

      if (!userId.startsWith('http')) userId = urlJoin(this.settings.usersContainer, userId);

      const webhook = await this.actions.create({
        '@type': 'Webhook',
        action,
        user: userId
      });

      return webhook['@id'];
    },
    getApiRoutes() {
      return [
        // Unsecured routes
        {
          bodyParsers: { json: true },
          authorization: false,
          authentication: true,
          aliases: {
            'POST webhooks/:hash': 'webhooks.process'
          }
        },
        // Secured routes
        {
          bodyParsers: { json: true },
          authorization: true,
          authentication: false,
          aliases: {
            'POST webhooks': 'webhooks.generate'
          }
        }
      ];
    }
  }
};

module.exports = WebhooksService;
