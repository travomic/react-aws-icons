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
    }), _react.default.createElement("title", null, "Worker"), _react.default.createElement("g", null, _react.default.createElement("rect", {
      x: "23.12",
      y: "21.9",
      width: "53.76",
      height: "56.21",
      fill: "#876929"
    }), _react.default.createElement("rect", {
      x: "23.12",
      y: "21.9",
      width: "53.76",
      height: "53.69",
      fill: "#d9a741"
    }), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M69.55,44.36A19.91,19.91,0,0,0,66.92,38l2.53-2.53L63.25,29.3l-2.53,2.53a19.9,19.9,0,0,0-6.35-2.64V25.62H45.63v3.56a19.9,19.9,0,0,0-6.35,2.64L36.75,29.3l-6.19,6.19L33.08,38a19.91,19.91,0,0,0-2.64,6.35H26.88v8.75h3.56a19.91,19.91,0,0,0,2.64,6.35L30.56,62l6.19,6.19,2.53-2.53a19.9,19.9,0,0,0,6.35,2.64v3.56h8.75V68.29a19.9,19.9,0,0,0,6.35-2.64l2.53,2.53L69.44,62l-2.53-2.53a19.91,19.91,0,0,0,2.64-6.35h3.56V44.36ZM62.49,55a14,14,0,0,1-6.19,6.19,13.9,13.9,0,0,1-12.6,0A14,14,0,0,1,37.51,55a13.9,13.9,0,0,1,0-12.6,14,14,0,0,1,6.19-6.19,13.9,13.9,0,0,1,12.6,0,14,14,0,0,1,6.19,6.19,13.9,13.9,0,0,1,0,12.6Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M56.51,44.36a7.88,7.88,0,0,0-2.13-2.13,7.85,7.85,0,0,0-8.75,0,7.88,7.88,0,0,0-2.13,2.13,7.85,7.85,0,0,0,0,8.75,7.88,7.88,0,0,0,2.13,2.13,7.85,7.85,0,0,0,8.75,0,7.88,7.88,0,0,0,2.13-2.13,7.85,7.85,0,0,0,0-8.75Z",
      fill: "#fff"
    })))) // -- END of generated content.

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