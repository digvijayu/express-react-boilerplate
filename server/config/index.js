const utils = require('./../utils');

exports.NODE_PORT =
  utils.getEnvironmentVariableValue('NODE_PORT') ||
  utils.getEnvironmentVariableFromConfig('NODE_PORT') ||
  3000;
