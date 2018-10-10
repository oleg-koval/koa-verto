const assert = require('assert');

const getters = require('./getters');
const validators = require('./validators');

const packageFile = getters.getPackageFile();
const serviceName = getters.getPackageName(packageFile);
const serviceVersion = getters.getPackageVersion(packageFile);

assert(validators.isValidPackagePath(packageFile), 'Missing package.json file');
assert(validators.isNotEmptyName(serviceName), 'Empty or invalid package name');
assert(validators.isValidVersion(serviceVersion), 'Version is not semver');

module.exports = (options) => {
  options = options || {};
  return async (ctx, next) => {
    await next();

    const name = getters.getValidHeaderValue(
      options,
      validators.isCustomName,
      getters.getCustomName,
      serviceName
    );

    const version = getters.getValidHeaderValue(
      options,
      validators.isCustomVersion,
      getters.getCustomVersion,
      serviceVersion
    );

    ctx.set('X-Service-Name', name);
    ctx.set('X-Service-Version', version);
  };
};
