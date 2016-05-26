'use strict';

var compose = require('ramda').compose;

var baseConfig = require('./webpack.config');
var babelHot = require('./partials/babelHot');
var entryHot = require('./partials/entryHot');
var outputDev = require('./partials/outputDev');
var sourceMapDev = require('./partials/sourceMapDev');

module.exports = compose(
    babelHot,
    entryHot,
    outputDev,
    sourceMapDev
)(baseConfig);
