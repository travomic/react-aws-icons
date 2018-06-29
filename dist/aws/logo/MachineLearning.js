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
    }), _react.default.createElement("title", null, "Machine Learning"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "64.93 59.11 73.28 59.91 84.57 58.02 84.57 45.95 73.28 45.01 64.93 45.4 64.93 59.11",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "84.57 38.07 50.56 41.55 16.55 38.07 50.56 9 84.57 38.07",
      fill: "#19486f"
    }), _react.default.createElement("polygon", {
      points: "67.56 62 78.81 76.78 84.57 61.93 73.88 60.83 67.56 62",
      fill: "#99bce3"
    }), _react.default.createElement("polygon", {
      points: "67.56 62 78.99 63.39 78.99 76.78 67.56 74.01 67.56 62",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "55.32 64.13 67.66 82.5 75.59 64.17 63.71 62.59 55.32 64.13",
      fill: "#99bce3"
    }), _react.default.createElement("polygon", {
      points: "55.32 64.13 67.56 66.13 67.56 82.5 55.32 78.48 55.32 64.13",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "84.57 38.07 50.56 29.59 50.56 9 84.57 26 84.57 38.07",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "33.55 62 22.3 76.78 16.55 61.93 27.23 60.83 33.55 62",
      fill: "#99bce3"
    }), _react.default.createElement("polygon", {
      points: "33.55 62 22.12 63.39 22.12 76.78 33.55 74.01 33.55 62",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "45.8 64.13 33.46 82.5 25.53 64.17 37.41 62.59 45.8 64.13",
      fill: "#99bce3"
    }), _react.default.createElement("polygon", {
      points: "45.8 64.13 33.55 66.13 33.55 82.5 45.8 78.48 45.8 64.13",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "62.93 67.32 50.56 65.04 38.19 67.32 50.56 91 62.93 67.32",
      fill: "#99bce3"
    }), _react.default.createElement("polygon", {
      points: "62.93 67.32 50.56 70.4 50.56 91 62.93 84.81 62.93 67.32",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "22.12 63.32 16.55 61.93 16.55 74 22.12 76.78 22.12 63.32",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "25.53 64.17 33.55 66.17 33.55 82.5 25.53 78.48 25.53 64.17",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "78.99 63.32 84.57 61.93 84.57 74 78.99 76.78 78.99 63.32",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "75.59 64.17 67.56 66.17 67.56 82.5 75.59 78.48 75.59 64.17",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "16.55 38.07 50.56 29.59 50.56 9 16.55 26 16.55 38.07",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "38.19 67.32 50.56 70.4 50.56 91 38.19 84.81 38.19 67.32",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "84.57 45.95 73.28 45.01 73.28 59.92 84.57 58.02 84.57 45.95",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "16.55 45.95 27.84 45.01 36.19 45.4 36.19 59.11 27.84 59.92 16.55 58.02 16.55 45.95",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "36.19 59.11 27.84 59.91 27.84 45.01 36.19 45.4 36.19 59.11",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "33.55 44.55 50.56 43.15 67.56 44.55 67.56 60.88 50.56 63.73 33.55 60.88 33.55 44.55",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "67.56 44.55 50.56 43.15 50.56 63.73 67.56 60.88 67.56 44.55",
      fill: "#5294cf"
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