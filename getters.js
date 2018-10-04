const { join } = require('path');
const { prop } = require('ramda');

const getPackageFile = () => join(process.cwd(), 'package.json');
const getPackageName = path => require(path).name;
const getPackageVersion = path => require(path).version;
const getCustomName = options => prop('name', options);
const getCustomVersion = options => prop('version', options);
const getValidHeaderValue = (options, validator, getter, valueFromPackage) => {
  if (validator(options)) {
    return getter(options);
  }
  return valueFromPackage;
};

module.exports = {
  getPackageFile,
  getPackageName,
  getPackageVersion,
  getCustomVersion,
  getCustomName,
  getValidHeaderValue
};
