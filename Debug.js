const defraIdentityHapiPlugin = require('../defra-identity-hapi-plugin')
const debug = require('debug')('defra.identity:index');

debug('debug test');
let appDomain = "";
const redirectUri = new URL(appDomain);
debug(`Redirect URI: ${redirectUri}`);
const config = defraIdentityHapiPlugin.register(
    {
        // identityAppUrl,
        // authRedirectUriFqdn,
        // serviceId,
        // cookiePassword,
        // appDomain,
        // clientId,
        // clientSecret,
        // defaultPolicy,
        // defaultJourney,
        isSecure: false,
        // cache: idmCache,
        // passRequestToCacheMethods,
        callbacks: {
          preLogout: async () => {
            console.log('User is logging out')
          },
        }
      }
);