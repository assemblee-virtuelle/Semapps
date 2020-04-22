const rdfParser = require('rdf-parse').default;
const streamifyString = require('streamify-string');
const N3 = require('n3');
const { negotiateTypeN3, MIME_TYPES } = require('@semapps/mime-types');
const { getPrefixJSON, getPrefixRdf } = require('../../utils');

// TODO put each method in a different file (problems with "this" not working)
module.exports = {
  async findUnusedUri(ctx, generatedId) {
    let existingBeginning = await ctx.call('triplestore.query', {
      query: `
        ${getPrefixRdf(this.settings.ontologies)}
        SELECT distinct ?uri
        WHERE {
          ?uri ?predicate ?object.
          FILTER regex(str(?uri), "^${generatedId}")
        }
      `,
      accept: MIME_TYPES.JSON
    });
    let counter = 0;
    if (existingBeginning.length > 0) {
      counter = 1;
      existingBeginning = existingBeginning.map(r => r.uri.value);
      while (existingBeginning.includes(generatedId.concat(counter))) {
        counter++;
      }
    }
    return generatedId.concat(counter > 0 ? counter.toString() : '');
  },
  async jsonldToTriples(jsonLdObject, outputContentType) {
    return new Promise((resolve, reject) => {
      const textStream = streamifyString(JSON.stringify(jsonLdObject));
      const writer = new N3.Writer({
        prefixes: getPrefixJSON(this.settings.ontologies),
        format: negotiateTypeN3(outputContentType)
      });
      rdfParser
        .parse(textStream, {
          contentType: MIME_TYPES.JSON
        })
        .on('data', quad => {
          writer.addQuad(quad);
        })
        .on('error', error => console.error(error))
        .on('end', () => {
          writer.end((error, result) => {
            resolve(result);
          });
        });
    });
  },
  buildDeleteQueryFromResource(resource) {
    return new Promise((resolve, reject) => {
      let deleteSPARQL = '';
      let counter = 0;
      let query;
      const text = typeof resource === 'string' || resource instanceof String ? resource : JSON.stringify(resource);
      const textStream = streamifyString(text);
      rdfParser
        .parse(textStream, {
          contentType: 'application/ld+json'
        })
        .on('data', quad => {
          deleteSPARQL = deleteSPARQL.concat(
            `DELETE WHERE  {<${quad.subject.value}> <${quad.predicate.value}> ?o};
            `
          );
          counter++;
        })
        .on('error', error => console.error(error))
        .on('end', () => {
          resolve(deleteSPARQL);
        });
    });
  }
};
