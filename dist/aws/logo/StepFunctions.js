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
    }), _react.default.createElement("title", null, "Step Functions"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "29.64 40.39 24.95 41.12 16.05 40.38 20.36 23.8 29.64 40.39",
      fill: "#624a1e"
    }), _react.default.createElement("polygon", {
      points: "39.1 39.98 24.74 49.99 34.15 60.28 39.1 61.05 39.1 39.98",
      fill: "#624a1e"
    }), _react.default.createElement("polygon", {
      points: "24.74 49.99 39.1 49.99 39.16 38.9 34.15 39.67 24.74 49.99",
      fill: "#fad791"
    }), _react.default.createElement("polygon", {
      points: "48.6 50.03 39.1 61.05 29.39 49.99 39.16 38.9 48.6 50.03",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "16.05 25.96 20.36 23.8 29.26 32.36 20.36 39.52 16.05 40.38 16.05 25.96",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "29.64 40.39 20.36 39.52 20.36 23.8 29.64 25.98 29.64 40.39",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "16.04 59.6 20.36 76.17 29.61 59.59 24.91 58.86 16.04 59.6",
      fill: "#fad791"
    }), _react.default.createElement("polygon", {
      points: "16.04 74.01 20.36 76.17 29.39 66.76 20.36 60.46 16.04 59.6 16.04 74.01",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "29.61 59.59 20.37 60.46 20.37 76.17 29.61 74.01 29.61 59.59",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "41.84 61.5 35.17 60.46 25.56 61.5 31.91 81.95 41.84 61.5",
      fill: "#fad791"
    }), _react.default.createElement("polygon", {
      points: "34.82 50.02 51.48 38.48 51.44 63 44.67 61.93 34.82 50.02",
      fill: "#624a1e"
    }), _react.default.createElement("polygon", {
      points: "34.82 50.02 51.48 50.02 51.44 36.98 44.67 38.03 34.82 50.02",
      fill: "#fad791"
    }), _react.default.createElement("polygon", {
      points: "51.44 63 41.67 50.03 51.44 36.98 59.93 49.99 51.44 63",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "25.56 78.77 31.91 81.95 41.67 70.25 31.91 62.77 25.56 61.5 25.56 78.77",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "41.88 38.48 35.2 39.52 25.56 38.48 31.91 18.03 41.88 38.48",
      fill: "#624a1e"
    }), _react.default.createElement("polygon", {
      points: "25.56 21.2 31.91 18.03 41.55 29.75 31.91 37.21 25.56 38.48 25.56 21.2",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "41.88 21.21 31.91 18.03 31.91 37.21 41.88 38.48 41.88 21.21",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "41.84 61.5 31.91 62.77 31.91 81.95 41.84 78.77 41.84 61.5",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "69.72 46.71 49.74 49.99 59.84 64.21 69.72 65.74 69.72 46.71",
      fill: "#624a1e"
    }), _react.default.createElement("polygon", {
      points: "49.74 49.99 69.72 49.99 69.72 34.23 59.84 35.76 49.74 49.99",
      fill: "#fad791"
    }), _react.default.createElement("polygon", {
      points: "60.16 64.34 50.02 62.76 39.83 64.35 49.99 90.99 60.16 64.34",
      fill: "#fad791"
    }), _react.default.createElement("polygon", {
      points: "60.15 35.73 49.98 37.21 39.83 35.62 49.99 9.09 60.15 35.73",
      fill: "#624a1e"
    }), _react.default.createElement("polygon", {
      points: "81.48 67.59 74.41 66.49 74.41 35.02 81.66 29.11 81.48 67.59",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "48.25 71.68 55.74 73.7 79.57 65.86 74.42 65.08 48.25 71.68",
      fill: "#fad791"
    }), _react.default.createElement("polygon", {
      points: "49.99 66.39 39.83 64.35 39.83 85.91 49.99 91.09 62.62 77.18 49.99 66.39",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "49.99 33.7 39.83 35.62 39.83 14.07 49.99 9.09 58.2 18.52 49.99 33.7",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "77.17 49.99 69.72 34.23 59.93 49.99 69.72 65.74 77.17 49.99",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "52.79 29.41 59.54 22.51 79.56 34.36 74.41 35.02 52.79 29.41",
      fill: "#624a1e"
    }), _react.default.createElement("polygon", {
      points: "83.96 26.08 49.99 9.09 49.99 33.7 60.15 35.73 60.15 28.47 79.57 34.35 79.57 65.86 60.15 71.69 60.15 64.36 49.99 66.39 49.99 91.09 83.98 74.1 83.96 26.08",
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