module.exports = {
  cookieName: 'idm',
  cacheSegment: 'idm',
  cacheCookieTtlMs: 24 * 60 * 60 * 1000,
  passRequestToCacheMethods: false,
  loginOnDisallow: false,
  isSecure: false,
  outboundPath: '/login/out',
  redirectUri: '/login/return',
  logoutPath: '/logout',
  disallowedRedirectPath: '/error',
  postAuthenticationRedirectJsPath: '/postAuthRedirect',
  onByDefault: false,
  defaultBackToPath: '/',
  callbacks: {},
  defaultScope: 'offline_access openid',
  retryDelayMultiplierSecs: 1.5
}
