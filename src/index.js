require('../lib/wix.min');
export const Wix = window.Wix;
/* eslint-disable */
Wix.version = require("json!../package.json").version;
/* eslint-enable */
export default Wix;

