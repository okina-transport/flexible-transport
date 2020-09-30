const fallback = require('express-history-api-fallback');
const path = require('path');
const express = require('express');
const compression = require('compression');

const { withSecurity } = require('./security-middleware');
const { createRouter, endpointBase } = require('./router/');
const { appLog, errorLevel } = require('./log');
const { withMetrix } = require('./metrix');

const contentRoot = path.resolve(process.env.CONTENT_BASE || '../../build');

const configureApp = (app, mountpath = '') =>
  app.use(
    mountpath,
    withSecurity(withMetrix(express.Router()))
      .get('/health', (req, res) => res.json({ status: 'UP' }))
      .get('/info', (req, res) =>
        res.json({
          name: 'enki',
          environment: process.env.ENVIRONMENT,
          version: process.env.IMAGE_TAG || 'N/A',
          buildDate: process.env.BUILD_DATE,
        })
      )
      .use(compression())
      .use(express.static(contentRoot))
      .use(endpointBase, createRouter())
      .use(fallback('index.html', { root: contentRoot }))
      .use((err, req, res, next) => {
        appLog(errorLevel, `Request to ${req.url} failed: ${err.stack}`);
        next(err);
      })
      // eslint-disable-next-line no-unused-vars
      .use((err, req, res, next) => {
        res.status(500);
        res.send({
          code: 'INTERNAL_ERROR',
          message: 'Ooops. Something broke back here. Sorry!',
        });
      })
  );

module.exports = { configureApp };
