# XOBJ: Utility library for objects
![](https://api.travis-ci.org/Hkh12/xobj.svg)
![](https://david-dm.org/Hkh12/xobj.svg)
![](https://badges.frapsoft.com/os/gpl/gpl.svg?v=102)

A set of functions to work with objects, with no pain.
> Old API (v1) is available on branch v1.
## Feauters
- No dependencies _(at least for now)_
- Fast and lightweight ⚡️
## Installation
### Using NPM
```sh
npm install @hkh12/xobj
```
### Using `<script>` tag
```html
<script src="https://unpkg.com/@hkh12/xobj/dist/xobj.umd.min.js"></script>
```
## Usage
```js
// `x_` is an alias to xobj
const x_ = require('@hkh12/xobj')
``` 
**For a full list of methods, visit [here](docs/README.md).**
### Builds
There are several builds for this library. All of  them are prefixed with `xobj` and are available in `dist` directory.

| Filename | Description |
| --- | --- |
| `.esm.js` | ES Module |
| `.common.js` | **Default.** CommonJS module |
| `.umd.js` | UMD build |
| `.umd.min.js` | Minified UMD build |