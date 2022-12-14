module.exports = [
  {
    method: 'GET',
    path: '/account',
    options: {
      auth: false
    },
    handler: async function (request, h) {
      const { idm } = request.server.methods

      return h.view('account', {
        title: 'account',
        user: null,
        idm,
        claims: await idm.getClaims(request),
        credentials: await idm.getCredentials(request),
        trulyPrivate: false
      })
    }
  },
  {
    method: 'GET',
    path: '/account-private',
    options: {
      auth: 'idm'
    },
    handler: async function (request, h) {
      const { idm } = request.server.methods
      const claims = await idm.getClaims(request)
      const credentials = await idm.getCredentials(request)
      const rel = claims.relationships ? claims.relationships[0] : 'unknown:unknown:unknown:0:unknown:0'
      const roleInfo = claims.roles ? claims.roles[0] : 'unknown:unknown:0'
      const rolet = roleInfo.split(':')[1]
      const role = rolet === 'WINRecorder' ? 'WINWriter' : rolet
      const company = rel.split(':')[2]

      return h.view('account', {
        title: 'account-private',
        user: null,
        idm,
        claims,
        credentials,
        rel,
        company,
        role,
        trulyPrivate: true
      })
    }
  }
]
