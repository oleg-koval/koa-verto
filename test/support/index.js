// setup global chai methods
const chai = require('chai');

chai.config.includeStack = true;
chai.config.showDiff = true;

global.chai = chai;
global.expect = chai.expect;
global.assert = chai.assert;
