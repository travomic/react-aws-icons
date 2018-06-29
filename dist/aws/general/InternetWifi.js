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
    }), _react.default.createElement("title", null, "Internet Wifi"), _react.default.createElement("path", {
      d: "M85.23,58v3.19C85.23,67,78.85,73,71,73H29C21.15,73,14.77,67,14.77,61.19V58Z",
      fill: "#7d7c7c"
    }), _react.default.createElement("path", {
      d: "M41.89,26.9A18,18,0,0,1,58.31,37.46,9.14,9.14,0,0,1,72.6,44.64c7.1.59,12.63,7.44,12.63,12.88v1.18c0,5.85-6.38,11.78-14.26,11.78H29c-7.86,0-14.24-5.93-14.24-11.78V57.53c0-4.51,3.79-10.71,9.12-12.25,0-.16,0-.34,0-.51A17.94,17.94,0,0,1,41.89,26.9Z",
      fill: "#d2d3d3"
    }), _react.default.createElement("path", {
      d: "M56.84,64.81a2,2,0,0,1-1.41-.59,7.69,7.69,0,0,0-10.86,0,2,2,0,1,1-2.83-2.83,11.69,11.69,0,0,1,16.52,0,2,2,0,0,1-1.41,3.41Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M62.27,59.38a2,2,0,0,1-1.41-.59,15.38,15.38,0,0,0-21.72,0A2,2,0,0,1,36.31,56a19.38,19.38,0,0,1,27.38,0,2,2,0,0,1-1.41,3.41Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M68.15,54a2,2,0,0,1-1.41-.59,23.67,23.67,0,0,0-33.47,0,2,2,0,0,1-2.83-2.83,27.67,27.67,0,0,1,39.13,0A2,2,0,0,1,68.15,54Z",
      fill: "#fff"
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