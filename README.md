# wix-sdk

> Wix's App Market SDK module for 3rd-party applications

### Why this module, and how to use?
If you're using an npm-centric client build, you might want to use an
'import' statement instead of a global for code consistency.

### What it does?
It only exposes the global 'Wix' variable that is available after loading 
the Wix SDK script as an (importable) object reference.

### Example:
```javascript
import Wix from 'Wix';
Wix.Features.isSupported(Wix.Features.Types.RESIZE_COMPONENT, function (data){console.log(data)});
```
