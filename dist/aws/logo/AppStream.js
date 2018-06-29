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
    }), _react.default.createElement("title", null, "App Stream"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "68.15 56.42 64.11 56.16 60.3 56.5 64.41 70.38 68.15 56.42",
      fill: "#fad791"
    }), _react.default.createElement("polygon", {
      points: "84.1 35.53 50 39.77 15.9 35.53 50 8.84 84.1 35.53",
      fill: "#624a1e"
    }), _react.default.createElement("polygon", {
      points: "71.5 74.33 50 69.29 28.5 74.33 50 91.16 71.5 74.33",
      fill: "#fad791"
    }), _react.default.createElement("polygon", {
      points: "84.1 35.53 50 25.3 50 8.84 84.1 25.89 84.1 35.53",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "71.5 80.41 50 91.16 50 82.93 71.5 74.33 71.5 80.41",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "50 91.16 28.5 80.41 28.5 74.33 50 82.93 50 91.16",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "15.9 35.53 50 25.3 50 8.84 15.9 25.89 15.9 35.53",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "68.15 69.25 64.41 70.38 64.41 56.79 68.15 56.42 68.15 69.25",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "44.56 73.07 50 74.7 55.44 73.07 55.44 42.31 50 41.77 44.56 42.31 44.56 73.07",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "55.44 73.07 50 74.7 50 41.77 55.44 42.31 55.44 73.07",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "35.59 56.79 31.85 56.42 31.85 43.58 35.59 43.21 39.8 43.5 39.8 56.5 35.59 56.79",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "60.3 69.51 64.41 70.38 64.41 56.79 60.3 56.5 60.3 69.51",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "39.8 56.5 35.59 56.79 35.59 43.21 39.8 43.5 39.8 56.5",
      fill: "#d9a741"
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