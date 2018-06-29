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
    }), _react.default.createElement("title", null, "EFS"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "24.16 38.78 31.84 37.24 40.98 46.09 31.84 53.06 24.16 52.69 24.16 38.78",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "57.49 57.23 74.56 78.73 84.06 57.18 68.12 56.2 57.49 57.23",
      fill: "#f2b0a9"
    }), _react.default.createElement("polygon", {
      points: "42.51 57.23 25.44 78.73 15.94 57.18 31.88 56.2 42.51 57.23",
      fill: "#f2b0a9"
    }), _react.default.createElement("polygon", {
      points: "84.06 57.18 74.56 58.59 74.56 78.73 84.06 73.98 84.06 57.18",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "43.82 38.82 31.84 37.24 31.84 53.06 43.82 52.7 43.82 38.82",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "56.06 38.82 68.04 37.22 74.56 45.71 68.04 53.07 56.06 52.7 56.06 38.82",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "75.72 38.76 68.04 37.22 68.04 53.07 75.72 52.7 75.72 38.76",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "37.71 36.06 50 33.6 59.02 45.14 50 53.94 37.71 53.34 37.71 36.06",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "60.1 28.45 49.94 30.82 39.78 28.45 50 9 60.1 28.45",
      fill: "#5e1f18"
    }), _react.default.createElement("polygon", {
      points: "57.49 57.23 74.56 58.59 74.56 78.73 57.49 74.13 57.49 57.23",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "15.94 57.18 25.44 58.59 25.44 78.73 15.94 73.98 15.94 57.18",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "42.51 57.23 25.44 58.59 25.44 78.73 42.51 74.13 42.51 57.23",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "68.04 59.56 50 57.85 31.96 59.56 50 91 68.04 59.56",
      fill: "#f2b0a9"
    }), _react.default.createElement("polygon", {
      points: "68.04 59.56 50 62.25 50 91 68.04 81.99 68.04 59.56",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "31.96 59.56 50 62.25 50 91 31.96 81.99 31.96 59.56",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "62.17 36.05 50 33.6 50 53.94 62.17 53.35 62.17 36.05",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "60.1 14.08 50 9 50 25.4 60.1 28.45 60.1 14.08",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "39.78 14.08 50 9 50 25.4 39.78 28.45 39.78 14.08",
      fill: "#8c3123"
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