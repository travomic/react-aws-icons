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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Event Alarm"), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "27.72",
      y: "42.83",
      width: "10.71",
      height: "26.44"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "44.65",
      y: "47.98",
      width: "10.71",
      height: "21.29"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "47.17",
      y: "52.07",
      width: "5.66",
      height: "48.45",
      transform: "translate(126.29 26.29) rotate(90)"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#4b612c"
      },
      d: "M61.57,39.65V69.27H72.28V39.65a11.2,11.2,0,0,1-10.71,0Z"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#759c3e"
      },
      x: "27.72",
      y: "40.35",
      width: "10.71",
      height: "26.44"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#759c3e"
      },
      x: "44.65",
      y: "45.5",
      width: "10.71",
      height: "21.29"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#759c3e"
      },
      x: "47.17",
      y: "49.59",
      width: "5.66",
      height: "48.45",
      transform: "translate(123.81 23.81) rotate(90)"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#759c3e"
      },
      d: "M61.57,37.17V66.79H72.28V37.17a11.2,11.2,0,0,1-10.71,0Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#8d090a"
      },
      d: "M73.38,29.82a6.46,6.46,0,0,1-12.93,0V27.34l6.46-4,6.46,4Z"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#ea2227"
      },
      cx: "66.92",
      cy: "27.34",
      r: "6.46"
    })) // -- END of generated content.

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