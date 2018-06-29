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
    }), _react.default.createElement("title", null, "SQS"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "15.9 35.53 15.92 74.12 50 91.16 84.08 74.12 84.08 64.48 55.1 60.87 55.12 39.13 84.1 35.54 84.1 25.89 50 8.84 15.9 25.88 15.9 35.53",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "15.92 64.47 50 74.7 50 91.16 15.92 74.12 15.92 64.47",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "20.25 76.29 15.9 74.11 15.9 25.88 20.26 23.71 20.25 76.29",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "55.12 60.87 20.25 65.77 20.26 34.22 55.12 39.13 55.12 60.87",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "84.1 35.54 50 25.3 50 8.84 84.1 25.89 84.1 35.54",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "84.08 64.48 50 74.7 50 91.16 84.08 74.12 84.08 64.48",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "37.44 58.83 50 60.4 50 39.52 37.44 41.11 37.44 58.83",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "24.79 57.27 32.94 58.28 32.94 41.69 24.79 42.72 24.79 57.27",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "20.26 34.22 50 25.3 84.1 35.54 55.12 39.13 20.26 34.22",
      fill: "#624a1e"
    }), _react.default.createElement("polygon", {
      points: "20.25 65.77 50 74.7 84.08 64.48 55.12 60.87 20.25 65.77",
      fill: "#fad791"
    }), _react.default.createElement("polygon", {
      points: "84.08 56.09 50 60.4 50 39.52 84.08 43.86 84.08 56.09",
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