const authURL = process.env.AUTH_SERVER_URL || 'https://auth-rmr.nouvelle-aquitaine.pro/auth';
const openIDConnectUrl = authURL + '/realms/Naq/protocol/openid-connect/token';

module.exports = {
  authURL,
  openIDConnectUrl
};
