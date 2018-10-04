const {
  isValidPackagePath,
  isValidVersion,
  isNotEmptyName,
  isCustomName,
  isCustomVersion
} = require('../validators');

const {
  getPackageFile,
  getPackageVersion
} = require('../getters');

describe('Test validation functions:', () => {
  it('should prove that package.json exists', () => {
    const actual = isValidPackagePath(getPackageFile());
    expect(actual).to.be.true;
  });

  it('should not throw an exception for valid package versions', () => {
    const fixture = [
      '0.0.0',
      '0.10.0',
      'v1.0.0',
      '0.0.0-foo',
      '1.2.3-4',
      '2.7.2+asdf',
      '1.2.3-a.b.c.10.d.5',
      '2.7.2-foo+bar',
      '1.2.3-alpha.10.beta.0',
      '1.2.3-alpha.10.beta.0+build.unicorn.rainbow'
    ];

    for (const el of fixture) {
      expect(isValidVersion(el)).not.to.be.a('null');
    }
  });

  it('should throw an exception for invalid package versions', () => {
    const fixture = [
      '0.99',
      '1.1.01',
      '1.01.1',
      '01.1.1'
    ];

    for (const el of fixture) {
      expect(isValidVersion(el)).to.be.a('null');
    }
  });
});

it('should validate a package name', () => {
  expect(() => isNotEmptyName(getPackageVersion(getPackageFile()))).to.not.throw();
});

it('should validate custom package name', () => {
  expect(isCustomName({
    name: 'npm-package',
    version: 'v1.1.1'
  })).to.be.true;
});

it('should validate custom package version', () => {
  expect(isCustomVersion({
    name: 'npm-package',
    version: 'v1.1.1'
  })).to.be.a('String');
});
