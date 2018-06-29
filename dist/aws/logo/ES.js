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
    }), _react.default.createElement("title", null, "ES"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "16.03 74.05 20.38 76.28 22.14 75.87 22.47 44.87 20.38 44.77 16.03 45.2 16.03 74.05",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "28.2 74.44 20.38 76.28 20.38 44.77 28.2 45.14 28.2 74.44",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "24.47 78.27 31.93 82.05 36.76 80.51 36.76 31.74 31.93 30.82 24.47 33.06 24.47 78.27",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "44.7 77.97 31.93 82.05 31.93 30.82 44.7 33.27 44.7 77.97",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "72.92 32.35 72.92 67.75 81.48 69.09 81.48 30.82 72.92 32.35",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "53.1 30.3 54.84 19.52 79.63 28.62 79.63 34.34 73.05 35.27 53.1 30.3",
      fill: "#6b3b19"
    }), _react.default.createElement("polygon", {
      points: "50.79 70.36 57.98 78.92 79.63 71.57 79.63 65.73 72.99 64.8 50.79 70.36",
      fill: "#fcbf92"
    }), _react.default.createElement("polygon", {
      points: "37.9 84.98 50 90.98 57.16 87.4 59.52 13.73 50 8.98 37.9 15.03 37.9 84.98",
      fill: "#9d5025"
    }), _react.default.createElement("path", {
      d: "M50,9V91L84,74V26ZM79.63,65.73,60.19,71.57v-43l19.45,5.79Z",
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