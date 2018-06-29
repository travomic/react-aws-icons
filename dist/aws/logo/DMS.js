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
    }), _react.default.createElement("title", null, "DMS"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "74.52 56.07 60.13 55.35 60.07 55.34 60.07 55 60.08 55 39.92 55 39.93 55 39.93 55.34 39.87 55.35 25.51 56.07 18 58.41 25.49 67.26 39.93 69 39.92 69 60.08 69 60.07 69 74.49 67.26 82 58.41 74.52 56.07",
      fill: "#99bce3"
    }), _react.default.createElement("polygon", {
      points: "74.52 43.93 60.13 44.65 60.07 44.66 60.07 45.11 60.08 45.11 39.92 45.11 39.93 45.11 39.93 44.66 39.87 44.65 25.51 43.93 18 41.59 25.49 32.74 39.93 31.11 39.92 31.11 60.08 31.11 60.07 31.11 74.49 32.74 82 41.59 74.52 43.93",
      fill: "#19486f"
    }), _react.default.createElement("polygon", {
      points: "82 41.59 74 37.99 65.88 29.5 74 21.1 82 29.83 82 41.59",
      fill: "#2e73b8"
    }), _react.default.createElement("polygon", {
      points: "82 58.41 74 62.01 63.38 72 74 78.9 82 70.17 82 58.41",
      fill: "#2e73b8"
    }), _react.default.createElement("polygon", {
      points: "60 35.07 43.5 24.53 60 14 74 21.1 74 37.99 60 35.07",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "60 65 45.88 75.5 60 86 74 78.9 74 62.01 60 65",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "67 59.19 57 61 47.13 49.96 57 38.92 67 40.34 67 59.19",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "60 35.06 60 14 40 14 28.63 28.13 40 35.06 60 35.06",
      fill: "#2e73b8"
    }), _react.default.createElement("polygon", {
      points: "60 65 60 86 40 86 28.63 71.63 40 65 60 65",
      fill: "#2e73b8"
    }), _react.default.createElement("polygon", {
      points: "57 61 43 61 34.5 50 43 38.92 57 38.92 57 61",
      fill: "#2e73b8"
    }), _react.default.createElement("polygon", {
      points: "40 35.07 40 14 26 21.1 20.25 33.75 26 37.99 40 35.07",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "40 65 40 86 26 78.9 19.83 65 26 62.01 40 65",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "33 59.19 43 61 43 38.92 33 40.34 33 59.19",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "18 41.59 26 37.99 26 21.1 18 29.83 18 41.59",
      fill: "#19486f"
    }), _react.default.createElement("polygon", {
      points: "18 58.41 26 62.01 26 78.9 18 70.17 18 58.41",
      fill: "#19486f"
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