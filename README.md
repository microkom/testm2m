# M2M API data download

## Overview

This will show a list of the last 50 components in the M2M server with all its characteristics.

## Before starting

Run 
- `npm install`: download all necessary included components.
- `npm run build`: build the components for production into _dist/components.js_


## Commands

- `npm start`: run the server and watch for files change. Perfect for development.
- `npm run watch`: watch for any component file change in _src/components_ and rebuild into _dist/components.js_.
- `npm run pre-deploy`: copies the required assets from node modules into the vendors folder


## Tree structure

```
dist/ # compiled files
  components.js # compiled Riot tags
src/  # source files
  components/ # Riot tags
  js/ # source JS files
    vendors/    # 3rd party JS libs
index.html  # the app entry point
```


## Opinionated

- Compilation is made simple via npm command line into a single file
- Routing is based on [Page.js](https://github.com/visionmedia/page.js)
- Riot files use `.html` extension
