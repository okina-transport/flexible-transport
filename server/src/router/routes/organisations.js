const { GET } = require('../index');
const { forwardingProxy } = require('../../forwardingproxy');

const router = require('express').Router();

const apiUrl = process.env.ORGANISATIONS_API_URL || 'https://tiamat-rmr.nouvelle-aquitaine.pro/api/';
const proxy = forwardingProxy(apiUrl);
console.log(`Organisations proxy forwarding to ${apiUrl}`);

router.use(
  '/organisations',
  proxy([GET], () => '/organisations/1.0')
);

module.exports = router;
