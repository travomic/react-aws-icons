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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Sensor"), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M60.76,23.73,57.43,26l-1.66-3.68a15.81,15.81,0,0,0-14.39-9.27A15.78,15.78,0,0,0,25.6,28.86l.07,2.92-2.48.72c-4,1.16-7.28,6.32-7.28,9.81v1.26c0,4.25,5.15,9.19,11.78,9.19H72.31c6.63,0,11.78-4.94,11.78-9.19V42.31c0-4.28-4.77-9.9-10.34-10.38l-3-.25-.1-3a6.32,6.32,0,0,0-9.9-5Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M60.76,20.77l-3.34,2.29-1.66-3.68A15.81,15.81,0,0,0,41.38,10.1,15.78,15.78,0,0,0,25.6,25.9l.07,2.92-2.48.72c-4,1.16-7.28,6.32-7.28,9.81v1.26c0,4.25,5.15,9.19,11.78,9.19H72.31c6.63,0,11.78-4.94,11.78-9.19V39.36c0-4.28-4.77-9.9-10.34-10.38l-3-.25-.1-3a6.32,6.32,0,0,0-9.9-5Z"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#19486f"
      },
      x: "20.07",
      y: "67.73",
      width: "58",
      height: "22.17"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "20.07",
      y: "64.73",
      width: "58",
      height: "22.17"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "47.57",
      y: "49.8",
      width: "3",
      height: "26.01"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "47.57",
      y: "39.73",
      width: "3",
      height: "10.08"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "49.07 34.06 44.57 40.64 53.57 40.64 49.07 34.06"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "27.07",
      y: "70.73",
      width: "9.67",
      height: "9.67",
      rx: "4.83",
      ry: "4.83"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "55.24 80.39 42.74 80.39 48.99 70.73 55.24 80.39"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "61.24",
      y: "70.73",
      width: "9.67",
      height: "9.67"
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