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
    }), _react.default.createElement("title", null, "Topic"), _react.default.createElement("g", null, _react.default.createElement("rect", {
      x: "9.06",
      y: "61.95",
      width: "81.89",
      height: "13.97",
      fill: "#876929"
    }), _react.default.createElement("rect", {
      x: "9.06",
      y: "45.86",
      width: "81.89",
      height: "12.71",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "90.94 39.11 90.94 41.6 9.06 41.6 9.06 39.11 56.22 25.53 90.94 39.11",
      fill: "#876929"
    }), _react.default.createElement("rect", {
      x: "9.06",
      y: "24.08",
      width: "81.89",
      height: "15.03",
      fill: "#d9a741"
    }), _react.default.createElement("path", {
      d: "M9.06,43.56H90.94V56.08H9.06Z",
      fill: "#d9a741"
    }), _react.default.createElement("path", {
      d: "M9.06,60.91H90.94V73.43H9.06Z",
      fill: "#d9a741"
    }), _react.default.createElement("rect", {
      x: "11.72",
      y: "46.2",
      width: "76.57",
      height: "7.24",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "11.72",
      y: "63.55",
      width: "76.57",
      height: "7.24",
      fill: "#fff"
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