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
    }), _react.default.createElement("title", null, "Data Pipeline"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "68.08 72.14 50 68.14 31.92 72.14 50 91 68.08 72.14",
      fill: "#fcbf92"
    }), _react.default.createElement("polygon", {
      points: "16.04 35.84 50 9 83.97 35.84 50 39.99 16.04 35.84",
      fill: "#6b3b19"
    }), _react.default.createElement("polygon", {
      points: "50 25.83 83.97 35.84 83.97 25.98 50 9 50 25.83",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "77.15 47.31 50 45.98 50 62.38 77.15 58.28 77.15 47.31",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "22.85 47.31 50 45.98 50 62.38 22.85 58.28 22.85 47.31",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "50 25.83 16.04 35.84 16.04 25.98 50 9 50 25.83",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "68.08 72.14 50 78.4 50 91 68.08 81.96 68.08 72.14",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "31.92 72.14 50 78.4 50 91 31.92 81.96 31.92 72.14",
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