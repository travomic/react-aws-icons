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
    }), _react.default.createElement("title", null, "Container"), _react.default.createElement("g", null, _react.default.createElement("rect", {
      x: "23.5",
      y: "37.61",
      width: "53",
      height: "27.25",
      fill: "#9d5025"
    }), _react.default.createElement("rect", {
      x: "23.5",
      y: "35.13",
      width: "53",
      height: "27.25",
      fill: "#f58536"
    }), _react.default.createElement("rect", {
      x: "34.95",
      y: "36.76",
      width: "2.5",
      height: "24",
      fill: "#fbbf93"
    }), _react.default.createElement("rect", {
      x: "39.55",
      y: "36.76",
      width: "2.5",
      height: "24",
      fill: "#fbbf93"
    }), _react.default.createElement("rect", {
      x: "44.15",
      y: "36.76",
      width: "2.5",
      height: "24",
      fill: "#fbbf93"
    }), _react.default.createElement("rect", {
      x: "25.75",
      y: "36.76",
      width: "2.5",
      height: "24",
      fill: "#fbbf93"
    }), _react.default.createElement("rect", {
      x: "30.35",
      y: "36.76",
      width: "2.5",
      height: "24",
      fill: "#fbbf93"
    }), _react.default.createElement("rect", {
      x: "48.75",
      y: "36.76",
      width: "2.5",
      height: "24",
      fill: "#fbbf93"
    }), _react.default.createElement("rect", {
      x: "53.35",
      y: "36.76",
      width: "2.5",
      height: "24",
      fill: "#fbbf93"
    }), _react.default.createElement("rect", {
      x: "57.95",
      y: "36.76",
      width: "2.5",
      height: "24",
      fill: "#fbbf93"
    }), _react.default.createElement("rect", {
      x: "62.55",
      y: "36.76",
      width: "2.5",
      height: "24",
      fill: "#fbbf93"
    }), _react.default.createElement("rect", {
      x: "67.15",
      y: "36.76",
      width: "2.5",
      height: "24",
      fill: "#fbbf93"
    }), _react.default.createElement("rect", {
      x: "71.75",
      y: "36.76",
      width: "2.5",
      height: "24",
      fill: "#fbbf93"
    }), _react.default.createElement("rect", {
      x: "26.4",
      y: "37.41",
      width: "1.85",
      height: "23.35",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "31",
      y: "37.41",
      width: "1.85",
      height: "23.35",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "35.6",
      y: "37.41",
      width: "1.85",
      height: "23.35",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "40.2",
      y: "37.41",
      width: "1.85",
      height: "23.35",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "44.8",
      y: "37.41",
      width: "1.85",
      height: "23.35",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "49.4",
      y: "37.41",
      width: "1.85",
      height: "23.35",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "54",
      y: "37.41",
      width: "1.85",
      height: "23.35",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "58.6",
      y: "37.41",
      width: "1.85",
      height: "23.35",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "63.2",
      y: "37.41",
      width: "1.85",
      height: "23.35",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "67.8",
      y: "37.41",
      width: "1.85",
      height: "23.35",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "72.4",
      y: "37.41",
      width: "1.85",
      height: "23.35",
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