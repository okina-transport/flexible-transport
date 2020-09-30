const authURL =
    process.env.AUTH_SERVER_URL || 'https://auth-rmr.nouvelle-aquitaine.pro/auth';
const authClientId = process.env.AUTH_CLIENT_ID || 'enki';
const openIDConnectUrl =
    authURL + '/realms/Naq/protocol/openid-connect/token';

module.exports = {
  authURL,
  authClientId,
  openIDConnectUrl,
};
