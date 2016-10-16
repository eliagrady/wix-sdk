/* eslint-disable */
require('../lib/wix.min');
export const Wix = window.Wix;
Wix.version = require("json!../package.json").version;
export default Wix;
/* eslint-enable */
