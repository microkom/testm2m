# Eurordis Contact-Database


## Global functions

- `request()`: a global function wrapping _fetch_ for calling APIs. Returns a JSON content when available, text otherwise.


## Commands

- `npm start`: run the server and watch for files change. Perfect for development.
- `npm run watch`: watch for any component file change in _src/components_ and rebuild into _dist/components.js_.
- `npm build`: build the components for production into _dist/components.js_
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
