System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(frameworkConfiguration, config) {
    frameworkConfiguration.globalResources('./breadcrumbs');
  }

  return {
    setters: [],
    execute: function () {}
  };
});