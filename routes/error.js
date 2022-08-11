module.exports = [
  {
    method: 'GET',
    path: '/error',
    options: {
      auth: false
    },
    handler: function (request, h) {
      const { query, server } = request

      const { idm } = server.methods

      let title = 'Whoops...'
      let message = 'An unexpected error has occurred'
      let stack// = query.stack ? JSON.parse(query.stack) : undefined
      let loginUrl

      if (query.notLoggedInErr) {
        const { next } = query

        loginUrl = idm.generateAuthenticationUrl(next)
        title = 'Whoops...'
        message = 'You need to be logged in to do that.'
      }

      return h.view('error', {
        notLoggedInErr: query.notLoggedInErr,
        loginUrl,
        title,
        message,
        stack
      })
    }
  }]
