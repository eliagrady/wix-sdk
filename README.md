# wix-sdk

> Wix's App Market SDK module for 3rd-party applications

[![npm version](https://badge.fury.io/js/wix-sdk.svg)](https://badge.fury.io/js/wix-sdk)

## Why this module, and how to use?
If you're using an npm-centric client build, you might want to use an
'import' statement instead of a global for code consistency.

### What it does?
It only exposes the global 'Wix' variable that is available after loading 
the Wix SDK script as an (importable) object reference.

## Code example
```js
import Wix from 'wix-sdk';

// Now we have the Wix global variable, we can call methods on it:
const cacheKiller = Wix.Utils.getCacheKiller();
const resizeSupported = Wix.Features.isSupported(Wix.Features.Types.RESIZE_COMPONENT, function (data){console.log(data)});
// ... your awesome app code here!

```
