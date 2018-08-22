const {
  getPackageFile,
  packageJsonExists,
  getPackageName,
  getPackageVersion,
  isValidVersion,
  isNotEmptyName,
  validateCustomName,
  validateCustomVersion
} = require('../functions');

describe('Test functions:', () => {
  it('should get package json file path', () => {
    const actual = getPackageFile();
    expect(actual).to.be.a('string');
    expect(actual).to.have.string('package.json');
  });

  it('should prove that package.json exists', () => {
    const actual = packageJsonExists(getPackageFile());
    expect(actual).to.be.true;
  });

  describe('getPackageName:', () => {
    it('should prove that package.json exists', () => {
      const actual = getPackageName(getPackageFile());
      expect(actual).to.be.a('string');
    });

    it('should throw if package.json is missing', () => {
      expect(() => getPackageName('/path/not/exist')).to.throw('Cannot find module \'/path/not/exist\'');
    });
  });

  describe('getPackageVersion:', () => {
    it('should get version from package.json', () => {
      const actual = getPackageVersion(getPackageFile());
      expect(actual).to.be.a('string');
    });

    it('should throw an error', () => {
      expect(() => getPackageVersion('/path/not/exist')).to.throw('Cannot find module \'/path/not/exist\'');
    });
  });

  describe('validate package version', () => {

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
    expect(validateCustomName({
      name: 'npm-package',
      version: 'v1.1.1'
    })).to.be.true;
  });

  it('should validate custom package version', () => {
    expect(validateCustomVersion({
      name: 'npm-package',
      version: 'v1.1.1'
    })).to.be.a('String');
  });
});
