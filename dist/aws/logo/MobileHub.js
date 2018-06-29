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
    }), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
      id: "aws-logo-mobilehub-linear-gradient",
      x1: "27.84",
      y1: "53.5",
      x2: "68.37",
      y2: "42.71",
      gradientUnits: "userSpaceOnUse"
    }, _react.default.createElement("stop", {
      offset: "0",
      "stop-color": "#f7962f",
      "stop-opacity": "0.96"
    }), _react.default.createElement("stop", {
      offset: "0.36",
      "stop-color": "#d64626",
      "stop-opacity": "0.96"
    }), _react.default.createElement("stop", {
      offset: "0.45",
      "stop-color": "#d04730",
      "stop-opacity": "0.97"
    }), _react.default.createElement("stop", {
      offset: "0.61",
      "stop-color": "#bf4949",
      "stop-opacity": "0.98"
    }), _react.default.createElement("stop", {
      offset: "0.81",
      "stop-color": "#a44c73",
      "stop-opacity": "0.99"
    }), _react.default.createElement("stop", {
      offset: "1",
      "stop-color": "#87509f"
    }))), _react.default.createElement("title", null, "Mobile Hub"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "70.37 59.36 70.37 35.84 50 24.08 29.64 35.84 29.64 59.36 50 71.12 70.37 59.36",
      fill: "url(#aws-logo-mobilehub-linear-gradient)"
    }), _react.default.createElement("path", {
      d: "M50,31.54l-13.91,8V55.63l13.91,8,13.91-8V39.57ZM62.5,54.82,50,62,37.5,54.82V40.38L50,33.16l12.5,7.22Z",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "73.69 65.05 68.29 68.17 68.29 72.22 53.68 80.65 50 78.53 46.32 80.65 31.71 72.22 31.71 68.17 26.31 65.05 20.91 68.17 20.91 74.41 26.31 77.53 30.17 75.3 44.6 83.63 44.6 87.88 50 91 55.4 87.88 55.4 83.63 69.83 75.3 73.69 77.53 79.09 74.41 79.09 68.17 73.69 65.05",
      fill: "#df5343"
    }), _react.default.createElement("polygon", {
      points: "83.9 50.92 83.91 34.26 87.59 32.13 87.59 25.9 82.19 22.78 78.5 24.9 64.07 16.57 64.07 12.12 58.67 9 53.27 12.12 53.27 18.36 58.67 21.48 62.18 19.45 76.78 27.88 76.78 32.13 80.46 34.26 80.46 51.13 76.96 53.15 76.96 59.39 82.36 62.51 87.76 59.39 87.76 53.15 83.9 50.92",
      fill: "#ad688a"
    }), _react.default.createElement("polygon", {
      points: "41.33 9 35.93 12.12 35.93 16.58 21.5 24.91 17.82 22.78 12.41 25.9 12.41 32.14 16.09 34.26 16.1 50.92 12.24 53.15 12.24 59.39 17.64 62.51 23.04 59.39 23.04 53.15 19.54 51.13 19.54 34.26 23.22 32.14 23.22 27.89 37.82 19.45 41.33 21.48 46.73 18.36 46.73 12.12 41.33 9",
      fill: "#f58435"
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