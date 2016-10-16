import { Wix } from '../../src/index';
/* eslint-disable */
const version = require('json!../../package.json').version;
/* eslint-enable */

describe('Wix Global SDK', () => {
  it('should expose a namespace object \'Wix\' on the global scope ', () => {
    expect(window.Wix).to.be.an('object');
  });

  it('should expose an importable object \'Wix\' via import ', () => {
    expect(Wix).to.be.an('object');
  });

  it('both the imported object and the global object should be the same', () => {
    expect(window.Wix).to.deep.equal(Wix);
  });

  it('should be decorated with a version number', () => {
    expect(Wix.version).to.be.a('string');
  });

  it(`should be decorated with the correct version number, ${version}`, () => {
    expect(Wix.version).to.equal(version);
  });
});
