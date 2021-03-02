const ObjectID = require('bson').ObjectID;
const urlJoin = require('url-join');

function getAclUriFromResourceUri(baseUrl, resourceUri) {
  return urlJoin(baseUrl, resourceUri.replace(baseUrl, '_acl/'))
}

const buildBlankNodesQuery = depth => {
  let construct = '',
    where = '';
  if (depth > 0) {
    for (let i = 1; i <= depth; i++) {
      construct += `
        ?o${i} ?p${i + 1} ?o${i + 1} .
      `;
      where += `
        OPTIONAL {
          FILTER((isBLANK(?o${i}))) .
          ?o${i} ?p${i + 1} ?o${i + 1} .
        }
      `;
    }
  }
  return { construct, where };
};

// Return an object in the form of predicate => parentPredicate
const flattenPredicate = (accumulator, predicate, parent = 'root') => {
  if (predicate.includes('/')) {
    const matches = predicate.split(/\/(.+)/);
    accumulator[matches[0]] = parent;
    flattenPredicate(accumulator, matches[1], matches[0]);
  } else {
    accumulator[predicate] = parent;
  }
  return accumulator;
};

// Transform ontology:predicate to OntologyPredicate in order to use it as a variable name
const generateSparqlVarName = predicate =>
  predicate
    .split(':')
    .map(s => s[0].toUpperCase() + s.slice(1))
    .join('');

const buildDereferenceQuery = predicates => {
  let construct = '',
    where = '';
  if (predicates) {
    const flattenedPredicates = predicates.reduce((acc, predicate) => flattenPredicate(acc, predicate), {});

    for (const [predicate, parent] of Object.entries(flattenedPredicates)) {
      const varName = generateSparqlVarName(predicate);
      const parentVarName = parent === 'root' ? '1' : generateSparqlVarName(parent);

      const query = `
        ?s${parentVarName} ${predicate} ?s${varName} .
        ?s${varName} ?p${varName} ?o${varName} .
      `;

      construct += query;
      where += `
        OPTIONAL { ${query} }
      `;
    }
  }

  return { construct, where };
};

const buildFiltersQuery = filters => {
  let where = '';
  if (filters) {
    Object.keys(filters).forEach((predicate, i) => {
      if (filters[predicate]) {
        where += `
          FILTER EXISTS { ?s1 ${predicate.startsWith('http') ? `<${predicate}>` : predicate} "${filters[predicate]}" } .
        `;
      } else {
        where += `
          FILTER NOT EXISTS { ?s1 ${predicate.startsWith('http') ? `<${predicate}>` : predicate} ?unwanted${i} } .
        `;
      }
    });
  }
  return { where };
};

// Generate a MongoDB-like object ID
const generateId = () => new ObjectID().toString();

const getPrefixRdf = ontologies => {
  return ontologies.map(ontology => `PREFIX ${ontology.prefix}: <${ontology.url}>`).join('\n');
};

const getPrefixJSON = ontologies => {
  let pattern = {};
  ontologies.forEach(ontology => (pattern[ontology.prefix] = ontology.url));
  return pattern;
};

const getSlugFromUri = str => str.match(new RegExp(`.*/(.*)`))[1];

const getContainerFromUri = str => str.match(new RegExp(`(.*)/.*`))[1];

const defaultToArray = value => (!value ? undefined : Array.isArray(value) ? value : [value]);

module.exports = {
  buildBlankNodesQuery,
  buildDereferenceQuery,
  buildFiltersQuery,
  generateId,
  getPrefixRdf,
  getPrefixJSON,
  getSlugFromUri,
  getContainerFromUri,
  defaultToArray,
  getAclUriFromResourceUri
};
