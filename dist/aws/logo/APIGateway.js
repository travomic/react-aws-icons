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
    }), _react.default.createElement("title", null, "APIGateway"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "84.1 55.15 67.54 54.47 56.81 55.15 74.52 79.23 84.1 55.15",
      fill: "#fad791"
    }), _react.default.createElement("polygon", {
      points: "84.1 45.18 67.54 45.86 56.81 45.18 74.52 21.1 84.1 45.18",
      fill: "#624a1e"
    }), _react.default.createElement("polygon", {
      points: "15.9 45.15 32.46 45.86 43.19 45.18 25.48 21.22 15.9 45.15",
      fill: "#624a1e"
    }), _react.default.createElement("polygon", {
      points: "15.9 55.15 32.46 54.47 43.19 55.15 25.48 79.25 15.9 55.15",
      fill: "#fad791"
    }), _react.default.createElement("polygon", {
      points: "74.52 44.22 84.1 45.18 84.1 25.89 74.52 21.1 74.52 44.22",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "56.81 25.88 74.52 21.1 74.52 44.22 56.81 45.18 56.81 25.88",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "50 23.08 69.18 29.35 69.18 38.89 50 35.51 50 23.08",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "41.36 37.08 50.14 35.53 69.18 38.89 60.67 39.82 41.36 37.08",
      fill: "#624a1e"
    }), _react.default.createElement("polygon", {
      points: "25.48 44.22 15.9 45.15 15.9 25.8 25.48 21.08 25.48 44.22",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "43.19 25.88 25.48 21.08 25.48 44.22 43.19 45.18 43.19 25.88",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "50 23.08 30.82 29.35 30.82 38.89 50 35.51 50 23.08",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "58.64 37.08 49.86 35.53 30.82 38.89 39.33 39.82 58.64 37.08",
      fill: "#624a1e"
    }), _react.default.createElement("polygon", {
      points: "74.52 56.11 84.1 55.15 84.1 74.44 74.52 79.23 74.52 56.11",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "56.81 74.45 74.52 79.23 74.52 56.11 56.81 55.15 56.81 74.45",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "50 77.25 69.18 70.98 69.18 61.44 50 64.82 50 77.25",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "41.36 63.25 50.14 64.79 69.18 61.44 60.67 60.51 41.36 63.25",
      fill: "#fad791"
    }), _react.default.createElement("polygon", {
      points: "25.48 56.11 15.9 55.15 15.9 74.44 25.48 79.25 25.48 56.11",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "43.19 74.45 25.48 79.25 25.48 56.11 43.19 55.15 43.19 74.45",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "50 77.25 30.82 70.98 30.82 61.44 50 64.82 50 77.25",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "58.64 63.25 49.86 64.79 30.82 61.44 39.33 60.51 58.64 63.25",
      fill: "#fad791"
    }), _react.default.createElement("polygon", {
      points: "39.8 86.06 50 91.16 55.66 88.33 60.2 13.94 50 8.84 39.8 13.94 39.8 86.06",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "60.2 86.06 50 91.16 50 8.84 60.2 13.94 60.2 86.06",
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