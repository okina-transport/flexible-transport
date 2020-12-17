const { POST, OPTION } = require('../index');
const { forwardingProxy } = require('../../forwardingproxy');

const router = require('express').Router();
const apiUrl =
  process.env.UTTU_API_URL || 'https://tiamat-rmr.nouvelle-aquitaine.pro/api/flexible-lines/1.0';
const proxy = forwardingProxy(apiUrl);

console.log(`UTTU proxy forwarding to ${apiUrl}`);

router.use(
  '/uttu/:provider/export/:id/download',
  proxy(
    [OPTION, POST],
    (req) => `/${req.params.provider}/export/${req.params.id}/download`
  )
);

router.use(
  '/uttu/:provider',
  proxy([OPTION, POST], (req) => `/${req.params.provider}/graphql`)
);

module.exports = router;
