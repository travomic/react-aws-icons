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
    }), _react.default.createElement("title", null, "Device Farm"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "49.82 53.82 45.26 53.6 16.22 54.8 20.56 76.11 49.82 53.82",
      fill: "#cfb2c1"
    }), _react.default.createElement("polygon", {
      points: "83.78 54.87 78.23 54.63 68.09 55.5 74.09 78.91 83.78 54.87",
      fill: "#cfb2c1"
    }), _react.default.createElement("polygon", {
      points: "83.78 45.18 50.17 46.59 16.36 45.18 50.09 9 83.78 45.18",
      fill: "#512843"
    }), _react.default.createElement("polygon", {
      points: "49.82 53.82 20.56 55.24 20.56 76.11 49.82 69.29 49.82 53.82",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "67.91 54.09 61.5 53.82 25.74 55.76 31.9 81.83 67.91 54.09",
      fill: "#cfb2c1"
    }), _react.default.createElement("polygon", {
      points: "83.78 45.18 50.09 41.8 50.09 9 83.78 25.9 83.78 45.18",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "16.36 45.18 50.09 41.8 50.09 9 16.36 25.9 16.36 45.18",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "20.56 55.24 16.22 54.8 16.22 73.92 20.56 76.11 20.56 55.24",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "67.91 70.66 31.9 81.83 31.9 56.39 67.91 54.09 67.91 70.66",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "25.74 55.76 31.9 56.39 31.9 81.83 25.74 78.72 25.74 55.76",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "83.78 54.87 83.78 74.02 74.09 78.91 74.09 55.84 83.78 54.87",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "68.09 77.06 74.09 78.91 74.09 55.84 68.09 55.5 68.09 77.06",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "67.91 56.46 57.81 55.8 40.01 57.18 50.09 91 67.91 56.46",
      fill: "#cfb2c1"
    }), _react.default.createElement("polygon", {
      points: "67.91 56.46 67.91 82.02 50.09 91 50.09 58.27 67.91 56.46",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "40.01 57.18 50.09 58.27 50.09 91 40.01 85.92 40.01 57.18",
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