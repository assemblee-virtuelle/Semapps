const { MoleculerError } = require('moleculer').Errors;
const { MIME_TYPES } = require('@semapps/mime-types');

module.exports = {
  api: async function api(ctx) {
    const { containerUri, id, ...resource } = ctx.params;

    // PATCH have to stay in same container and @id can't be different
    // TODO generate an error instead of overwriting the ID
    resource['@id'] = `${containerUri}/${id}`;

    try {
      await ctx.call('ldp.resource.patch', {
        resource,
        contentType: ctx.meta.headers['content-type']
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
      resource: {
        type: 'object'
      },
      webId: {
        type: 'string',
        optional: true
      },
      contentType: {
        type: 'string'
      }
    },
    async handler(ctx) {
      let { resource, contentType, webId } = ctx.params;
      webId = webId || ctx.meta.webId || 'anon';

      const resourceUri = resource.id || resource['@id'];
      if (!resourceUri) throw new MoleculerError('No resource ID provided', 400, 'BAD_REQUEST');

      const { queryDepth, jsonContext } = await ctx.call('ldp.container.getOptions', { uri: resourceUri });

      // Save the current data, to be able to send it through the event
      // If the resource does not exist, it will throw a 404 error
      const oldData = await ctx.call('ldp.resource.get', {
        resourceUri,
        accept: MIME_TYPES.JSON,
        queryDepth,
        webId
      });

      // Adds a default context, if it is missing
      if (contentType === MIME_TYPES.JSON) {
        resource = {
          '@context': jsonContext,
          ...resource
        };
      }

      // TODO : why to do it in 2 steps ? delete then insert? if an exception is raised after the delete is commited,
      // it won't be rollbacked. better to do only one call to the triplestore
      const deleteQuery = await this.buildDeleteQueryFromResource(resource);
      await ctx.call('triplestore.update', {
        query: deleteQuery,
        webId
      });

      await ctx.call('triplestore.insert', {
        resource,
        contentType,
        webId
      });

      // Get the new data, with the same formatting as the old data
      const newData = await ctx.call(
        'ldp.resource.get',
        {
          resourceUri,
          accept: MIME_TYPES.JSON,
          queryDepth,
          webId
        },
        { meta: { $cache: false } }
      );

      ctx.emit('ldp.resource.updated', {
        resourceUri,
        oldData,
        newData,
        webId
      });

      return resourceUri;
    }
  }
};
