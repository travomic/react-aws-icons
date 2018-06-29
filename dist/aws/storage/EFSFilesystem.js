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
    }), _react.default.createElement("title", null, "EFSFilesystem"), _react.default.createElement("g", null, _react.default.createElement("rect", {
      x: "24.31",
      y: "27.63",
      width: "10.35",
      height: "10.35",
      rx: "2.18",
      ry: "2.18",
      fill: "#8c3123"
    }), _react.default.createElement("rect", {
      x: "45.97",
      y: "27.63",
      width: "10.35",
      height: "10.35",
      rx: "2.18",
      ry: "2.18",
      fill: "#8c3123"
    }), _react.default.createElement("rect", {
      x: "67.63",
      y: "27.63",
      width: "10.35",
      height: "10.35",
      rx: "2.18",
      ry: "2.18",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "74.06 45.52 36.21 45.52 36.21 50.56 31.73 50.25 31.73 52.73 32.42 55.42 26.02 54.98 26.02 57.46 27.6 60.27 19.06 59.71 19.06 62.19 36.21 77.81 38.16 77.81 38.16 77.81 73.82 77.81 73.82 77.81 74.06 77.81 74.06 45.52",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "36.21 45.52 36.21 50.25 31.73 50.25 32.95 54.98 26.02 54.98 28.68 59.71 19.06 59.71 36.21 75.33 37.45 75.33 37.92 75.33 38.16 75.33 72.34 75.33 73.58 75.33 73.82 75.33 74.06 75.33 74.06 45.52 36.21 45.52",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "72.34 69.56 72.34 47.23 37.92 47.23 37.92 50.25 67.39 50.25 72.34 69.56",
      fill: "#f2b0a9"
    }), _react.default.createElement("polygon", {
      points: "66.16 51.85 37.92 51.85 36.21 51.85 33.79 51.85 34.59 54.98 36.21 54.98 37.92 54.98 62.15 54.98 70.99 70.71 66.16 51.85",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "61.22 56.58 37.92 56.58 36.21 56.58 35 56.58 34.18 56.58 33.35 56.58 28.75 56.58 30.51 59.71 34.16 59.71 34.98 59.71 35.81 59.71 36.21 59.71 37.92 59.71 56.91 59.71 69.34 71.03 61.22 56.58",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M37,31a.63.63,0,0,0,0-1.27H34.67v-2H37a.63.63,0,0,0,0-1.27H34.51a2.11,2.11,0,0,0-1.18-1.16V22.83a.63.63,0,1,0-1.27,0v2.32h-2V22.83a.63.63,0,1,0-1.27,0v2.32h-2V22.83a.63.63,0,0,0-1.27,0v2.49a2.12,2.12,0,0,0-1.12,1.14H22a.63.63,0,0,0,0,1.27h2.35v2H22A.63.63,0,0,0,22,31h2.35v2H22a.63.63,0,1,0,0,1.27h2.51a2.12,2.12,0,0,0,1.12,1.14v2.49a.63.63,0,0,0,1.27,0V35.51h2v2.32a.63.63,0,0,0,1.27,0V35.51h2v2.32a.63.63,0,0,0,1.27,0V35.36a2.11,2.11,0,0,0,1.18-1.16H37a.63.63,0,0,0,0-1.27H34.67V31Z",
      fill: "#e05243"
    }), _react.default.createElement("rect", {
      x: "27.39",
      y: "28.24",
      width: "4.19",
      height: "4.19",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M58.65,31a.63.63,0,0,0,0-1.27H56.33v-2h2.32a.63.63,0,0,0,0-1.27H56.17A2.11,2.11,0,0,0,55,25.3V22.83a.63.63,0,0,0-1.27,0v2.32h-2V22.83a.63.63,0,0,0-1.27,0v2.32h-2V22.83a.63.63,0,1,0-1.27,0v2.49a2.12,2.12,0,0,0-1.12,1.14H43.62a.63.63,0,0,0,0,1.27H46v2H43.62a.63.63,0,0,0,0,1.27H46v2H43.62a.63.63,0,0,0,0,1.27h2.51a2.12,2.12,0,0,0,1.12,1.14v2.49a.63.63,0,0,0,1.27,0V35.51h2v2.32a.63.63,0,0,0,1.27,0V35.51h2v2.32a.63.63,0,0,0,1.27,0V35.36a2.11,2.11,0,0,0,1.18-1.16h2.48a.63.63,0,0,0,0-1.27H56.33V31Z",
      fill: "#e05243"
    }), _react.default.createElement("rect", {
      x: "49.05",
      y: "28.24",
      width: "4.19",
      height: "4.19",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M80.31,31a.63.63,0,0,0,0-1.27H78v-2h2.32a.63.63,0,1,0,0-1.27H77.83a2.11,2.11,0,0,0-1.18-1.16V22.83a.63.63,0,0,0-1.27,0v2.32h-2V22.83a.63.63,0,0,0-1.27,0v2.32h-2V22.83a.63.63,0,0,0-1.27,0v2.49a2.12,2.12,0,0,0-1.12,1.14H65.28a.63.63,0,1,0,0,1.27h2.35v2H65.28a.63.63,0,0,0,0,1.27h2.35v2H65.28a.63.63,0,1,0,0,1.27h2.51a2.12,2.12,0,0,0,1.12,1.14v2.49a.63.63,0,0,0,1.27,0V35.51h2v2.32a.63.63,0,0,0,1.27,0V35.51h2v2.32a.63.63,0,0,0,1.27,0V35.36a2.11,2.11,0,0,0,1.18-1.16h2.48a.63.63,0,1,0,0-1.27H78V31Z",
      fill: "#e05243"
    }), _react.default.createElement("rect", {
      x: "70.71",
      y: "28.24",
      width: "4.19",
      height: "4.19",
      fill: "#fff"
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