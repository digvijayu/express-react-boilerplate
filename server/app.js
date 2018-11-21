const express = require('express');
const expressStatusMonitor = require('express-status-monitor');

const config = require('./config');
const CONST = require('./constants');
const homeController = require('./controllers/home');
const apiController = require('./controllers/api');
const { logger } = require('./utils/logger');

const app = express();

// Declare static folder
app.use(
  expressStatusMonitor({
    healthChecks: [
      {
        protocol: 'http',
        host: 'localhost',
        path: '',
        port: config.NODE_PORT
      },
      {
        protocol: 'http',
        host: 'localhost',
        path: '/random',
        port: config.NODE_PORT
      }
    ]
  })
);

app.use(express.static(CONST.PUBLIC_FOLDER_NAME));
app.get('/', homeController.index);
app.get('/api', apiController.index);

app.listen(config.NODE_PORT, () =>
  logger.info(`Server listening on port ${config.NODE_PORT}!`)
);
