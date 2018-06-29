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
    }), _react.default.createElement("title", null, "Cloud Search"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "27.91 27.44 15.98 25.85 15.98 67.03 27.91 64.29 27.91 27.44",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "15.98 32.38 27.91 34.19 50 28.41 72.09 34.19 72.09 63.06 84.02 67.03 84.02 25.85 50 8.84 15.98 25.85 15.98 32.38",
      fill: "#9d5125"
    }), _react.default.createElement("polygon", {
      points: "44.47 26.96 50.07 25.28 77.19 33.42 72.09 34.19 44.47 26.96",
      fill: "#6b3b19"
    }), _react.default.createElement("polygon", {
      points: "44.4 78.31 44.4 61.83 72.09 58.07 77.19 58.47 77.19 68.27 44.4 78.31",
      fill: "#fcbf92"
    }), _react.default.createElement("polygon", {
      points: "55.53 26.96 49.93 25.28 22.81 33.42 27.91 34.19 55.53 26.96",
      fill: "#6b3b19"
    }), _react.default.createElement("polygon", {
      points: "55.6 76 55.6 61.83 27.91 58.07 22.81 58.47 22.81 67.88 55.6 76",
      fill: "#fcbf92"
    }), _react.default.createElement("polygon", {
      points: "84.02 35.47 50 25.26 50 8.84 84.02 25.85 84.02 35.47",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "84.02 67.03 50 79.13 50 62.71 84.02 57.4 84.02 67.03",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "77.19 22.59 84.02 25.98 84.02 67.03 77.19 69.45 77.19 22.59",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "60.18 64.29 50 66.33 50 91.16 60.18 86.04 60.18 64.29",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "72.09 34.19 77.19 33.42 77.19 58.47 72.09 58.07 72.09 34.19",
      fill: "#9d5125"
    }), _react.default.createElement("polygon", {
      points: "15.98 67.03 50 79.13 50 62.71 15.98 57.4 15.98 67.03",
      fill: "#9d5125"
    }), _react.default.createElement("polygon", {
      points: "22.81 22.59 15.98 25.98 15.98 67.03 22.81 69.45 22.81 22.59",
      fill: "#9d5125"
    }), _react.default.createElement("polygon", {
      points: "39.82 64.29 50 66.33 50 91.16 39.82 86.04 39.82 64.29",
      fill: "#9d5125"
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