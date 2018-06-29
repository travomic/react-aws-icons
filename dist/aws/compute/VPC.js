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
    }), _react.default.createElement("title", null, "VPC"), _react.default.createElement("path", {
      d: "M85.23,58v3.19C85.23,67,78.85,73,71,73H29C21.15,73,14.77,67,14.77,61.19V58Z",
      fill: "#9d5125"
    }), _react.default.createElement("path", {
      d: "M41.89,26.9A18,18,0,0,1,58.31,37.46,9.14,9.14,0,0,1,72.6,44.64c7.1.59,12.63,7.44,12.63,12.88v1.18c0,5.85-6.38,11.78-14.26,11.78H29c-7.86,0-14.24-5.93-14.24-11.78V57.53c0-4.51,3.79-10.71,9.12-12.25,0-.16,0-.34,0-.51A17.94,17.94,0,0,1,41.89,26.9Z",
      fill: "#f58535"
    }), _react.default.createElement("path", {
      d: "M31.84,47.81h2.79L37.43,61h0l3-13.16h2.79L39.07,64.29H35.72Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M44.91,47.81h5.22c3.16,0,4.55,2,4.55,4.8s-1.73,4.87-4.82,4.87H47.54v6.81H44.91Zm2.63,7.69h1.87c1.41,0,2.63-.76,2.63-2.84,0-1.78-.71-2.86-2.82-2.86H47.54Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M67,58.38v.35c0,3-1.2,5.89-5.08,5.89-4.16,0-5.45-2.68-5.45-8.56s1.29-8.56,5.47-8.56c4.68,0,5,3.46,5,5.17V53H64.32v-.28c0-1.52-.46-3.28-2.35-3.21s-2.82,1.2-2.82,6.51S60,62.63,62,62.63c2.19,0,2.45-2.45,2.45-4v-.28Z",
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