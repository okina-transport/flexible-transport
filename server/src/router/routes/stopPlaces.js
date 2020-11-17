const { POST, OPTION } = require('../index');
const { forwardingProxy } = require('../../forwardingproxy');

const router = require('express').Router();
const apiUrl = 'https://api.na.okina.fr/api/stop_places/1.0/graphql';
const proxy = forwardingProxy(apiUrl);

console.log(`stopPlaces proxy forwarding to ${apiUrl}`);

router.use(
  '/stopPlaces',
  proxy([OPTION, POST], (req) => '')
);

module.exports = router;
