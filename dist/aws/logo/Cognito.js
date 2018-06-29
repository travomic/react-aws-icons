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
    }), _react.default.createElement("title", null, "Cognito"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "37.87 58.58 50 60.06 61.21 50.87 50 39.92 37.87 41.42 37.87 58.58",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "71.41 24.92 78.3 23.17 83.37 44.64 78.3 72.95 71.41 71.94 71.41 24.92",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "78.3 70.96 83.96 74.02 83.96 26 78.3 23.17 78.3 70.96",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "71.41 65.11 78.3 66.11 50 91 42.43 72.33 71.41 65.11",
      fill: "#cfb2c1"
    }), _react.default.createElement("polygon", {
      points: "28.59 75.08 21.7 76.83 17.79 27.96 28.59 29.66 28.59 75.08",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "28.59 34.89 21.7 33.89 50 9 57.57 27.67 28.59 34.89",
      fill: "#512843"
    }), _react.default.createElement("polygon", {
      points: "57.57 72.33 39.24 67.76 31.92 69.16 50.04 90.22 57.57 72.33",
      fill: "#cfb2c1"
    }), _react.default.createElement("polygon", {
      points: "42.43 27.67 49.97 9.02 68.08 30.84 60.76 32.24 42.43 27.67",
      fill: "#512843"
    }), _react.default.createElement("polygon", {
      points: "62.13 58.58 50 60.06 50 39.92 62.13 41.42 62.13 58.58",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "83.96 74.02 50 91 50 74.6 80.17 65.55 82.22 66.16 83.96 74.02",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "31.92 69.16 50 74.59 50 90.98 31.92 81.94 31.92 69.16",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "68.08 30.84 50 25.41 50 9.02 68.08 18.05 68.08 30.84",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "16.04 25.98 50 9 50 25.4 16.04 35.58 16.04 25.98",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "21.7 29.62 16.04 25.98 16.04 74 21.7 76.83 21.7 29.62",
      fill: "#692f56"
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