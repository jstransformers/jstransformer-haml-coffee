'use strict';

var hamlc = require('haml-coffee');

exports.name = 'haml-coffee';
exports.inputFormats = ['haml', 'haml-coffee'];
exports.outputFormat = 'html';

exports.compile = hamlc.compile;
