define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var NavigationContextValueConverter = (function () {
    function NavigationContextValueConverter() {
      _classCallCheck(this, NavigationContextValueConverter);
    }

    _createClass(NavigationContextValueConverter, [{
      key: "toView",
      value: function toView(navigationContext) {
        var routes = [];
        while (navigationContext) {
          var navigationInstruction = navigationContext.nextInstruction;
          if (navigationInstruction.config.title) {
            routes.push(navigationInstruction);
          }
          navigationContext = navigationInstruction.navigationContext.plan["default"].childNavigationContext;
        }
        return routes;
      }
    }]);

    return NavigationContextValueConverter;
  })();

  exports.NavigationContextValueConverter = NavigationContextValueConverter;
});