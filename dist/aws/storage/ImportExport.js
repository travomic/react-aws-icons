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
    }), _react.default.createElement("title", null, "Import Export"), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M49.07,24l28,3.31v2.48c0,3.21-12.51,5.79-28,5.79s-28-2.59-28-5.79V27.35Z",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "76.86 34.29 72.87 49.34 59.7 40.44 59.7 47.8 44.62 47.8 34.37 40.85 34.37 48.21 24.99 48.21 21.28 34.29 21.28 31.81 22.67 34.55 49.07 39.45 76.28 33.98 76.86 31.81 76.86 34.29",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "63.84 47.51 78.88 55.22 78.88 57.7 63.84 67.77 63.84 62.62 51.43 62.56 58.15 58.09 50.67 52.59 63.84 52.65 63.84 47.51",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "36.77 47.93 43.35 52.38 51.36 55.68 51.36 58.16 44.99 62.69 36.77 68.19 36.77 63.04 23.7 63.04 23.7 53.06 36.77 53.06 36.77 47.93",
      fill: "#8c3123"
    }), _react.default.createElement("path", {
      d: "M62.58,67v7.33l4.1-2.71,1.88-3.72v2.48l-.92,3.83c0,2.13-8.27,4.09-18.57,4.09s-18.63-1.72-18.63-3.87L28.7,67.89V65.41l5.68,2.48v5.57l11.57-6Z",
      fill: "#8c3123"
    }), _react.default.createElement("path", {
      d: "M49.07,21.56c15.45,0,28,2.59,28,5.79s-12.51,5.79-28,5.79-28-2.59-28-5.79S33.64,21.56,49.07,21.56Z",
      fill: "#e05243"
    }), _react.default.createElement("path", {
      d: "M76.86,31.81l-4,15.05L59.7,38v7.36H44.62L34.37,38.38v7.36H25L21.28,31.81C22.79,34.72,34.66,37,49.07,37S75.35,34.72,76.86,31.81Z",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "63.84 45.03 78.88 55.22 63.84 65.29 63.84 60.14 51.43 60.09 58.15 55.61 50.67 50.11 63.84 50.17 63.84 45.03",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "36.77 45.45 43.35 49.9 51.36 55.68 44.99 60.21 36.77 65.7 36.77 60.56 23.7 60.56 23.7 50.59 36.77 50.59 36.77 45.45",
      fill: "#e05243"
    }), _react.default.createElement("path", {
      d: "M62.58,64.52v7.33l6-3.95-.92,3.83c0,2.13-8.27,4.09-18.57,4.09S30.44,74.1,30.44,72L28.7,65.41h5.68v7.35L45.95,65Z",
      fill: "#e05243"
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