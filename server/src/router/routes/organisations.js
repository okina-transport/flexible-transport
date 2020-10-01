const { GET } = require('../index');
const { forwardingProxy } = require('../../forwardingproxy');

const router = require('express').Router();

const apiUrl = process.env.ORGANISATIONS_API_URL || 'https://api.dev.entur.io/organisations/v1/register';
const proxy = forwardingProxy(apiUrl);
console.log(`Organisations proxy forwarding to ${apiUrl}`);

router.use(
  '/organisations',
  proxy([GET], () => '/organisations/1.0')
);

module.exports = router;
