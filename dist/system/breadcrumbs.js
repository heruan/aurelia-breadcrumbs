'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', 'aurelia-router'], function (_export, _context) {
  "use strict";

  var inject, customElement, Router, _dec, _dec2, _class, Breadcrumbs;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _export('Breadcrumbs', Breadcrumbs = (_dec = inject(Router), _dec2 = customElement('breadcrumbs'), _dec(_class = _dec2(_class = function () {
        function Breadcrumbs(router) {
          _classCallCheck(this, Breadcrumbs);

          while (router.parent) {
            router = router.parent;
          }
          this.router = router;
        }

        Breadcrumbs.prototype.navigate = function navigate(navigationInstruction) {
          navigationInstruction.router.navigateToRoute(navigationInstruction.config.name, navigationInstruction.params);
        };

        return Breadcrumbs;
      }()) || _class) || _class));

      _export('Breadcrumbs', Breadcrumbs);
    }
  };
});