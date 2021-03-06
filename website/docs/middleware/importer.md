---
title: Importer
---

This service allows you to import JSON data easily.

## Features

- Import data, under the form of JSON-formatted arrays
- Allow to create different kind of import actions
- The import action will be called once per items in the JSON array

## Dependencies

- None

## Install

```bash
$ npm install @semapps/importer --save
```

## Usage

```js
const { ImporterService } = require('@semapps/importer');
const path = require('path');

module.exports = {
  mixins: [ImporterService],
  settings: {
    importsDir: path.resolve(__dirname, '../imports'),
    allowedActions: ['createObject']
  },
  actions: {
    // Called once per items in array
    createObject(ctx) {
      const { data, userId } = ctx.params;
      // Handle stuff here...
    }
  }
};
```

### Importing data

Start Moleculer in REPL mode and call the `import` action like this:

```
mol$ call importer.import --action createObject --fileName objects.json
```

Any other parameter you give will be passed to the action.

## Service settings

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `importsDir` | `string` | **required** | Directory where the JSON files are located |
| `allowedActions` | `array` | **required** | List of allowed import actions |

## Actions

### `import`

##### Parameters
| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `action` | `string` | **required** | Name of the action |
| `fileName` | `string` | **required** | Name of the file, located in the `baseDir` directory |

Any other parameter you give will be passed to the action.
