define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-router'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Breadcrumbs = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var Breadcrumbs = exports.Breadcrumbs = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaRouter.Router), _dec2 = (0, _aureliaTemplating.customElement)('breadcrumbs'), _dec(_class = _dec2(_class = function () {
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
  }()) || _class) || _class);
});