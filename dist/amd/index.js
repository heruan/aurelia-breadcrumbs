define(['exports', './breadcrumbs', './instruction-filter'], function (exports, _breadcrumbs, _instructionFilter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(frameworkConfiguration, config) {
    frameworkConfiguration.globalResources('./breadcrumbs');
  }
});