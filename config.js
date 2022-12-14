const path = require('path')

require('dotenv').config({ path: path.join(__dirname, '.env') })

const { env } = process

module.exports = {
  app: {
    host: env.HOST || undefined, // Make sure it's undefined if not truey - heroku only wants to bind port
    port: env.PORT || 8000,
    domain: env.DOMAIN || `http://${env.HOST}:${env.PORT}`
  },

  identity: {
    identityAppUrl: env.IDENTITY_APP_URL,
    serviceId: env.IDENTITY_SERVICEID,
    authRedirectUriFqdn: env.IDENTITY_AUTHREDIRECTURIFQDN,
    cookieName: env.IDENTITY_COOKIENAME,
    cookiePassword: env.IDENTITY_COOKIEPASSWORD,
    clientId: env.IDENTITY_CLIENTID,
    clientSecret: env.IDENTITY_CLIENTSECRET,
    defaultPolicy: env.IDENTITY_DEFAULT_POLICY,
    defaultJourney: env.IDENTITY_DEFAULT_JOURNEY
  },

  serviceRoleId: env.IDENTITY_SERVICEROLEID,
  isSecure: env.IS_SECURE === 'true',

  cache: {
    ttlMs: 24 * 60 * 60 * 1000,
    segment: 'idm-cache-segment'
  },

  mongoCache: {
    enabled: env.USE_MONGODB === 'true',
    host: '127.0.0.1',
    connectionString: env.MONGO_CONNECTIONSTRING || undefined
  }
}
