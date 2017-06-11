'use strict'

const hamlc = require('haml-coffee')

exports.name = 'haml-coffee'
exports.inputFormats = ['haml', 'hamlc', 'haml-coffee']
exports.outputFormat = 'html'

exports.compile = hamlc.compile
