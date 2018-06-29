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
    }), _react.default.createElement("title", null, "Snowball"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "50 45.56 74.43 28.41 83.97 45.2 60.88 46.15 50 45.56",
      fill: "#5e1f18"
    }), _react.default.createElement("polygon", {
      points: "50 45.56 25.57 31.45 16.04 45.2 39.12 46.15 50 45.56",
      fill: "#5e1f18"
    }), _react.default.createElement("polygon", {
      points: "50 54.44 25.57 73.49 16.04 54.8 39.12 53.85 50 54.44",
      fill: "#f2b0a9"
    }), _react.default.createElement("polygon", {
      points: "50 54.44 74.43 73.49 83.97 54.8 60.88 53.85 50 54.44",
      fill: "#f2b0a9"
    }), _react.default.createElement("polygon", {
      points: "74.43 44.24 83.97 45.2 83.97 25.98 74.43 28.41 74.43 44.24",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "39.86 29.45 74.43 29.12 74.43 44.24 50 45.56 39.86 29.45",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "74.43 55.76 83.97 54.8 83.97 74.02 74.43 73.16 74.43 55.76",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "41.38 70.26 74.43 67.31 74.43 55.76 50 54.44 41.38 70.26",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "50 29.12 21.49 29.31 25.57 44.24 50 45.56 50 29.12",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "25.57 44.24 16.04 45.2 16.04 25.98 25.57 26.61 25.57 44.24",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "25.57 55.76 16.04 54.8 16.04 74.02 25.57 73.02 25.57 55.76",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "50 71.64 25.57 67.31 25.57 55.76 50 54.44 50 71.64",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "64.35 39.91 50 37.77 36.44 50.52 50 62.37 64.35 60.2 64.35 39.91",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "35.65 39.91 50 37.77 50 62.37 35.65 60.2 35.65 39.91",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "74.43 32.69 50 36.66 25.57 32.69 50 9 74.43 32.69",
      fill: "#5e1f18"
    }), _react.default.createElement("polygon", {
      points: "74.43 67.31 50 63.34 25.57 67.31 50 91 74.43 67.31",
      fill: "#f2b0a9"
    }), _react.default.createElement("polygon", {
      points: "83.97 64.41 50 74.6 50 91 83.97 74.02 83.97 64.41",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "16.04 64.41 50 74.6 50 91 16.04 74.02 16.04 64.41",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "83.97 35.59 50 25.4 50 9 83.97 25.98 83.97 35.59",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "16.04 35.59 50 25.4 50 9 16.04 25.98 16.04 35.59",
      fill: "#8c3123"
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