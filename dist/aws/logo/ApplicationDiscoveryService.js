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
    }), _react.default.createElement("title", null, "Application Discovery Service"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "40.6 64 25.65 61.2 15.9 62.19 29.95 81.48 40.6 64",
      fill: "#99bce3"
    }), _react.default.createElement("polygon", {
      points: "40.6 36.33 25.65 39.13 15.9 38.14 29.95 18.85 40.6 36.33",
      fill: "#19486f"
    }), _react.default.createElement("polygon", {
      points: "29.95 34.74 15.9 38.14 15.9 25.87 29.95 18.85 39.56 29.32 29.95 34.74",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "29.95 59.17 15.9 57.1 15.9 42.7 29.95 40.57 37.99 50.95 29.95 59.17",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "29.95 65.64 15.9 62.19 15.9 74.46 29.95 81.48 39.56 72.54 29.95 65.64",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "40.6 36.33 29.95 34.74 29.95 18.85 40.6 22.09 40.6 36.33",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "40.6 64 29.95 65.64 29.95 81.48 40.6 78.24 40.6 64",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "40.6 58.18 29.95 59.17 29.95 40.57 40.6 41.55 40.6 58.18",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "73.01 27.03 73.01 75.45 79.75 71.16 83.55 52.38 80.4 28.08 73.01 27.03",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "53.1 30.24 56.39 18.85 82.75 33.88 73.13 35.23 53.1 30.24",
      fill: "#19486f"
    }), _react.default.createElement("polygon", {
      points: "50.78 70.47 60.29 78.59 82.75 66.25 73.08 64.88 50.78 70.47",
      fill: "#99bce3"
    }), _react.default.createElement("polygon", {
      points: "35.58 83.97 49.99 91.17 59.72 51.24 49.99 8.83 35.58 16.03 35.58 83.97",
      fill: "#205b99"
    }), _react.default.createElement("path", {
      d: "M50,8.83V91.17L84.1,74.12V25.88Zm29.76,57L60.22,71.68V28.49L79.75,34.3Z",
      fill: "#5294cf"
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