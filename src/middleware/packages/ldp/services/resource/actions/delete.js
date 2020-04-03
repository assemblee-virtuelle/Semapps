const { MoleculerError } = require('moleculer').Errors;

module.exports = {
  api: async function api(ctx) {
    try {
      const { typeURL, resourceId, containerUri } = ctx.params;
      const resourceUri = `${containerUri || this.settings.baseUrl + typeURL}/${resourceId}`;
      await ctx.call('ldp.resource.delete', {
        resourceUri
      });
      ctx.meta.$statusCode = 204;
      ctx.meta.$responseHeaders = {
        Link: '<http://www.w3.org/ns/ldp#Resource>; rel="type"',
        'Content-Length': 0
      };
    } catch (e) {
      console.error(e);
      ctx.meta.$statusCode = e.code || 500;
      ctx.meta.$statusMessage = e.message;
    }
  },
  action: {
    visibility: 'public',
    params: {
      resourceUri: 'string',
      webId: { type: 'string', optional: true }
    },
    async handler(ctx) {
      const resourceUri = ctx.params.resourceUri;
      if (ctx.params.webId) {
        ctx.meta.webId = ctx.params.webId;
      }
      const triplesNb = await ctx.call('triplestore.countTripleOfSubject', {
        uri: resourceUri
      });
      if (triplesNb > 0) {
        await ctx.call('triplestore.delete', {
          uri: resourceUri
        });
      } else {
        throw new MoleculerError('Not found', 404, 'NOT_FOUND');
      }
    }
  }
};
