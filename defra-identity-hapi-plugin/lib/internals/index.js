const debug = require('debug')('defra.identity:internals')
const mappings = require('./mappings')

module.exports = (
  {
    server,
    cache,
    config
  }) => {
  debug('Registering internals...')

  const internals = {
    client: require('./client')({
      server,
      cache,
      config
    }),
    routes: require('./routes')({
      server,
      cache,
      config
    }),
    root: require('./root')({
      server,
      cache,
      config
    })
  }

  debug('Done registering internals')

  return internals
}
