const router = require('express').Router();
const authURL = require('../../config/auth').authURL;

router.get('/keycloak.json', (req, res) =>
  res.json({
    realm: 'Naq',
    'auth-server-url': authURL,
    'ssl-required': 'external',
    resource: 'neti-frontend',
    'public-client': true
  })
);

module.exports = router;
