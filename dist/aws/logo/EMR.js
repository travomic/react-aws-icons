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
    }), _react.default.createElement("title", null, "EMR"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "33.63 49.98 29.72 73.4 19.47 75.74 16.07 74.04 16.07 49.98 33.63 49.98",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "83.95 41.73 50 44.14 16.05 41.73 50 9 83.95 41.73",
      fill: "#6b3b19"
    }), _react.default.createElement("polygon", {
      points: "56.76 49.98 19.47 49.98 19.47 75.74 56.76 67.21 56.76 49.98",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "38.12 49.98 39.34 76.32 27.4 79.7 23.23 77.62 23.23 49.98 38.12 49.98",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "67.93 49.98 27.4 49.98 27.4 79.7 67.93 68.2 67.93 49.98",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "46.61 49.98 46.61 81.25 37.3 84.65 32.06 82.03 32.06 49.98 46.61 49.98",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "76.76 49.98 37.3 49.98 37.3 84.65 76.76 70.22 76.76 49.98",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "43.23 87.62 43.23 49.98 68.93 49.98 81.26 75.37 49.99 91 43.23 87.62",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "49.99 91 49.99 49.98 83.94 49.98 83.94 74.03 49.99 91",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "83.95 41.73 50 35.89 50 9 83.95 25.97 83.95 41.73",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "16.05 41.73 50 35.89 50 9 16.05 25.97 16.05 41.73",
      fill: "#9d5025"
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