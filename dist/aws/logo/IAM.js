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
    }), _react.default.createElement("title", null, "IAM"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "36.06 37.67 31.07 33.08 28.58 37.88 32.4 38.33 36.06 37.67",
      fill: "#3c4929"
    }), _react.default.createElement("polygon", {
      points: "31.92 43.61 50 44.76 68.08 43.61 50 33.6 31.92 43.61",
      fill: "#3c4929"
    }), _react.default.createElement("polygon", {
      points: "62.22 37.67 66.62 38.45 71.42 37.88 67.13 28.84 62.22 37.67",
      fill: "#3c4929"
    }), _react.default.createElement("polygon", {
      points: "44.07 70.39 54.41 67.97 64.39 70.3 54.05 80.13 44.07 70.39",
      fill: "#b7ca9d"
    }), _react.default.createElement("polygon", {
      points: "45.22 36.76 39.84 35.83 34.3 28.93 39.84 17.79 45.22 19.46 45.22 36.76",
      fill: "#759c3e"
    }), _react.default.createElement("polygon", {
      points: "31.92 24.43 31.92 18.04 50 9 54.78 19.11 45.22 22.94 39.84 21.26 39.84 35.63 50 33.6 55.41 57.4 50 91 44.58 88.29 44.58 80.63 39.84 78.74 39.84 42.81 31.92 43.61 31.92 37.22 28.58 37.88 28.58 25.77 31.92 24.43",
      fill: "#4b612c"
    }), _react.default.createElement("polygon", {
      points: "59.36 13.68 63.17 15.58 68.08 18.04 68.08 24.43 71.42 25.77 71.42 37.88 68.08 37.22 68.08 43.61 63.82 43.18 60.16 42.81 60.16 49.92 60.16 49.96 60.16 50 68.08 50 68.08 56.57 64.4 56.9 64.4 63.53 55.41 65.32 55.41 72.98 64.38 70.31 64.4 77.07 55.41 80.63 55.41 88.29 50 91 50 66.4 50 58.2 50 49.95 50 49.91 50 41.8 50 33.6 54.78 34.55 54.78 22.94 50 21.26 50 17.2 50 9 59.36 13.68",
      fill: "#759c3e"
    }), _react.default.createElement("polygon", {
      points: "55.41 19.36 50 17.2 39.84 21.26 45.22 22.94 55.41 19.36",
      fill: "#3c4929"
    }), _react.default.createElement("polygon", {
      points: "54.78 21.26 60.16 21.26 60.16 35.63 54.78 34.55 54.78 21.26",
      fill: "#4b612c"
    }), _react.default.createElement("polygon", {
      points: "39.84 21.26 50 17.2 52.14 18.06 55.41 19.36 60.16 21.26 54.78 22.94 50 21.26 45.22 22.94 39.84 21.26",
      fill: "#3c4929"
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