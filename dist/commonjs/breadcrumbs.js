'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaRouter = require('aurelia-router');

var Breadcrumbs = (function () {
  function Breadcrumbs(router) {
    _classCallCheck(this, _Breadcrumbs);

    while (router.parent) {
      router = router.parent;
    }
    this.router = router;
  }

  _createClass(Breadcrumbs, [{
    key: 'navigate',
    value: function navigate(navigationInstruction) {
      navigationInstruction.navigationContext.router.navigateToRoute(navigationInstruction.config.name, navigationInstruction.params);
    }
  }]);

  var _Breadcrumbs = Breadcrumbs;
  Breadcrumbs = (0, _aureliaTemplating.customElement)('breadcrumbs')(Breadcrumbs) || Breadcrumbs;
  Breadcrumbs = (0, _aureliaDependencyInjection.inject)(_aureliaRouter.Router)(Breadcrumbs) || Breadcrumbs;
  return Breadcrumbs;
})();

exports.Breadcrumbs = Breadcrumbs;