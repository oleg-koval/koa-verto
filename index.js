const assert = require('assert');

const getters = require('./getters');
const validators = require('./validators');

module.exports = (options) => {
  options = options || {};
  return async (ctx, next) => {
    await next();

    const packageFile = getters.getPackageFile();
    assert(validators.isValidPackagePath(packageFile), 'Missing package.json file');

    const serviceName = getters.getPackageName(packageFile);
    assert(validators.isNotEmptyName(serviceName), 'Empty or invalid package name');

    const serviceVersion = getters.getPackageVersion(packageFile);
    assert(validators.isValidVersion(serviceVersion), 'Version is not semver');

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
