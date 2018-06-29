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
    }), _react.default.createElement("title", null, "Game List"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "56 36 68.14 34.06 68.14 18.04 56 21.93 56 36",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "83.93 57.32 49.94 62.49 49.94 37.66 83.93 42.78 83.93 57.32",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "62.35 32.75 49.94 29.66 49.94 9 62.35 15.2 62.35 32.75",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "62.46 67.25 50.06 70.33 50.06 91 62.46 84.8 62.46 67.25",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "75.77 35.96 68.03 34.02 68.03 18.04 75.77 21.91 75.77 35.96",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "75.89 35.96 64.11 37.49 56 36 68.25 34.04 75.89 35.96",
      fill: "#512843"
    }), _react.default.createElement("polygon", {
      points: "44 36 31.86 34.06 31.86 18.04 44 21.93 44 36",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "16.07 57.32 50.06 62.49 50.06 37.66 16.07 42.78 16.07 57.32",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "37.65 32.75 50.06 29.66 50.06 9 37.65 15.2 37.65 32.75",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "37.65 67.25 50.06 70.33 50.06 91 37.65 84.8 37.65 67.25",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "24.23 35.96 31.97 34.02 31.97 18.04 24.23 21.91 24.23 35.96",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "24.23 35.96 36 37.49 44.11 36 31.86 34.04 24.23 35.96",
      fill: "#512843"
    }), _react.default.createElement("polygon", {
      points: "62.46 32.75 50.06 35.01 37.65 32.75 50.06 29.66 62.46 32.75",
      fill: "#512843"
    }), _react.default.createElement("polygon", {
      points: "62.46 67.25 50.06 64.99 37.65 67.25 50.06 70.32 62.46 67.25",
      fill: "#cfb2c1"
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