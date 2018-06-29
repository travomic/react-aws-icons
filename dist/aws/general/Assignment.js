"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var AWSIcon = function AWSIcon(props) {
  var size = props.size,
      otherProps = _objectWithoutProperties(props, ["size"]);

  return (// -- START of generated SVG source.
    _react.default.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      size: size
    }, otherProps, {
      height: size,
      viewBox: "0 0 100 100"
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Assignment"), _react.default.createElement("path", {
      style: {
        "fill": "#4f4f4f"
      },
      d: "M55.77,24.34a3,3,0,0,1,3,3l11.75,45v2.78a3,3,0,0,1-3,3h-35a3,3,0,0,1-3-3V72.61L42.71,27.35a3,3,0,0,1,3-3Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#acacac"
      },
      d: "M67.52,21.86a3,3,0,0,1,3,3V72.61a3,3,0,0,1-3,3h-35a3,3,0,0,1-3-3V24.87a3,3,0,0,1,3-3Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M57.16,28.67h8.3V32h-8.3Zm-11.38,0h8.3V32h-8.3Zm-11.37,0h8.3V32h-8.3Zm0,5.76h8.3v3.34h-8.3Zm.05,5.75h8.3v3.34h-8.3Zm8.32,5.76v3.34h-8.3V45.94Zm-8.3,5.76h8.3V55h-8.3Zm8.35,9.1h-8.3V57.45h8.3Zm2.95-26.36h8.3v3.34h-8.3Zm.05,5.75h8.3v3.34h-8.3Zm8.32,5.76v3.34h-8.3V45.94Zm-8.3,5.76h8.3V55h-8.3Zm8.36,9.1h-8.3V57.45h8.3Zm3-26.36h8.3v3.34h-8.3Zm.05,5.75h8.3v3.34h-8.3Zm8.32,5.76v3.34h-8.3V45.94Zm-8.3,5.76h8.3V55h-8.3Zm8.36,9.1H57.28V57.45h8.31Z"
    })) // -- END of generated content.

  );
};

AWSIcon.propTypes = {
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
AWSIcon.defaultProps = {
  size: 24
};
var _default = AWSIcon;
exports.default = _default;