# front-check-browser-version

## Installation:
```
npm i -S git+ssh://git@github.com:AtlantPlatform/front-check-browser-version.git
```
## Add to project:
### With webpack:
Insert into the entry point
```
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: [
      'babel-polyfill',
      'check-browser-version',
      './src/main.js'
    ]
  },
```
### With vue init file:
Import module:
```
import 'check-browser-version';
```
