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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Inspector"), _react.default.createElement("path", {
      style: {
        "fill": "#4b612c"
      },
      d: "M79.2,77.37l-3.06,3.06a5,5,0,0,1-7.07,0L41.23,52.6a5,5,0,0,1,0-7.07l3.06-3.06a5,5,0,0,1,7.07,0L79.2,70.3l1.46,1.06v2.48A5,5,0,0,1,79.2,77.37Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#4b612c"
      },
      d: "M45.22,20.59l-16.65,6.6L19.35,44.35v2.11a25.88,25.88,0,0,0,51.76,0v-2.7l-11.65-18Z"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#759c3e"
      },
      x: "53.04",
      y: "34.29",
      width: "14.33",
      height: "49.36",
      rx: "5",
      ry: "5",
      transform: "translate(-24.06 59.85) rotate(-45)"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#759c3e"
      },
      cx: "45.22",
      cy: "43.98",
      r: "25.88",
      transform: "translate(-17.86 44.86) rotate(-45)"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M45.22,64.2a20.21,20.21,0,1,1,14.3-5.91A20.16,20.16,0,0,1,45.22,64.2Zm0-36.43A16.21,16.21,0,1,0,56.7,32.51,16.17,16.17,0,0,0,45.22,27.77Z"
    }), _react.default.createElement("line", {
      style: {
        "fill": "#fff"
      },
      x1: "45.55",
      y1: "49.59",
      x2: "44.49",
      y2: "54.99"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M44.49,56l-.19,0a1,1,0,0,1-.79-1.17l1.06-5.4a1,1,0,0,1,2,.39l-1.06,5.4A1,1,0,0,1,44.49,56Z"
    }), _react.default.createElement("line", {
      style: {
        "fill": "#fff"
      },
      x1: "51",
      y1: "44.26",
      x2: "56.41",
      y2: "43.26"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M51,45.26a1,1,0,0,1-.18-2l5.41-1a1,1,0,0,1,.36,2l-5.41,1Z"
    }), _react.default.createElement("line", {
      style: {
        "fill": "#fff"
      },
      x1: "42.03",
      y1: "46.93",
      x2: "36.62",
      y2: "47.92"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M36.62,48.92a1,1,0,0,1-.18-2l5.41-1a1,1,0,0,1,.36,2l-5.41,1Z"
    }), _react.default.createElement("line", {
      style: {
        "fill": "#fff"
      },
      x1: "48.45",
      y1: "40.59",
      x2: "49.51",
      y2: "35.19"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M48.45,41.59l-.19,0a1,1,0,0,1-.79-1.17L48.53,35a1,1,0,1,1,2,.39l-1.06,5.4A1,1,0,0,1,48.45,41.59Z"
    }), _react.default.createElement("line", {
      style: {
        "fill": "#fff"
      },
      x1: "40.16",
      y1: "41.74",
      x2: "37.31",
      y2: "38.85"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M40.16,42.74a1,1,0,0,1-.71-.3l-2.85-2.89A1,1,0,1,1,38,38.15L40.87,41a1,1,0,0,1-.71,1.7Z"
    }), _react.default.createElement("line", {
      style: {
        "fill": "#fff"
      },
      x1: "43.28",
      y1: "38.65",
      x2: "40.43",
      y2: "35.76"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M43.28,39.65a1,1,0,0,1-.71-.3l-2.85-2.89a1,1,0,1,1,1.42-1.4L44,37.95a1,1,0,0,1-.71,1.7Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M41.19,47.6l.54.55c2.73,2.76,6.71,3.25,8.91,1.08s1.76-6.16-1-8.92c-.54-.55-.63-.48-.63-.48Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M47.15,51.58A8.78,8.78,0,0,1,41,48.86l-.54-.55a1,1,0,0,1,0-1.41l7.85-7.76c.86-.72,1.69.13,2,.49,3.11,3.15,3.54,7.79,1,10.33A5.87,5.87,0,0,1,47.15,51.58Zm-4.54-4c2.32,2.23,5.57,2.65,7.33.91s1.38-5-.83-7.35Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M41.08,39.55c-1.42,1.4-1.33,3.89,0,6.11l6.08-6C45,38.27,42.5,38.15,41.08,39.55Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M41.11,46.66H41a1,1,0,0,1-.73-.47c-1.65-2.7-1.6-5.65.12-7.34s4.67-1.71,7.35,0a1,1,0,0,1,.17,1.56l-6.08,6A1,1,0,0,1,41.11,46.66Zm2.6-7.1a2.69,2.69,0,0,0-1.93.7A3.49,3.49,0,0,0,41.4,44l4.11-4.05A5,5,0,0,0,43.71,39.56Z"
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