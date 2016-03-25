'use strict';

System.register(['./breadcrumbs', './instruction-filter'], function (_export, _context) {
  var Breadcrumbs, InstructionFilterValueConverter;
  return {
    setters: [function (_breadcrumbs) {
      Breadcrumbs = _breadcrumbs.Breadcrumbs;
    }, function (_instructionFilter) {
      InstructionFilterValueConverter = _instructionFilter.InstructionFilterValueConverter;
    }],
    execute: function () {
      function configure(frameworkConfiguration, config) {
        frameworkConfiguration.globalResources('./breadcrumbs');
      }

      _export('configure', configure);
    }
  };
});