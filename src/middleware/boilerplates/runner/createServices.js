const { LdpService, TripleStoreAdapter } = require('@semapps/ldp');
const { SparqlEndpointService } = require('@semapps/sparql-endpoint');
const FusekiAdminService = require('@semapps/fuseki-admin');
const {
  ActivityService,
  BotService,
  OutboxService,
  InboxService,
  FollowService,
  MongoDbCollectionService,
  ActorService,
  ObjectService
} = require('@semapps/activitypub');
const TripleStoreService = require('@semapps/triplestore');
const { WebIdService } = require('@semapps/webid');
const MongoDbAdapter = require('moleculer-db-adapter-mongo');
const CONFIG = require('./config');
const ontologies = require('./ontologies');

function createServices(broker) {
  // TripleStore
  broker.createService(TripleStoreService, {
    settings: {
      sparqlEndpoint: CONFIG.SPARQL_ENDPOINT,
      mainDataset: CONFIG.MAIN_DATASET,
      jenaUser: CONFIG.JENA_USER,
      jenaPassword: CONFIG.JENA_PASSWORD
    }
  });
  broker.createService(FusekiAdminService, {
    settings: {
      sparqlEndpoint: CONFIG.SPARQL_ENDPOINT,
      jenaUser: CONFIG.JENA_USER,
      jenaPassword: CONFIG.JENA_PASSWORD
    }
  });

  // SOLiD
  broker.createService(LdpService, {
    settings: {
      baseUrl: CONFIG.HOME_URL + 'ldp/',
      ontologies
    }
  });
  broker.createService(SparqlEndpointService, {
    settings: {}
  });
  broker.createService(WebIdService, {
    settings: {
      usersContainer: CONFIG.HOME_URL + 'users/'
    }
  });

  // ActivityPub
  broker.createService(MongoDbCollectionService, {
    adapter: new MongoDbAdapter(CONFIG.MONGODB_URL)
  });
  broker.createService(ActorService, {
    adapter: new TripleStoreAdapter('ldp'),
    settings: {
      containerUri: CONFIG.HOME_URL + 'users/'
    },
    dependencies: ['ldp'] // TODO set this in TripleStoreAdapter
  });
  broker.createService(ActivityService, {
    adapter: new MongoDbAdapter(CONFIG.MONGODB_URL),
    settings: {
      containerUri: CONFIG.HOME_URL + 'activities/'
    }
  });
  broker.createService(ObjectService, {
    adapter: new TripleStoreAdapter('ldp'),
    settings: {
      containerUri: CONFIG.HOME_URL + 'objects/'
    },
    dependencies: ['ldp'] // TODO set this in TripleStoreAdapter
  });
  broker.createService(FollowService);
  broker.createService(InboxService);
  broker.createService(OutboxService);

  // ActivityPub Bot
  broker.createService({
    name: 'match-bot',
    mixins: [BotService],
    dependencies: ['activitypub.outbox'],
    settings: {
      actor: {
        uri: CONFIG.HOME_URL + 'users/' + 'match-bot',
        username: 'match-bot',
        name: 'Match Bot'
      }
    },
    actorCreated(actor, broker) {
      broker.call('activitypub.outbox.post', {
        username: actor.preferredUsername,
        '@context': 'https://www.w3.org/ns/activitystreams',
        actor: actor.id,
        type: 'Follow',
        object: 'http://localhost:3000/users/srosset81'
      });
    },
    inboxReceived(activity) {
      console.log('Activity received in inbox', activity);
    }
  });
}

module.exports = createServices;
