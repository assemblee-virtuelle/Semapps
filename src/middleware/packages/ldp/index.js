module.exports = {
  LdpService: require('./service'),
  LdpContainerService: require('./services/container'),
  LdpResourceService: require('./services/resource'),
  TripleStoreAdapter: require('./adapter'),
  JsonLdStorageMixin: require('./mixins/jsonld-storage')
};
