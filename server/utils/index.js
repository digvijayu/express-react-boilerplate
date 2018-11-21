const dev = require('./../config/dev');
const test = require('./../config/test');
const prod = require('./../config/prod');
const CONST = require('./../constants');

const getEnvironmentVariable = () =>
  process.env.NODE_ENV || CONST.DEFAULT_NODE_ENV;
exports.getEnvironmentVariable = getEnvironmentVariable;

exports.getEnvironmentVariableValue = key => process.env[key];

exports.getEnvironmentVariableFromConfig = key => {
  const envVar = getEnvironmentVariable();
  switch (envVar) {
    case 'dev':
      return dev[key];
    case 'test':
      return test[key];
    case 'prod':
      return prod[key];
    default:
      return null;
  }
};
