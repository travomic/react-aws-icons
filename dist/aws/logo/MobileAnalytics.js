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
    }), _react.default.createElement("title", null, "Mobile Analytics"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "16 38.99 71.25 25.87 71.23 37.56 22.79 40.49 16 38.99",
      fill: "#512843"
    }), _react.default.createElement("polygon", {
      points: "43.8 54.87 78.52 70.6 83.98 58.21 50.39 54.04 43.8 54.87",
      fill: "#cfb2c1"
    }), _react.default.createElement("polygon", {
      points: "43.8 54.87 78.52 59.93 78.52 70.6 43.8 62.19 43.8 54.87",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "32.19 56.32 67.45 76.14 75.06 60.88 40.17 55.32 32.19 56.32",
      fill: "#cfb2c1"
    }), _react.default.createElement("polygon", {
      points: "75.06 60.88 67.45 63.19 67.45 76.14 75.06 72.33 75.06 60.88",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "83.98 58.21 78.52 59.93 78.52 70.6 83.98 67.86 83.98 58.21",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "32.19 56.32 67.45 63.19 67.45 76.14 32.19 64.68 32.19 56.32",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "16 58.21 50 84.88 62.21 64.71 26.82 56.87 16 58.21",
      fill: "#cfb2c1"
    }), _react.default.createElement("polygon", {
      points: "16 29.51 60.23 18.95 60.18 15.12 17.09 28.52 16 29.51",
      fill: "#875078"
    }), _react.default.createElement("polygon", {
      points: "68.33 26.34 84 23.62 84 19.76 68.33 23 68.33 26.34",
      fill: "#875078"
    }), _react.default.createElement("polygon", {
      points: "84 43.8 50 43.8 19.72 47.87 50 60.01 84 53.3 84 43.8",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "16 43.8 50 43.8 50 60.01 16 53.29 16 43.8",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "16 38.99 50 35.7 64.16 24.21 50 19.39 16 29.51 16 38.99",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "62.21 64.73 50 68.39 50 84.88 62.21 78.77 62.21 64.73",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "16 58.21 50 68.39 50 84.88 16 67.86 16 58.21",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "50 35.7 50 19.39 60.18 15.12 71.23 25.41 84 19.76 84 29.46 71.23 37.56 60.07 29.14 50 35.7",
      fill: "#ad688b"
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