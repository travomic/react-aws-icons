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
      id: "aws-work-docs-linear-gradient",
      x1: "-709.67",
      y1: "-190.85",
      x2: "-709.67",
      y2: "133.29",
      gradientTransform: "translate(233.53 57.6) scale(0.26)",
      gradientUnits: "userSpaceOnUse"
    }, _react.default.createElement("stop", {
      offset: "0",
      "stop-color": "#f58536"
    }), _react.default.createElement("stop", {
      offset: "1",
      "stop-color": "#d16929"
    }))), _react.default.createElement("title", null, "Docs"), _react.default.createElement("polygon", {
      points: "13 28.9 50 7.81 87 28.9 87 71.1 50 92.19 13 71.1 13 28.9",
      fill: "url(#aws-work-docs-linear-gradient)"
    }), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("rect", {
      x: "38.34",
      y: "46.09",
      width: "15.08",
      height: "3.89",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "38.34",
      y: "53.88",
      width: "15.08",
      height: "3.89",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "38.34",
      y: "61.67",
      width: "15.08",
      height: "3.89",
      fill: "#fff"
    })), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "57.31 40.65 57.31 63.22 61.2 63.22 61.2 36.76 42.23 36.76 42.23 40.65 57.31 40.65",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M69,29H38.34v7.79H30.55V74.9H61.2V67.11H69ZM57.31,71H34.44V40.65H57.31Zm7.79-7.79H61.2V36.76h-19V32.86H65.1Z",
      fill: "#fff"
    })))) // -- END of generated content.

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