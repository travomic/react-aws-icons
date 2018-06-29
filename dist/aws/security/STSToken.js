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
    }), _react.default.createElement("title", null, "STSToken"), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M67.38,22.09a3,3,0,0,1,3,3v47.4a3,3,0,0,1-3,3H32.62a3,3,0,0,1-3-3V25.05a3,3,0,0,1,3-3H67.38Z",
      fill: "#759c3e"
    }), _react.default.createElement("g", {
      style: {
        "isolation": " isolate"
      }
    }, _react.default.createElement("path", {
      d: "M44.16,63.91A2.05,2.05,0,0,0,41.84,62c-1.05,0-2.1.38-2.1,1.6s1.5,1.33,3,1.67,3,.87,3,2.71c0,2-2,2.8-3.67,2.8-2.1,0-3.88-1-3.88-3.31h1.18c0,1.58,1.31,2.26,2.73,2.26,1.13,0,2.38-.35,2.38-1.71s-1.5-1.51-3-1.84-3-.76-3-2.48c0-1.9,1.69-2.75,3.4-2.75,1.92,0,3.38.91,3.46,3Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M49.38,62.22H46.25V61.17h7.5v1.05H50.63v8.33H49.38Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M60.22,63.91A2.05,2.05,0,0,0,57.9,62c-1.05,0-2.1.38-2.1,1.6s1.5,1.33,3,1.67,3,.87,3,2.71c0,2-2,2.8-3.67,2.8-2.1,0-3.88-1-3.88-3.31h1.18c0,1.58,1.31,2.26,2.73,2.26,1.13,0,2.38-.35,2.38-1.71s-1.5-1.51-3-1.84-3-.76-3-2.48c0-1.9,1.69-2.75,3.4-2.75,1.92,0,3.38.91,3.46,3Z",
      fill: "#fff"
    })), _react.default.createElement("g", null, _react.default.createElement("circle", {
      cx: "50",
      cy: "39.71",
      r: "13",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M50,54.21a14.5,14.5,0,1,1,14.5-14.5A14.52,14.52,0,0,1,50,54.21Zm0-26a11.5,11.5,0,1,0,11.5,11.5A11.51,11.51,0,0,0,50,28.21Z",
      fill: "#4f4f4f"
    })), _react.default.createElement("rect", {
      x: "43.99",
      y: "39.21",
      width: "7.01",
      height: "3",
      fill: "#4f4f4f"
    }), _react.default.createElement("rect", {
      x: "49.5",
      y: "30.65",
      width: "3",
      height: "11.56",
      fill: "#4f4f4f"
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