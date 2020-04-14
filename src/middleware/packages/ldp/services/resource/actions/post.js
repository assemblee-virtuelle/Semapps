const { MoleculerError } = require('moleculer').Errors;
const { MIME_TYPES } = require('@semapps/mime-types');
const { generateId } = require('../../../utils');

module.exports = {
  api: async function api(ctx) {
    let { containerUri, typeURL, ...resource } = ctx.params;
    try {
      const resourceUri = await ctx.call('ldp.resource.post', {
        containerUri: containerUri || this.settings.baseUrl + typeURL,
        slug: ctx.meta.headers.slug,
        resource,
        contentType: ctx.meta.headers['content-type'],
        accept: MIME_TYPES.JSON
      });

      ctx.meta.$statusCode = 201;
      ctx.meta.$responseHeaders = {
        Location: resourceUri,
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
      resource: 'object',
      webId: {
        type: 'string',
        optional: true
      },
      contentType: {
        type: 'string'
      },
      containerUri: {
        type: 'string'
      },
      slug: {
        type: 'string',
        optional: true
      }
    },
    async handler(ctx) {
      const { resource, containerUri, slug, contentType, webId } = ctx.params;

      if (webId) ctx.meta.webId = webId;

      // Generate ID and make sure it doesn't exist already
      resource['@id'] = resource['@id'] || `${containerUri.replace(/\/$/, '')}/${slug || generateId()}`;
      resource['@id'] = await this.findUnusedUri(ctx, resource['@id']);

      if (!resource['@context']) {
        throw new MoleculerError(`No @context is provided for the resource ${resource['@id']}`, 400, 'BAD_REQUEST');
      }

      await ctx.call('triplestore.insert', {
        resource,
        contentType
      });

      await ctx.call('ldp.container.attach', {
        resourceUri: resource['@id'],
        containerUri
      });

      return resource['@id'];
    }
  }
};
