const { existsSync } = require('fs');
const { valid } = require('semver');
const {
  isEmpty, propSatisfies, type
} = require('ramda');

const isValidVersion = version => valid(version);
const isNotEmptyName = name => type(name) === 'String' && !isEmpty(name);
const isCustomName = options => propSatisfies(isNotEmptyName, 'name', options);
const isCustomVersion = options => propSatisfies(isValidVersion, 'version', options);
const isValidPackagePath = path => existsSync(path);

module.exports = {
  isValidVersion,
  isNotEmptyName,
  isCustomName,
  isCustomVersion,
  isValidPackagePath
};
