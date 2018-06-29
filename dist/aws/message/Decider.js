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
    }), _react.default.createElement("title", null, "Decider"), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M77.58,51.37a27.58,27.58,0,0,1-55.16,0V48.89S40.67,23.79,50,23.79c10.9,0,27.58,25.1,27.58,25.1Z",
      fill: "#876929"
    }), _react.default.createElement("circle", {
      cx: "50",
      cy: "48.89",
      r: "27.58",
      fill: "#d9a741"
    }), _react.default.createElement("rect", {
      x: "40",
      y: "31.87",
      width: "1.49",
      height: "12.47",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "40",
      y: "50.23",
      width: "1.49",
      height: "12.47",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "60.79 63.73 59.3 63.73 59.3 48.19 40.52 48.19 40.52 46.72 60.79 46.72 60.79 63.73",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "40.58 54.13 49.5 47.59 40.58 41.05 32.06 47.2 40.58 54.13",
      fill: "#d9a741"
    }), _react.default.createElement("path", {
      d: "M40.56,55.06l-9.72-7.9,9.75-7,10.16,7.46Zm-7.29-7.83,7.33,6,7.64-5.61L40.58,42Z",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "54.25",
      y: "59.61",
      width: "12.06",
      height: "7.12",
      fill: "#d9a741"
    }), _react.default.createElement("path", {
      d: "M67,67.46H53.5V58.87H67ZM55,60.35V66H65.56V60.35Z",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "34.83",
      y: "28.99",
      width: "12.06",
      height: "7.12",
      fill: "#d9a741"
    }), _react.default.createElement("path", {
      d: "M47.63,36.85H34.08V28.26H47.63ZM35.57,35.37H46.14V29.73H35.57Z",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "34.71",
      y: "59.61",
      width: "12.06",
      height: "7.12",
      fill: "#d9a741"
    }), _react.default.createElement("path", {
      d: "M47.51,67.46H34V58.87H47.51ZM35.45,66H46V60.35H35.45Z",
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