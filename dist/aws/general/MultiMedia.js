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
    }), _react.default.createElement("title", null, "Multi Media"), _react.default.createElement("path", {
      d: "M75.24,24.35a3.94,3.94,0,0,1,3.95,3.92V74.18a3.92,3.92,0,0,1-3.95,3.9H24.75a3.92,3.92,0,0,1-3.94-3.9V28.27a3.93,3.93,0,0,1,3.94-3.92Z",
      fill: "#7d7c7c"
    }), _react.default.createElement("path", {
      d: "M75.24,21.87a3.94,3.94,0,0,1,3.95,3.92V71.7a3.92,3.92,0,0,1-3.95,3.9H24.75a3.92,3.92,0,0,1-3.94-3.9V25.79a3.93,3.93,0,0,1,3.94-3.92Z",
      fill: "#d2d3d3"
    }), _react.default.createElement("path", {
      d: "M66.47,26.41a1.63,1.63,0,0,1,1.63-1.62h6.29A1.63,1.63,0,0,1,76,26.41V29a1.63,1.63,0,0,1-1.64,1.62H68.1A1.63,1.63,0,0,1,66.47,29Zm-14.1,0A1.62,1.62,0,0,1,54,24.79h6.28a1.63,1.63,0,0,1,1.64,1.63V29a1.63,1.63,0,0,1-1.64,1.62H54A1.63,1.63,0,0,1,52.36,29Zm-14.1,0a1.62,1.62,0,0,1,1.63-1.62h6.28a1.63,1.63,0,0,1,1.64,1.63V29a1.63,1.63,0,0,1-1.64,1.62H39.89A1.63,1.63,0,0,1,38.26,29Zm-14.11,0a1.63,1.63,0,0,1,1.63-1.62h6.28a1.63,1.63,0,0,1,1.64,1.63V29a1.63,1.63,0,0,1-1.64,1.62H25.79A1.63,1.63,0,0,1,24.16,29Zm9.56,44.66a1.63,1.63,0,0,1-1.64,1.63H25.79a1.63,1.63,0,0,1-1.63-1.63v-2.6a1.63,1.63,0,0,1,1.63-1.62h6.28a1.63,1.63,0,0,1,1.64,1.63Zm14.1,0a1.63,1.63,0,0,1-1.64,1.63H39.89a1.63,1.63,0,0,1-1.63-1.63v-2.6a1.62,1.62,0,0,1,1.63-1.62h6.28a1.63,1.63,0,0,1,1.64,1.63Zm14.1,0a1.63,1.63,0,0,1-1.64,1.63H54a1.63,1.63,0,0,1-1.63-1.63v-2.6A1.62,1.62,0,0,1,54,66.85h6.28a1.63,1.63,0,0,1,1.64,1.63Zm14.11,0a1.63,1.63,0,0,1-1.64,1.63H68.1a1.63,1.63,0,0,1-1.63-1.63v-2.6a1.63,1.63,0,0,1,1.63-1.62h6.29A1.63,1.63,0,0,1,76,68.47Zm-.82-6.85H24.81a.87.87,0,1,1,0-1.74H75.2a.87.87,0,1,1,0,1.74Zm-33-16.37a7.89,7.89,0,0,1,7-6.95v6.95Zm7,1.74v7a7.9,7.9,0,0,1-7-7Zm-8.8-1.74H38.9A11.18,11.18,0,0,1,49.21,37.62v1.5A9.69,9.69,0,0,0,40.41,47.85Zm0,1.74a9.68,9.68,0,0,0,8.8,8.74v1.49A11.18,11.18,0,0,1,38.9,49.59ZM58,47.85H51V40.9A7.89,7.89,0,0,1,58,47.85Zm-7-8.74v-1.5A11.18,11.18,0,0,1,61.27,47.85h-1.5A9.69,9.69,0,0,0,51,39.11Zm7,10.48a7.89,7.89,0,0,1-7,7v-7Zm1.8,0h1.5A11.18,11.18,0,0,1,51,59.83V58.34A9.68,9.68,0,0,0,59.77,49.59ZM75.2,34.7H24.81a.87.87,0,1,1,0-1.74H75.2a.87.87,0,1,1,0,1.74Z",
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