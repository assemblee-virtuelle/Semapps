const jsonld = require('jsonld');
const fetch = require('node-fetch');
const { SparqlJsonParser } = require('sparqljson-parse');
const { MIME_TYPES, negotiateType } = require('@semapps/mime-types');

const TripleStoreService = {
  name: 'triplestore',
  settings: {
    sparqlEndpoint: null,
    jenaUser: null,
    jenaPassword: null
  },
  actions: {
    insert: {
      visibility: 'public',
      params: {
        resource: {
          type: 'multi',
          rules: [{ type: 'string' }, { type: 'object' }]
        },
        contentType: {
          type: 'string',
          optional: true
        },
        webId: {
          type: 'string',
          optional: true
        }
      },
      async handler(ctx) {
        const { resource, contentType, webId } = ctx.params;

        let rdf;
        if (contentType !== MIME_TYPES.JSON) {
          rdf = resource;
        } else {
          rdf = await jsonld.toRDF(resource, {
            format: 'application/n-quads'
          });
        }

        const response = await fetch(this.settings.sparqlEndpoint + this.settings.mainDataset + '/update', {
          method: 'POST',
          body: `INSERT DATA { ${rdf} }`,
          headers: {
            'Content-Type': 'application/sparql-update',
            'X-SemappsUser': webId || ctx.meta.webId,
            Authorization: this.Authorization
          }
        });

        if (!response.ok) throw new Error(response.statusText);
      }
    },
    countTriplesOfSubject: {
      visibility: 'public',
      params: {
        uri: {
          type: 'string'
        },
        webId: {
          type: 'string',
          optional: true
        }
      },
      async handler(ctx) {
        const webId = ctx.params.webId || ctx.meta.webId;
        const results = await ctx.call('triplestore.query', {
          query: `
            SELECT ?p ?v
            WHERE {
              <${ctx.params.uri}> ?p ?v
            }
          `,
          accept: MIME_TYPES.JSON,
          webId: webId
        });
        return results.length;
      }
    },
    update: {
      visibility: 'public',
      params: {
        query: {
          type: 'string'
        },
        webId: {
          type: 'string',
          optional: true
        }
      },
      async handler(ctx) {
        const webId = ctx.params.webId || ctx.meta.webId;
        const query = ctx.params.query;
        const response = await fetch(this.settings.sparqlEndpoint + this.settings.mainDataset + '/update', {
          method: 'POST',
          body: query,
          headers: {
            'Content-Type': 'application/sparql-update',
            'X-SemappsUser': webId,
            Authorization: this.Authorization
          }
        });
        if (!response.ok) throw new Error(response.statusText);
      }
    },
    query: {
      visibility: 'public',
      params: {
        query: {
          type: 'string'
        },
        webId: {
          type: 'string',
          optional: true
        },
        accept: {
          type: 'string'
        }
      },
      async handler(ctx) {
        const { accept, webId, query } = ctx.params;
        const acceptNegotiatedType = negotiateType(accept);
        const acceptType = acceptNegotiatedType.mime;
        const fusekiAccept = acceptNegotiatedType.fusekiMapping;
        const headers = {
          'Content-Type': 'application/sparql-query',
          'X-SemappsUser': webId || ctx.meta.webId,
          Authorization: this.Authorization,
          Accept: fusekiAccept
        };

        const response = await fetch(this.settings.sparqlEndpoint + this.settings.mainDataset + '/query', {
          method: 'POST',
          body: query,
          headers
        });
        if (!response.ok) throw new Error(response.statusText);
        const regex = /(CONSTRUCT|SELECT|ASK).*/gm;
        const verb = regex.exec(query)[1];
        switch (verb) {
          case 'ASK':
            if (acceptType === MIME_TYPES.JSON) {
              const jsonResult = await response.json();
              return jsonResult.boolean;
            } else {
              throw new Error('Only JSON accept type is currently allowed for ASK queries');
            }
            break;
          case 'SELECT':
            const jsonResult = await response.json();
            if (acceptType === MIME_TYPES.JSON) {
              return await this.sparqlJsonParser.parseJsonResults(jsonResult);
            } else {
              return jsonResult;
            }
            break;
          case 'CONSTRUCT':
            if (acceptType === MIME_TYPES.TURTLE || acceptType === MIME_TYPES.TRIPLE) {
              return await response.text();
            } else {
              return await response.json();
            }
            break;
          default:
            throw new Error('SPARQL Verb not supported');
        }
      }
    },
    dropAll: {
      visibility: 'public',
      params: {
        webId: {
          type: 'string',
          optional: true
        }
      },
      async handler(ctx) {
        const webId = ctx.params.webId || ctx.meta.webId;
        const response = await fetch(this.settings.sparqlEndpoint + this.settings.mainDataset + '/update', {
          method: 'POST',
          body: 'update=DROP+ALL',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-SemappsUser': webId,
            Authorization: this.Authorization
          }
        });

        if (!response.ok) throw new Error(response.statusText);

        return response;
      }
    }
  },
  started() {
    this.sparqlJsonParser = new SparqlJsonParser();
    this.Authorization =
      'Basic ' + Buffer.from(this.settings.jenaUser + ':' + this.settings.jenaPassword).toString('base64');
  }
};

module.exports = {
  TripleStoreService
};
