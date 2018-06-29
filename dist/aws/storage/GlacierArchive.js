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
    }), _react.default.createElement("title", null, "Glacier Archive"), _react.default.createElement("g", null, _react.default.createElement("rect", {
      x: "24.99",
      y: "31.41",
      width: "23.4",
      height: "51.59",
      fill: "#8c3123"
    }), _react.default.createElement("rect", {
      x: "51.62",
      y: "31.41",
      width: "23.4",
      height: "51.59",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "48.15 17.33 25.59 23.42 25.59 25.91 48.38 25.91 48.38 17.39 48.15 17.33",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "73.94 23.42 51.62 17.39 51.62 25.91 73.94 25.91 73.94 23.42",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "67.58 17 51.62 17 51.62 23.42 73.94 23.42 67.58 17",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "32.45 17 25.59 23.42 26.09 23.42 48.38 23.42 48.38 17 32.45 17",
      fill: "#e05243"
    }), _react.default.createElement("rect", {
      x: "24.99",
      y: "29.14",
      width: "23.4",
      height: "51.37",
      fill: "#e05243"
    }), _react.default.createElement("rect", {
      x: "51.62",
      y: "29.14",
      width: "23.4",
      height: "51.37",
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