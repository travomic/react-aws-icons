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
    }))), _react.default.createElement("title", null, "HTTPNotification"), _react.default.createElement("g", null, _react.default.createElement("rect", {
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
    }), _react.default.createElement("path", {
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
    }), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M43.56,29.19h2.09v3.93h2.44V29.19h2.09V39.47H48.09V34.91H45.65v4.56H43.56Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M57.69,29.19v1.7H55.43v8.58H53.34V30.89H51.08v-1.7Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M64.65,29.19v1.7H62.39v8.58H60.3V30.89H58v-1.7Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M65.56,29.19h3.65c2.12,0,2.84,1.54,2.84,3.08,0,2.13-1.32,3.1-3.29,3.1H67.64v4.1H65.56Zm2.09,4.65h.93c.83,0,1.39-.49,1.39-1.54s-.4-1.58-1.45-1.58h-.87Z",
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