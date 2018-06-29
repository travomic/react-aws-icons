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
    }), _react.default.createElement("title", null, "Kinesis Streams"), _react.default.createElement("g", null, _react.default.createElement("rect", {
      x: "23.5",
      y: "24.1",
      width: "53",
      height: "53",
      rx: "9.12",
      ry: "9.12",
      fill: "#9d5025"
    }), _react.default.createElement("rect", {
      x: "23.5",
      y: "21.6",
      width: "53",
      height: "53",
      rx: "9.12",
      ry: "9.12",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "32.39 56.63 32.39 66.63 46.19 66.63 46.19 56.63 46.19 52.6 32.39 52.6 32.39 56.63",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "58.66 47.05 69.69 36.01 66.68 33 58.66 24.98 58.66 28.97 46.19 28.97 46.19 33 46.19 43 58.66 43 58.66 47.05",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "42.34 33 42.34 28.97 28.54 28.97 28.54 33 28.54 43 42.34 43 42.34 33",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "62.51 48.59 62.51 52.57 50.04 52.57 50.04 56.61 50.04 66.61 62.51 66.61 62.51 70.65 73.54 59.62 70.53 56.61 62.51 48.59",
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