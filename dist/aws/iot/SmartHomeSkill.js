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
    }), _react.default.createElement("defs", null, _react.default.createElement("radialGradient", {
      id: "aws-iot-smarthomeskill-radial-gradient",
      cx: "61.24",
      cy: "347.29",
      fx: "50.20685436638142",
      r: "49.51",
      gradientTransform: "matrix(0.29, -0.96, 0.54, 0.17, -139.57, 48.12)",
      gradientUnits: "userSpaceOnUse"
    }, _react.default.createElement("stop", {
      offset: "0.17",
      "stop-color": "#fff"
    }), _react.default.createElement("stop", {
      offset: "0.46",
      "stop-color": "#00b3ff"
    })), _react.default.createElement("linearGradient", {
      id: "aws-iot-smarthomeskill-linear-gradient",
      x1: "93.32",
      y1: "132.47",
      x2: "89.19",
      y2: "116.1",
      gradientTransform: "matrix(0.95, -0.3, 0.3, 0.95, -66.85, -46.07)",
      gradientUnits: "userSpaceOnUse"
    }, _react.default.createElement("stop", {
      offset: "0.12",
      "stop-color": "#fff"
    }), _react.default.createElement("stop", {
      offset: "0.19",
      "stop-color": "#f8fdff",
      "stop-opacity": "0.97"
    }), _react.default.createElement("stop", {
      offset: "0.31",
      "stop-color": "#e4f7ff",
      "stop-opacity": "0.89"
    }), _react.default.createElement("stop", {
      offset: "0.44",
      "stop-color": "#c3edff",
      "stop-opacity": "0.76"
    }), _react.default.createElement("stop", {
      offset: "0.6",
      "stop-color": "#95e0ff",
      "stop-opacity": "0.59"
    }), _react.default.createElement("stop", {
      offset: "0.77",
      "stop-color": "#5bceff",
      "stop-opacity": "0.36"
    }), _react.default.createElement("stop", {
      offset: "0.95",
      "stop-color": "#15b9ff",
      "stop-opacity": "0.08"
    }), _react.default.createElement("stop", {
      offset: "1",
      "stop-color": "#00b3ff",
      "stop-opacity": "0"
    }))), _react.default.createElement("title", null, "Smart Home Skill"), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M50,20.83,10.21,43.77a1.08,1.08,0,0,0-.54.93v3.15a1.78,1.78,0,0,0,1.78,1.78H20V79.74a1.83,1.83,0,0,0,1.83,1.83H78.13A1.83,1.83,0,0,0,80,79.74V49.63h8.59a1.78,1.78,0,0,0,1.78-1.78V44.7a1.08,1.08,0,0,0-.54-.93Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M50,18.43,10.21,41.37a1.08,1.08,0,0,0-.54.93v3.15a1.78,1.78,0,0,0,1.78,1.78H20V77.34a1.83,1.83,0,0,0,1.83,1.83H78.13A1.83,1.83,0,0,0,80,77.34V47.23h8.59a1.78,1.78,0,0,0,1.78-1.78V42.3a1.08,1.08,0,0,0-.54-.93Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "url(#aws-iot-smarthomeskill-radial-gradient)"
      },
      d: "M58.62,36.36h0c-.55-.29-1.11-.54-1.68-.76l-.58-.2c-.38-.14-.75-.27-1.14-.38l-.7-.18c-.35-.09-.69-.17-1-.24l-.75-.12c-.33,0-.66-.1-1-.13L51,34.3l-1,0-.81,0-.92.06-.82.09-.89.15-.82.17L44.9,35l-.82.24c-.27.09-.53.19-.79.29s-.56.21-.83.33-.48.23-.72.35-.56.27-.84.42-.37.23-.56.34a18.67,18.67,0,0,0-1.91,1.31l-.33.25c-.27.22-.53.47-.79.71s-.34.3-.51.46-.47.5-.7.75-.34.36-.49.55-.42.53-.62.81-.23.28-.33.43v0l-.06.08h0l-.12.19-.3.46c-.29.45-.57.92-.82,1.41a18.66,18.66,0,0,0-2,10.78,18.85,18.85,0,0,0,.76,3.52q.27.86.63,1.69a18.71,18.71,0,0,0,4.06,6q.66.65,1.38,1.24a18.84,18.84,0,0,0,3.18,2.08h0c.55.29,1.11.54,1.68.76l.58.2c.38.14.75.27,1.14.38l.7.18c.34.09.69.17,1,.24l.75.12c.33,0,.66.1,1,.13l.79.05,1,0,.81,0,.92-.06.82-.09.89-.15.82-.17.84-.22.83-.25c.27-.09.53-.19.79-.29s.56-.21.83-.33.48-.23.72-.35.56-.27.84-.42.37-.22.55-.33a18.68,18.68,0,0,0,1.93-1.32l.31-.24c.28-.23.54-.47.8-.72s.34-.3.5-.46.47-.5.7-.76.33-.36.49-.55.42-.53.62-.81.23-.28.33-.43v0l.06-.08h0l.12-.19.3-.46c.29-.45.57-.92.82-1.4a18.75,18.75,0,0,0-8-25.27ZM57,42.18a13.39,13.39,0,0,1,1.2.87l.26.23q.36.31.71.65A12.87,12.87,0,0,1,46,65.25a12.56,12.56,0,0,1-1.36-.53l-.29-.14c-.35-.17-.68-.36-1-.55L43,63.84a13.37,13.37,0,0,1-1.2-.87l-.26-.23q-.36-.31-.71-.65A12.87,12.87,0,0,1,54,40.78a12.56,12.56,0,0,1,1.36.53l.29.14c.35.17.68.36,1,.55Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "url(#aws-iot-smarthomeskill-linear-gradient)"
      },
      d: "M66.46,44a18.66,18.66,0,0,0-7.84-7.66h0c-.55-.29-1.11-.54-1.68-.76l-.58-.2c-.38-.14-.75-.27-1.14-.38l-.7-.18c-.35-.09-.69-.17-1-.24l-.75-.12c-.33,0-.66-.1-1-.13L51,34.3l-1,0-.81,0-.92.06-.82.09-.89.15-.82.17L44.9,35l-.58.17,1.79,5.62a12.9,12.9,0,0,1,7.87,0,12.57,12.57,0,0,1,1.36.53l.29.14c.35.17.68.36,1,.55l.32.18a13.39,13.39,0,0,1,1.2.87l.26.23q.36.31.71.65a12.91,12.91,0,0,1,3.72,8.32l5.73-1.82A18.85,18.85,0,0,0,66.46,44Z"
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