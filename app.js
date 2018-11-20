const express = require('express');

const config = require('./config');
const CONST = require('./constants');
const homeController = require('./controllers/home');
const apiController = require('./controllers/api');

const app = express();

// Declare static folder
app.use(express.static(CONST.PUBLIC_FOLDER_NAME));

app.get('/', homeController.index);
app.get('/api', apiController.index);

app.listen(config.NODE_PORT, () =>
  console.log(`Server listening on port ${config.NODE_PORT}!`)
);
