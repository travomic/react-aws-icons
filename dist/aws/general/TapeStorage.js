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
    }), _react.default.createElement("title", null, "Tape Storage"), _react.default.createElement("rect", {
      x: "16.83",
      y: "46.63",
      width: "31.01",
      height: "3.06",
      fill: "#4f4f4f"
    }), _react.default.createElement("rect", {
      x: "52.16",
      y: "47.16",
      width: "31.01",
      height: "3.6",
      fill: "#4f4f4f"
    }), _react.default.createElement("path", {
      d: "M74.29,36.82A15.5,15.5,0,0,0,55,59.79a44.56,44.56,0,0,1-11.42,1A9.44,9.44,0,0,0,45.1,59a15.53,15.53,0,1,0-5.19,4.73c.89.09,1.8.16,2.76.19a48.59,48.59,0,0,0,15.19-1,15.5,15.5,0,1,0,16.43-26Z",
      fill: "#4f4f4f"
    }), _react.default.createElement("path", {
      d: "M74.29,34.82A15.5,15.5,0,0,0,55,57.79a47.39,47.39,0,0,1-11.86,1.47,15.51,15.51,0,1,0-3.24,2.42c.89.09,1.8.16,2.76.19a48.59,48.59,0,0,0,15.19-1,15.5,15.5,0,1,0,16.43-26Z",
      fill: "#7d7c7c"
    }), _react.default.createElement("path", {
      d: "M28.85,51.86a2.82,2.82,0,0,0-4-.4L22.7,53.24a2.82,2.82,0,0,0-.4,4l.2.24a2.82,2.82,0,0,0,4,.4l2.18-1.78a2.82,2.82,0,0,0,.4-4Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M46,48.92a2.82,2.82,0,0,0-2.78-2.86l-2.82,0a2.82,2.82,0,0,0-2.86,2.78v.31A2.82,2.82,0,0,0,40.36,52l2.82,0A2.82,2.82,0,0,0,46,49.23Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M30.93,42.72a2.82,2.82,0,0,0,1.78-3.57l-.89-2.67a2.82,2.82,0,0,0-3.57-1.78l-.3.1a2.82,2.82,0,0,0-1.78,3.57l.9,2.67a2.82,2.82,0,0,0,3.57,1.78Z",
      fill: "#fff"
    }), _react.default.createElement("circle", {
      cx: "32.34",
      cy: "48.16",
      r: "2.19",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M69.52,53.57A2.82,2.82,0,0,0,67.46,57l.68,2.74a2.82,2.82,0,0,0,3.41,2.06l.3-.08a2.82,2.82,0,0,0,2.06-3.41l-.68-2.74a2.82,2.82,0,0,0-3.42-2.06Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M74.21,36.78a2.82,2.82,0,0,0-3.77,1.29L69.2,40.6a2.82,2.82,0,0,0,1.29,3.77l.28.14a2.82,2.82,0,0,0,3.77-1.29l1.24-2.53a2.82,2.82,0,0,0-1.29-3.77Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M62.14,47.79a2.82,2.82,0,0,0-2.47-3.13l-2.8-.33a2.82,2.82,0,0,0-3.13,2.47l0,.31a2.82,2.82,0,0,0,2.47,3.13l2.8.33a2.82,2.82,0,0,0,3.13-2.46Z",
      fill: "#fff"
    }), _react.default.createElement("circle", {
      cx: "67.66",
      cy: "48.84",
      r: "2.19",
      transform: "translate(-5.41 89.13) rotate(-64.7)",
      fill: "#fff"
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