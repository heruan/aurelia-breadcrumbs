'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _breadcrumbs = require('./breadcrumbs');

var _instructionFilter = require('./instruction-filter');

function configure(frameworkConfiguration, config) {
  frameworkConfiguration.globalResources('./breadcrumbs');
}