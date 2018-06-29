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
    }), _react.default.createElement("title", null, "Lex"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "73.36 77.52 36.36 66.1 36.32 55.7 81.36 60.62 73.36 77.52",
      fill: "#2e73b8"
    }), _react.default.createElement("polygon", {
      points: "81.14 48.34 44.67 48.87 44.67 57.18 81.14 60.6 81.14 48.34",
      fill: "#19486f"
    }), _react.default.createElement("polygon", {
      points: "26.73 22.43 63.73 33.85 63.68 44.3 18.74 39.33 26.73 22.43",
      fill: "#2e73b8"
    }), _react.default.createElement("polygon", {
      points: "18.96 51.6 55.42 51.08 55.42 42.77 18.96 39.35 18.96 51.6",
      fill: "#99bce3"
    }), _react.default.createElement("polygon", {
      points: "41.1 50.84 20.32 51.04 20.32 65.65 41.1 62.74 41.1 50.84",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "79.6 44.72 59.05 45.69 59.05 37.13 79.6 34.23 79.6 44.72",
      fill: "#205b99"
    }), _react.default.createElement("rect", {
      x: "39.81",
      y: "14.02",
      width: "20.43",
      height: "16.31",
      fill: "#2e73b8"
    }), _react.default.createElement("rect", {
      x: "39.88",
      y: "70.07",
      width: "20.36",
      height: "15.91",
      fill: "#2e73b8"
    }), _react.default.createElement("polygon", {
      points: "84 25.94 60.24 14.05 49.99 25.34 49.99 25.34 79.6 34.23 79.6 44.72 49.99 41.75 49.99 58.26 71.61 56.08 71.61 50.02 75.96 55.65 79.6 60.35 79.69 60.46 79.6 60.59 75.97 66.75 71.61 74.14 71.61 68.06 49.99 74.52 49.99 74.52 60.37 85.85 84 74.03 84 64.43 84 35.53 84 25.94",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "20.32 55.27 49.99 58.26 49.99 41.75 28.59 43.9 28.59 50.04 24.13 44.34 20.32 39.47 24.15 33.1 28.59 25.7 28.59 31.77 49.99 25.37 49.99 25.34 39.81 14.02 16 25.93 16 35.53 16 64.35 16 74.04 39.88 85.98 49.99 74.52 20.32 65.65 20.32 55.27",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "79.6 34.23 59.05 37.13 28.59 31.77 49.99 25.34 79.6 34.23",
      fill: "#19486f"
    }), _react.default.createElement("polygon", {
      points: "71.61 68.06 41.1 62.74 20.32 65.65 49.99 74.52 71.61 68.06",
      fill: "#99bce3"
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