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
    }), _react.default.createElement("title", null, "Snapshot"), _react.default.createElement("g", null, _react.default.createElement("rect", {
      x: "35.55",
      y: "26.61",
      width: "28.96",
      height: "7.66",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "61.02 19.98 39.02 19.98 36.02 20.5 36.02 22.98 64.03 22.98 64.03 20.5 61.02 19.98",
      fill: "#8c3123"
    }), _react.default.createElement("path", {
      d: "M50,30.36l26.51,3.91v2.32c0,3.45-11.87,6.23-26.51,6.23S23.52,40,23.52,36.58V34.1Z",
      fill: "#8c3123"
    }), _react.default.createElement("path", {
      d: "M50,47.11c11.07,0,20.55-1.59,24.52-3.85l1.3-2.2.53-2v2.48l-8.67,37c0,2.3-7.91,4.15-17.67,4.15s-17.66-1.85-17.66-4.15l-8.67-37V39.1l2,4.23C29.69,45.56,39.08,47.11,50,47.11Z",
      fill: "#8c3123"
    }), _react.default.createElement("rect", {
      x: "35.55",
      y: "24.13",
      width: "28.96",
      height: "7.66",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "61.02 17.5 39.02 17.5 36.02 20.5 64.03 20.5 61.02 17.5",
      fill: "#e05243"
    }), _react.default.createElement("path", {
      d: "M50,27.88c14.64,0,26.51,2.79,26.51,6.22S64.66,40.33,50,40.33s-26.5-2.78-26.5-6.23S35.39,27.88,50,27.88Z",
      fill: "#e05243"
    }), _react.default.createElement("path", {
      d: "M50,44.63c13.65,0,24.88-2.41,26.34-5.53l-8.67,37c0,2.3-7.91,4.15-17.67,4.15S32.36,78.4,32.36,76.1l-8.67-37C25.15,42.22,36.38,44.63,50,44.63Z",
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