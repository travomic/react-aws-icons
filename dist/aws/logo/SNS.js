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
    }), _react.default.createElement("title", null, "SNS"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "42.2 77.81 35.11 75.83 28.41 68.19 35.88 68.81 42.2 77.81",
      fill: "#b8852e"
    }), _react.default.createElement("polygon", {
      points: "42.2 77.81 47.27 67.19 42.53 66.52 35.88 68.81 42.2 77.81",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "25.81 72.78 21.83 71.66 17.44 66.65 22.1 67.38 25.81 72.78",
      fill: "#b8852e"
    }), _react.default.createElement("polygon", {
      points: "25.81 72.78 28.67 66.8 26 66.42 22.1 67.38 25.81 72.78",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "15.7 66.82 19.77 67.65 39.71 50.31 19.77 30.89 15.7 32.94 15.7 66.82",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "35.51 34.31 35.51 66.19 19.77 67.65 19.77 30.89 35.51 34.31",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "24.8 68.73 31.78 70.14 51.06 47.81 31.78 24.82 24.8 28.35 24.8 68.73",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "71.64 37.48 71.64 65.01 31.78 70.14 31.78 24.82 71.64 37.48",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "64.43 84.37 54.36 81.55 44.84 70.69 55.46 71.58 64.43 84.37",
      fill: "#b8852e"
    }), _react.default.createElement("polygon", {
      points: "64.43 84.37 71.64 69.28 64.9 68.32 55.46 71.58 64.43 84.37",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "39.71 71.63 49.98 73.61 63.91 44.62 49.98 15.63 39.71 20.82 39.71 71.63",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "49.98 73.61 84.3 66.74 84.3 32.79 49.98 15.63 49.98 73.61",
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