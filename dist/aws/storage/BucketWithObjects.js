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
    }), _react.default.createElement("title", null, "Bucket With Objects"), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M50,25.06,76.5,29v2.32c0,3.45-11.87,6.23-26.51,6.23s-26.5-2.78-26.5-6.23V28.8Z",
      fill: "#8c3123"
    }), _react.default.createElement("path", {
      d: "M50,41.8c11.07,0,20.55-1.59,24.52-3.85l1.3-2.2.53-2v2.48l-8.67,37c0,2.3-7.91,4.15-17.67,4.15s-17.66-1.85-17.66-4.15l-8.67-37V33.8l2,4.23C29.66,40.25,39.05,41.8,50,41.8Z",
      fill: "#8c3123"
    }), _react.default.createElement("path", {
      d: "M50,22.58c14.64,0,26.51,2.79,26.51,6.22S64.63,35,50,35,23.5,32.25,23.5,28.8,35.36,22.58,50,22.58Z",
      fill: "#e05243"
    }), _react.default.createElement("path", {
      d: "M50,39.32c13.65,0,24.88-2.41,26.34-5.53l-8.67,37c0,2.3-7.91,4.15-17.67,4.15S32.33,73.1,32.33,70.8l-8.67-37C25.13,36.91,36.36,39.32,50,39.32Z",
      fill: "#e05243"
    }), _react.default.createElement("rect", {
      x: "43.76",
      y: "42.85",
      width: "11.48",
      height: "11.4",
      fill: "#fff"
    }), _react.default.createElement("ellipse", {
      cx: "40.29",
      cy: "63.9",
      rx: "5.66",
      ry: "5.62",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "64.09 69.26 52.75 69.26 58.42 58.78 64.09 69.26",
      fill: "#fff",
      "fill-rule": "evenodd"
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