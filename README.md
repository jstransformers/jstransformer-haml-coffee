# jstransformer-haml-coffee

JSTransformer support for [haml-coffee](https://github.com/netzpirat/haml-coffee).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-haml-coffee/master.svg)](https://travis-ci.org/jstransformers/jstransformer-haml-coffee)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-haml-coffee/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-haml-coffee?branch=master)
[![NPM version](https://img.shields.io/npm/v/jstransformer-haml-coffee.svg)](https://www.npmjs.org/package/jstransformer-haml-coffee)

## Installation

    npm install jstransformer-haml-coffee

## API

```js
var hamlc = require('jstransformer')(require('jstransformer-haml-coffee'))

foo.render('%h1= Hello World!').body
//=> '<h1>Hello World!</h1>'
```

## License

MIT
