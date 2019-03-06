const configs = new Map([
  ['default', {
    apiUrl: '/api'
  }],
  ['localhost:8080', {
    apiUrl: 'http://localhost:3579'
  }]
])

const config = configs.get(location.host) || configs.get('default')

function request (url, options = {}) {
  const params = Object.assign(options, { mode: 'cors' })
  let response = null
  if (options.data) {
    if (!options.method) options.method = 'post'
    options.body = typeof options.data === 'string'
                 ? options.data
                 : JSON.stringify(options.data)
  }
  return fetch(url, params)
    .then((r) => {
      response = r
      return r.headers.get('Content-Type').includes('application/json')
        ? r.json()
        : r.text()
    })
    .then((data) => {
      response.data = data
      return response
    })
    .catch(console.error.bind(console))
}

function api (uri, options) {
  const url = `${config.apiUrl}${uri}`
  return request(url, options)
}

function urlParams (queryString) {
  queryString = queryString || location.search.slice(1)
  const keyValues = queryString.startsWith('&') ? queryString.slice(1) : queryString
  return new Map(keyValues.split('&')
    .map(kv => kv.split('='))
    .map((kv) => [kv[0], decodeURI(kv[1])])
  )
}

function enablePageQueryParams() {
  page('*', (ctx, next) => {
    ctx.query = urlParams()
    next()
  })
}
