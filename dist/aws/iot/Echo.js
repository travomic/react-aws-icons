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
      id: "aws-iot-echo-linear-gradient",
      x1: "32.1",
      y1: "18.59",
      x2: "67.95",
      y2: "18.59",
      gradientUnits: "userSpaceOnUse"
    }, _react.default.createElement("stop", {
      offset: "0.2",
      "stop-color": "#00b3ff"
    }), _react.default.createElement("stop", {
      offset: "0.22",
      "stop-color": "#13b9ff"
    }), _react.default.createElement("stop", {
      offset: "0.26",
      "stop-color": "#43c7ff"
    }), _react.default.createElement("stop", {
      offset: "0.32",
      "stop-color": "#90deff"
    }), _react.default.createElement("stop", {
      offset: "0.4",
      "stop-color": "#fafdff"
    }), _react.default.createElement("stop", {
      offset: "0.4",
      "stop-color": "#fff"
    }), _react.default.createElement("stop", {
      offset: "0.55",
      "stop-color": "#fff"
    }), _react.default.createElement("stop", {
      offset: "0.62",
      "stop-color": "#fcfeff"
    }), _react.default.createElement("stop", {
      offset: "0.68",
      "stop-color": "#f2fbff"
    }), _react.default.createElement("stop", {
      offset: "0.74",
      "stop-color": "#e1f6ff"
    }), _react.default.createElement("stop", {
      offset: "0.79",
      "stop-color": "#c9efff"
    }), _react.default.createElement("stop", {
      offset: "0.83",
      "stop-color": "#aae6ff"
    }), _react.default.createElement("stop", {
      offset: "0.88",
      "stop-color": "#84daff"
    }), _react.default.createElement("stop", {
      offset: "0.93",
      "stop-color": "#58cdff"
    }), _react.default.createElement("stop", {
      offset: "0.97",
      "stop-color": "#25beff"
    }), _react.default.createElement("stop", {
      offset: "1",
      "stop-color": "#00b3ff"
    }))), _react.default.createElement("title", null, "Echo"), _react.default.createElement("rect", {
      style: {
        "fill": "#19486f"
      },
      x: "32.1",
      y: "13.05",
      width: "35.85",
      height: "26.28"
    }), _react.default.createElement("ellipse", {
      style: {
        "fill": "#2e73b8"
      },
      cx: "50.02",
      cy: "13.05",
      rx: "17.92",
      ry: "4"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M50,26.7c-9.9,0-17.92-1.79-17.92-4V87c0,2.21,8,4,17.92,4s17.92-1.79,17.92-4V22.7C67.95,24.91,59.92,26.7,50,26.7Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M50,24.26c-9.9,0-17.92-1.79-17.92-4V84.51c0,2.21,8,4,17.92,4s17.92-1.79,17.92-4V20.26C67.95,22.47,59.92,24.26,50,24.26Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#205b99"
      },
      d: "M50,51.26c-9.9,0-17.92-1.79-17.92-4V80.51c0,2.21,8,4,17.92,4s17.92-1.79,17.92-4V47.26C67.95,49.47,59.92,51.26,50,51.26Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "url(#aws-iot-echo-linear-gradient)"
      },
      d: "M66.63,16.59C64,18.06,57.54,19.09,50,19.09s-13.95-1-16.61-2.5c-.84-.46-1.32-1-1.32-1.5v3c0,2.21,8,4,17.92,4s17.92-1.79,17.92-4v-3C67.95,15.62,67.47,16.13,66.63,16.59Z"
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