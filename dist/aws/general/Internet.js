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
    }), _react.default.createElement("title", null, "Internet"), _react.default.createElement("path", {
      d: "M85.23,49v3.19C85.23,58,78.85,64,71,64H29C21.15,64,14.77,58,14.77,52.19V49Z",
      fill: "#7d7c7c"
    }), _react.default.createElement("path", {
      d: "M41.89,17.9A18,18,0,0,1,58.31,28.46,9.14,9.14,0,0,1,72.6,35.64c7.1.59,12.63,7.44,12.63,12.88v1.18c0,5.85-6.38,11.78-14.26,11.78H29c-7.86,0-14.24-5.93-14.24-11.78V48.53c0-4.51,3.79-10.71,9.12-12.25,0-.16,0-.34,0-.51A17.94,17.94,0,0,1,41.89,17.9Z",
      fill: "#d2d3d3"
    }), _react.default.createElement("rect", {
      x: "34.51",
      y: "50.41",
      width: "8.01",
      height: "11.08",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "28.53 53.33 38.52 36.04 48.5 53.33 28.53 53.33",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "67.22 70.58 57.23 87.87 47.25 70.58 47.25 68.1 67.22 68.1 67.22 70.58",
      fill: "#7d7c7c"
    }), _react.default.createElement("rect", {
      x: "53.23",
      y: "44.51",
      width: "8.01",
      height: "26.51",
      fill: "#d2d3d3"
    }), _react.default.createElement("polygon", {
      points: "67.22 68.1 57.23 85.39 47.25 68.1 67.22 68.1",
      fill: "#d2d3d3"
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