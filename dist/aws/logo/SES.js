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
    }), _react.default.createElement("title", null, "SES"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "31.4 21.96 14.7 48.55 31.4 75.14 44.74 71.72 45.4 25.55 31.4 21.96",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "50.05 70.36 31.4 75.14 31.4 21.96 50.05 26.74 50.05 70.36",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "47.83 31.08 50.05 91.16 85.3 73.53 85.29 28.65 76.3 30.14 47.83 31.08",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "61.28 42.95 72.28 42.3 83.15 22.58 55.66 8.84 45.4 13.33 61.28 42.95",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "55.66 8.84 83.15 22.58 72.28 42.3 55.66 8.84",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "50.05 14.54 72.28 54.88 76.1 78.13 50.05 91.16 39.5 85.88 39.5 18.76 50.04 14.54 50.05 14.54",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "85.29 28.65 85.3 73.53 50.05 91.16 50.05 14.54 72.28 54.88 85.29 28.65",
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