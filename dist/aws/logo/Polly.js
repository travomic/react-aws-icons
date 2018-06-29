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
    }), _react.default.createElement("title", null, "Polly"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "50 9 15.83 26.08 15.83 73.92 50 91 84.17 73.92 84.17 26.08 50 9",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "50 9 50 91 84.17 73.92 84.17 26.08 50 9",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "18.52 30.34 20.96 33.49 30.99 32.51 44.01 28.89 44.01 20.43 18.52 30.34",
      fill: "#19486f"
    }), _react.default.createElement("polygon", {
      points: "44.01 33.15 44.01 41.31 21.2 43.02 18.52 38.8 44.01 33.15",
      fill: "#19486f"
    }), _react.default.createElement("polygon", {
      points: "44.01 45.77 44.01 47.82 34.67 51.14 18.52 47.19 44.01 45.77",
      fill: "#19486f"
    }), _react.default.createElement("polygon", {
      points: "55.96 31.71 55.96 20.43 81.65 30.46 77.71 39.13 73.65 35.96 55.96 31.71",
      fill: "#19486f"
    }), _react.default.createElement("polygon", {
      points: "59.99 39.69 59.99 46.94 62.61 47.05 67.84 50.03 70.92 41.29 59.99 39.69",
      fill: "#19486f"
    }), _react.default.createElement("polygon", {
      points: "18.52 35.97 18.52 30.34 30.99 32.51 18.52 35.97",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "18.52 44.44 44.01 41.62 44.01 41.31 18.52 38.8 18.52 44.44",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "18.52 52.81 41.17 53.33 44.01 52.18 44.01 47.82 18.52 47.19 18.52 52.81",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "44.01 58.71 44.01 58.44 18.52 55.61 18.52 61.23 40.18 63.67 44.01 58.71",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "30.97 67.5 18.51 64.18 18.52 69.65 30.02 71.78 30.97 67.5",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "44.01 54.23 44.01 52.18 18.52 52.81 44.01 54.23",
      fill: "#99bce3"
    }), _react.default.createElement("polygon", {
      points: "44.01 66.9 44.01 58.71 18.52 61.23 44.01 66.9",
      fill: "#99bce3"
    }), _react.default.createElement("polygon", {
      points: "36.37 69 30.97 67.5 18.52 69.65 36.37 76.6 36.37 69",
      fill: "#99bce3"
    }), _react.default.createElement("polygon", {
      points: "81.65 30.46 73.65 35.96 73.65 64 72.29 68.68 81.63 69.58 81.65 30.46",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "70.92 41.29 62.61 47.05 62.61 52.95 62.61 57.33 70.92 58.85 70.92 41.29",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "62.61 52.95 59.99 53.09 59.99 60.43 70.92 58.85 62.61 52.95",
      fill: "#99bce3"
    }), _react.default.createElement("polygon", {
      points: "55.96 79.56 81.63 69.58 73.65 64 55.96 68.4 55.96 79.56",
      fill: "#99bce3"
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