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
    }), _react.default.createElement("title", null, "S3"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "21.54 23.23 16.08 25.96 16.08 73.93 21.54 76.66 34.94 49.94 21.54 23.23",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "50 69.76 21.54 76.65 21.54 23.23 50 30.12 63.45 50.02 50 69.76",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "50 69.76 78.45 76.65 83.37 50.62 78.45 23.23 50 30.12 50 69.76",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "78.45 23.23 83.92 25.96 83.92 73.93 78.45 76.66 78.45 23.23",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "37.59 58.78 50 60.37 59.84 50.02 50 39.68 37.59 41.24 37.59 58.78",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "62.41 32.75 50 35.01 37.59 32.75 50 9 62.41 32.75",
      fill: "#5e1f18"
    }), _react.default.createElement("polygon", {
      points: "62.41 67.25 50 64.97 37.59 67.25 50 91 62.41 67.25",
      fill: "#f2b0a9"
    }), _react.default.createElement("polygon", {
      points: "62.41 32.75 50 29.68 50 9 62.41 15.2 62.41 32.75",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "37.59 32.75 50 29.68 50 9 37.59 15.2 37.59 32.75",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "50 91 62.41 84.8 62.41 67.25 50 70.32 50 91",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "50 91 37.59 84.8 37.59 67.25 50 70.32 50 91",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "62.41 58.78 50 60.37 50 39.68 62.41 41.24 62.41 58.78",
      fill: "#e05243"
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