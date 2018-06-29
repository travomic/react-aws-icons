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
    }), _react.default.createElement("defs", null, _react.default.createElement("clipPath", {
      id: "clip-path"
    }, _react.default.createElement("path", {
      d: "M41.75,33.15l-14.16.46a13.25,13.25,0,0,0-1-5V26.17c.31.77,13.06,3.23,13.06,3.23Z",
      fill: "#876929"
    }))), _react.default.createElement("title", null, "Email Notification"), _react.default.createElement("g", null, _react.default.createElement("rect", {
      x: "12.95",
      y: "64.03",
      width: "81.89",
      height: "13.97",
      fill: "#876929"
    }), _react.default.createElement("rect", {
      x: "12.95",
      y: "47.95",
      width: "81.89",
      height: "12.71",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "94.84 41.19 94.84 43.68 22.9 43.68 22.9 41.19 64.33 27.62 94.84 41.19",
      fill: "#876929"
    }), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M41.75,33.15l-14.16.46a13.25,13.25,0,0,0-1-5V26.17c.31.77,13.06,3.23,13.06,3.23Z",
      fill: "#876929"
    }), _react.default.createElement("g", {
      "clip-path": "url(#clip-path)"
    }, _react.default.createElement("path", {
      d: "M27.59,31.12v2.49a13.25,13.25,0,0,0-1-5V26.17a13.22,13.22,0,0,1,1,4.95",
      fill: "#876929"
    }))), _react.default.createElement("path", {
      d: "M94.84,26.17v15H22.9a13.16,13.16,0,0,0,3.72-15Z",
      fill: "#d9a741"
    }), _react.default.createElement("path", {
      d: "M12.95,45.64H94.84V58.17H12.95Z",
      fill: "#d9a741"
    }), _react.default.createElement("path", {
      d: "M12.95,63H94.84V75.52H12.95Z",
      fill: "#d9a741"
    }), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M49.18,28.36V30H45.52v2.4H49v1.68H45.52v2.74h3.81v1.68H43.45V28.36Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M50.3,30.86H52.2v.79h0a2.2,2.2,0,0,1,2-1A1.69,1.69,0,0,1,56,31.89h0a1.92,1.92,0,0,1,2-1.22c1.31,0,1.92.81,1.92,2.29v5.58h-2V33.17c0-.64-.22-1-.78-1s-1,.43-1,1.31v5h-2V33.17c0-.64-.21-1-.78-1s-1,.43-1,1.31v5h-2Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M61.18,33.21V33c0-1.77,1.22-2.37,2.71-2.37,2.35,0,2.8,1,2.8,2.35v4a3.07,3.07,0,0,0,.24,1.48H65a3.17,3.17,0,0,1-.25-.8h0a1.91,1.91,0,0,1-2,1c-1.37,0-1.86-1.17-1.86-2.2,0-1.44.59-2,1.95-2.4l1.12-.3c.59-.16.79-.38.79-.9a.82.82,0,0,0-.92-.94A.88.88,0,0,0,63,33v.21ZM64.8,34.7a2.55,2.55,0,0,1-.85.39c-.8.17-1.12.55-1.12,1.24s.21,1.07.75,1.07a1.17,1.17,0,0,0,1.22-1.18Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M68.18,28.24h2v1.68h-2Zm0,2.62h2v7.67h-2Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M71.62,28.36h2V38.53h-2Z",
      fill: "#fff"
    })), _react.default.createElement("path", {
      d: "M23.63,33.7a9.23,9.23,0,0,1-18.46,0V31.22l9.23-6.75,9.23,6.75Z",
      fill: "#8d090a"
    }), _react.default.createElement("circle", {
      cx: "14.39",
      cy: "31.22",
      r: "9.23",
      fill: "#ea2227"
    }), _react.default.createElement("rect", {
      x: "15.61",
      y: "48.29",
      width: "76.57",
      height: "7.24",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "15.61",
      y: "65.64",
      width: "76.57",
      height: "7.24",
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