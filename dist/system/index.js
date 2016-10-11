'use strict';

System.register(['./breadcrumbs', './instruction-filter'], function (_export, _context) {
  "use strict";

  var Breadcrumbs, InstructionFilterValueConverter;
  function configure(frameworkConfiguration, config) {
    frameworkConfiguration.globalResources('./breadcrumbs');
  }

  _export('configure', configure);

  return {
    setters: [function (_breadcrumbs) {
      Breadcrumbs = _breadcrumbs.Breadcrumbs;
    }, function (_instructionFilter) {
      InstructionFilterValueConverter = _instructionFilter.InstructionFilterValueConverter;
    }],
    execute: function () {}
  };
});