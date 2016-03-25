'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breadcrumbs = undefined;

var _dec, _dec2, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaRouter = require('aurelia-router');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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