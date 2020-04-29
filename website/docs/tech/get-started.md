---
title: Get started with SemApps
---

### Setup your LDP server

First install the [moleculer-cli](https://github.com/moleculerjs/moleculer-cli) tool.

Then initialize a new project based on this template with this command:

```bash
$ moleculer init assemblee-virtuelle/semapps-template-ldp my-project
```

You can now go to the newly-created directory:

```bash
$ cd my-project
```

### Launch your local Jena Fuseki instance

Jena Fuseki is a semantic triple store. It is where your app's data will be stored.

You need [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed on your machine.

```bash
$ docker-compose up
```

Jena Fuseki is now available at the URL http://localhost:3030

Please start by creating a `localData` dataset. This is where your triples will go.

### Run Moleculer in dev mode

```bash
$ npm run dev
```

Your instance of SemApps is available at http://localhost:3030

### Testing the LDP server

Post an ActivityStreams Note to `/ldp/as:Note` LDP container:

```
POST /ldp/as:Note HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Accept: */*
Content-Length: 97

{
 "@context": "https://www.w3.org/ns/activitystreams",
 "type": "Note",
 "name": "Hello World"
}
```

Retrieve the `/ldp/as:Note` LDP container:

```
GET /ldp/as:Note HTTP/1.1
Host: localhost:3000
Accept: application/ld+json
```

You should get this result:

```json
{
  "@context": {
    "ldp": "http://www.w3.org/ns/ldp#",
    "as": "https://www.w3.org/ns/activitystreams#"
  },
  "@id": "http://localhost:3000/ldp/as:Note",
  "@type": [
    "ldp:Container",
    "ldp:BasicContainer"
  ],
  "ldp:contains": [
    {
      "@id": "http://localhost:3000/ldp/as:Note/db78b000",
      "@type": "as:Note",
      "as:name": "Hello World"
    }
  ]
}
```