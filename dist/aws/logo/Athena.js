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
    }), _react.default.createElement("title", null, "Athena"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "84 64.68 50 60.49 16 64.68 50 91.3 84 64.68",
      fill: "#fcbf92"
    }), _react.default.createElement("polygon", {
      points: "16 64.68 50 74.85 50 91.3 16 74.25 16 64.68",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "84 64.68 50 74.85 50 91.3 84 74.25 84 64.68",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "20.39 50.22 16 50.22 16 59.89 20.39 60.69 25.27 55.51 20.39 50.22",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "25.27 60.29 20.39 60.69 20.39 50.22 25.27 50.22 25.27 60.29",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "28.56 38.16 22.78 39.25 22.78 61.19 28.56 62.39 33.85 50.22 28.56 38.16",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "33.85 61.79 28.56 62.39 28.56 38.16 33.85 38.76 33.85 61.79",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "39.83 43.04 31.85 43.84 31.85 63.08 39.83 64.68 48.3 53.81 39.83 43.04",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "45.21 63.78 39.83 64.68 39.83 43.04 45.21 43.44 45.21 63.78",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "50 25.59 44.62 27.29 44.62 65.58 50 66.67 55.38 46.13 50 25.59",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "54.98 63.78 60.17 64.68 68.15 50.22 60.17 35.86 54.98 36.66 54.98 63.78",
      fill: "#9d5025"
    }), _react.default.createElement("polyline", {
      points: "68.15 50.22 60.17 35.86 54.98 36.66",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "66.05 61.79 71.44 62.39 77.22 44.14 71.44 25.99 66.05 27.29 66.05 61.79",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "74.73 60.29 79.61 60.69 84 42.64 79.61 24 74.73 25.2 74.73 60.29",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "50 25.59 55.38 27.29 55.38 65.58 50 66.67 50 25.59",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "68.15 37.46 60.17 35.86 60.17 64.68 68.15 63.08 68.15 37.46",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "77.22 28.29 71.44 25.99 71.44 62.39 77.22 61.19 77.22 28.29",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "84 26.19 79.61 24 79.61 60.69 84 59.89 84 26.19",
      fill: "#f58534"
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