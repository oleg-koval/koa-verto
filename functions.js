const { join } = require('path');
const { existsSync } = require('fs');
const { valid } = require('semver');
const {
  isEmpty, prop, propSatisfies, type
} = require('ramda');
const assert = require('assert');

const getPackageFile = () => join(process.cwd(), 'package.json');
const packageJsonExists = path => existsSync(path);
const getPackageName = path => require(path).name;
const getPackageVersion = path => require(path).version;
const isValidVersion = version => valid(version);
const isNotEmptyName = name => type(name) === 'String' && !isEmpty(name);
const validateCustomName = options => propSatisfies(isNotEmptyName, 'name', options);
const validateCustomVersion = options => propSatisfies(isValidVersion, 'version', options);
const getCustomName = options => prop('name', options);
const getCustomVersion = options => prop('version', options);

const getValidHeaderValue = (options, validator, getter, valueFromPackage) => {
  if (validator(options)) {
    return getter(options);
  }
  return valueFromPackage;
};

const setVersionHeaders = (options) => {
  options = options || {};
  return async (ctx, next) => {
    await next();

    const packageFile = getPackageFile();
    assert(packageJsonExists(packageFile), 'Missing package.json file');

    const serviceName = getPackageName(packageFile);
    assert(isNotEmptyName(serviceName), 'Empty or invalid package name');

    const serviceVersion = getPackageVersion(packageFile);
    assert(isValidVersion(serviceVersion), 'Version is not semver');

    const name = getValidHeaderValue(options, validateCustomName, getCustomName, serviceName);
    const version = getValidHeaderValue(
      options,
      validateCustomVersion,
      getCustomVersion,
      serviceVersion
    );

    ctx.set('X-Service-Name', name);
    ctx.set('X-Service-Version', version);
  };
};

module.exports = {
  getPackageFile,
  packageJsonExists,
  getPackageName,
  getPackageVersion,
  isValidVersion,
  isNotEmptyName,
  setVersionHeaders,
  validateCustomName,
  validateCustomVersion
};
