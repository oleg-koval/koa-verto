const {
  getPackageFile,
  getPackageName,
  getPackageVersion
} = require('../getters');

describe('Test getter functions:', () => {
  it('should get package json file path', () => {
    const actual = getPackageFile();
    expect(actual).to.be.a('string');
    expect(actual).to.have.string('package.json');
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
});
