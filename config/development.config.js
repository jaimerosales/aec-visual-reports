
/////////////////////////////////////////////////////////////////////
// DEVELOPMENT configuration
//
/////////////////////////////////////////////////////////////////////
const HOST_URL = 'http://localhost'
const PORT= 3000

const config = {

  env: 'development',

  client: {
    host: `${HOST_URL}`,
    env: 'development',
    port: PORT
  },

  forge: {

    oauth: {

      redirectUri: `${HOST_URL}:${PORT}/api/forge/callback/oauth`,
      authenticationUri: '/authentication/v1/authenticate',
      refreshTokenUri: '/authentication/v1/refreshtoken',
      authorizationUri: '/authentication/v1/authorize',
      accessTokenUri: '/authentication/v1/gettoken',

      baseUri: 'https://developer.api.autodesk.com',
      clientSecret: process.env.FORGE_DEV_CLIENT_SECRET,
      clientId: process.env.FORGE_DEV_CLIENT_ID,

      scope: [
        'data:read',
        'data:create',
        'data:write',
        'bucket:read',
        'bucket:create'
      ]
    },

    viewer: {
      viewer3D: 'https://developer.api.autodesk.com/derivativeservice/v2/viewers/viewer3D.js?v=v3.3.*',
      threeJS:  'https://developer.api.autodesk.com/derivativeservice/v2/viewers/three.js?v=v3.3.*',
      style:    'https://developer.api.autodesk.com/derivativeservice/v2/viewers/style.css?v=v3.3.*'
    }
  }
}

module.exports = config


