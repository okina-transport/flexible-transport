const helmet = require('helmet');
const bodyParser = require('body-parser');
const openIDConnectUrl = require('./config/auth').openIDConnectUrl;
const { appLog, errorLevel } = require('./log');

const reportUri = '/csp-violation-report';

const withCsp = (app) => {
  app.use(
    reportUri,
    bodyParser.json({
      type: ['json', 'application/csp-report'],
    })
  );

  const firefoxCspBugCase = (headers, body) =>
    headers['user-agent'] &&
    headers['user-agent'].includes('Firefox/') &&
    body['violated-directive'].startsWith('style-src') &&
    body['blocked-uri'] === 'self';

  app.post(reportUri, (req, res) => {
    if (!firefoxCspBugCase(req.headers, req.body)) {
      appLog(errorLevel, `CSP Violation: ${req.body || 'No data received!'}`);
    }
    res.status(204).end();
  });
  return app;
};

const withSecurity = (app) => {
  const inQuote = (str) => `'${str}'`;
  const cspConfig = () => {
    const devExtras = {
      scriptSrc: [
        inQuote('self'),
        inQuote('unsafe-eval'),
        inQuote('unsafe-inline'),
      ],
    };

    const directives = Object.assign(
      {},
      {
        defaultSrc: [inQuote('self')],
        connectSrc: [
          inQuote('self'),
          openIDConnectUrl,
          'ws:',
          'https://sentry.okina.fr',
        ],
        styleSrc: [inQuote('self'), inQuote('unsafe-inline')],
        imgSrc: ['*', 'data:'],
        frameSrc: ['blob:'],
        reportUri,
      },
      process.env.NODE_ENV === 'development' ? devExtras : undefined
    );

    return { directives };
  };

  app.use(helmet.noSniff());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.xssFilter());
  app.use(helmet.contentSecurityPolicy(cspConfig()));
  return withCsp(app);
};

module.exports = { withSecurity };
