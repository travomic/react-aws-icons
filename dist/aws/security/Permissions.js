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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Permissions"), _react.default.createElement("path", {
      style: {
        "fill": "#7d7c7c"
      },
      d: "M67.38,24.57a3,3,0,0,1,3,3v47.4a3,3,0,0,1-3,3H32.62a3,3,0,0,1-3-3V27.53a3,3,0,0,1,3-3H67.38Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#d2d3d3"
      },
      d: "M67.38,22.09a3,3,0,0,1,3,3v47.4a3,3,0,0,1-3,3H32.62a3,3,0,0,1-3-3V25.05a3,3,0,0,1,3-3H67.38Z"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "38.39 33.67 35.6 30.64 32.51 33.72 32.51 33.72 38.33 39.54 48.16 29.71 45.92 27.43 38.39 33.67"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "38.39 47.62 35.6 44.58 32.51 47.67 32.51 47.67 38.33 53.49 48.16 43.66 45.92 41.37 38.39 47.62"
    }), _react.default.createElement("g", {
      style: {
        "isolation": "isolate"
      }
    }, _react.default.createElement("path", {
      style: {
        "fill": "#e05243"
      },
      d: "M38.72,61.57l-6-5.4h2.92l4.56,4.34,4.77-4.34h2.72l-6,5.4L48,67.28h-3l-4.92-4.59-5.07,4.59H32.34Z"
    }))) // -- END of generated content.

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