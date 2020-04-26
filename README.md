# jstransformer-haml-coffee

[haml-coffee](https://github.com/netzpirat/haml-coffee) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-haml-coffee/master.svg)](https://travis-ci.org/jstransformers/jstransformer-haml-coffee)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-haml-coffee/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-haml-coffee)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-haml-coffee/master.svg)](http://david-dm.org/jstransformers/jstransformer-haml-coffee)
[![NPM version](https://img.shields.io/npm/v/jstransformer-haml-coffee.svg)](https://www.npmjs.org/package/jstransformer-haml-coffee)

## Installation

    npm install jstransformer-haml-coffee

## API

```js
var hamlc = require('jstransformer')(require('jstransformer-haml-coffee'))

hamlc.render('%h1= Hello World!').body
//=> '<h1>Hello World!</h1>'
```

## License

MIT
