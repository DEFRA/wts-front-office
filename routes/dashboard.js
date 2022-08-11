module.exports = [
  {
    method: 'GET',
    path: '/dashboard',
    options: {
      auth: 'idm'
    },
    handler: async function (request, h) {
      const { idm } = request.server.methods
      const claims = await idm.getClaims(request)
      const credentials = await idm.getCredentials(request)
      const rel = claims.relationships ? claims.relationships[0] : 'unknown:unknown:unknown:0:unknown:0'
      const roleInfo = claims.roles ? claims.roles[0] : 'unknown:unknown:0'
      const role = roleInfo.split(':')[1]
      const company = rel.split(':')[2]

      return h.view('dashboard', {
        title: 'dashboard',
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
