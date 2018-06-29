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
    }), _react.default.createElement("title", null, "Io T"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "70.39 35.54 79.61 23.81 83.94 35.54 75.06 36.67 70.39 35.54",
      fill: "#19486f"
    }), _react.default.createElement("polygon", {
      points: "55.13 67.31 79.61 72.21 83.5 55.87 79.61 39.52 55.13 41.8 55.13 67.31",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "50 55.81 50 74.53 79.61 55.24 57.17 54.21 50 55.81",
      fill: "#99bce3"
    }), _react.default.createElement("polygon", {
      points: "55.69 50 64.35 50 75.91 38.8 64.35 22.89 55.69 25.4 55.69 50",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "70.39 35.54 79.61 34.28 79.61 23.81 70.39 25.97 70.39 35.54",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "83.94 54.78 50 58.2 50 91 83.94 74.03 83.94 54.78",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "50 91 60.14 76.38 60.14 35.65 50 33.6 39.42 60.44 50 91",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "79.61 66.47 83.94 74.03 83.94 40.43 79.61 39.52 79.61 66.47",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "83.94 25.97 79.61 23.81 79.61 34.28 83.94 35.54 83.94 25.97",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "77.11 28.02 64.35 22.89 64.35 50 77.11 50 77.11 28.02",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "29.61 35.54 20.39 23.81 16.06 35.54 24.94 36.67 29.61 35.54",
      fill: "#19486f"
    }), _react.default.createElement("polygon", {
      points: "44.88 67.31 20.39 72.21 20.39 39.52 44.88 41.8 44.88 67.31",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "50 55.81 50 76.62 20.39 55.24 42.83 54.21 50 55.81",
      fill: "#99bce3"
    }), _react.default.createElement("polygon", {
      points: "44.31 50 35.65 50 25 37.23 35.65 22.89 44.31 25.4 44.31 50",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "29.61 35.54 20.39 34.28 20.39 23.81 29.61 25.97 29.61 35.54",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "16.06 54.78 50 58.2 50 91 16.06 74.03 16.06 54.78",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "50 91 39.86 77.43 39.86 35.65 50 33.6 50 91",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "20.39 73.25 16.06 74.03 16.06 40.43 20.39 39.52 20.39 73.25",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "16.06 25.97 20.39 23.81 20.39 34.28 16.06 35.54 16.06 25.97",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "22.89 28.02 35.65 22.89 35.65 50 22.89 50 22.89 28.02",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "60.14 28.48 50 30.87 39.86 28.48 50 9 60.14 28.48",
      fill: "#19486f"
    }), _react.default.createElement("polygon", {
      points: "50 9 60.14 14.13 60.14 28.48 50 25.4 50 9",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "50 9 39.86 14.13 39.86 28.48 50 25.4 50 9",
      fill: "#205b99"
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