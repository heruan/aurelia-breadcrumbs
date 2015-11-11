System.register([], function (_export) {
  "use strict";

  var InstructionFilterValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      InstructionFilterValueConverter = (function () {
        function InstructionFilterValueConverter() {
          _classCallCheck(this, InstructionFilterValueConverter);
        }

        _createClass(InstructionFilterValueConverter, [{
          key: "toView",
          value: function toView(navigationInstructions) {
            return navigationInstructions.filter(function (i) {
              if (i.config.title) {
                return true;
              } else {
                return false;
              }
            });
          }
        }]);

        return InstructionFilterValueConverter;
      })();

      _export("InstructionFilterValueConverter", InstructionFilterValueConverter);
    }
  };
});