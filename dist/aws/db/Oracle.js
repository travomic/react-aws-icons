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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Oracle"), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M32.62,24H67.38a9.12,9.12,0,0,1,9.12,9.12V48.43c-1.8-.93-5.74-1.92-11.57-1.92a42.35,42.35,0,0,0-6.67.5c-3.93.65-6,1.77-6,2.46v26c0,.43.59,1,1.71,1.56H32.62a9.12,9.12,0,0,1-9.12-9.12V33.13A9.12,9.12,0,0,1,32.62,24Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M32.62,21.81H67.38a9.12,9.12,0,0,1,9.12,9.12V46.23c-1.8-.93-5.74-1.92-11.57-1.92a42.35,42.35,0,0,0-6.67.5c-3.93.65-6,1.77-6,2.46v26c0,.43.59,1,1.71,1.56H32.62a9.12,9.12,0,0,1-9.12-9.12V30.93A9.12,9.12,0,0,1,32.62,21.81Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M65.85,51.29a35.53,35.53,0,0,0-5.6.42,16.49,16.49,0,0,1-5-.44v2.5c0,.58,1.75,1.52,5,2.05a33.94,33.94,0,0,0,5.6.42c6.9,0,10.65-1.63,10.65-2.47v-2.5Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M55,58.63l0,17.1c0,.87,3,2.47,10.12,2.47a32.25,32.25,0,0,0,8.79-1c1.42-.46,2.43-1,2.54-1.37v-17c-2.08,1.29-6.37,2-10.63,2h-.28l-1.31,0h-.18L63,60.65l-.54,0-.84-.07-.45-.07-.9-.12A14.26,14.26,0,0,1,55,58.63Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M65.85,48.8a35.53,35.53,0,0,0-5.6.42c-3.3.55-5,1.49-5,2.06s1.75,1.52,5,2.05a33.94,33.94,0,0,0,5.6.42c6.9,0,10.65-1.63,10.65-2.47S72.75,48.8,65.85,48.8Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M55,56.13l0,17.1c0,.87,3,2.47,10.12,2.47a32.25,32.25,0,0,0,8.79-1c1.42-.46,2.43-1,2.54-1.37v-17c-2.08,1.29-6.37,2-10.63,2h-.28l-1.31,0h-.18L63,58.15l-.54,0L61.62,58,61.17,58l-.9-.12A14.26,14.26,0,0,1,55,56.13Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M32.62,74.81H53.95V77H32.62a9.12,9.12,0,0,1-9.12-9.12v-2.2A9.12,9.12,0,0,0,32.62,74.81Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M32.19,27.88c3.13,0,3.52,2.23,3.52,5.38s-.39,5.38-3.52,5.38-3.52-2.23-3.52-5.38S29.06,27.88,32.19,27.88Zm0,9.22c1.23,0,1.43-1.06,1.43-3.84s-.2-3.84-1.43-3.84-1.44,1.07-1.44,3.84S31,37.1,32.19,37.1Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M36.57,28.08h3.86a2.45,2.45,0,0,1,2.75,2.67c0,1.38-.55,2.3-1.72,2.55v0c1.42.19,1.64,1,1.67,3.16,0,1.09.07,1.65.46,1.86v.09H41.33a2,2,0,0,1-.26-1.09l-.06-2c0-.81-.39-1.3-1.23-1.3H38.66v4.38H36.57Zm2.09,4.52h.87a1.36,1.36,0,0,0,1.57-1.55,1.28,1.28,0,0,0-1.45-1.44h-1Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M46.62,28.08h2.58l2.74,10.35H49.77l-.48-2.19H46.54l-.48,2.19H43.88Zm.28,6.45h2l-1-4.65h0Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M56.6,31.58c0-1.51-.3-2.16-1.25-2.16s-1.3,1.06-1.3,4c0,3.13.43,3.7,1.33,3.7s1.3-.39,1.3-2.62h2.09c0,2.23-.55,4.16-3.29,4.16-3.13,0-3.52-2.23-3.52-5.38s.39-5.38,3.52-5.38,3.2,2.19,3.2,3.7Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M59.52,38.43V28.08h2.09v8.64h3.7v1.71Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M71.69,28.08v1.71H68v2.44h3.48v1.71H68v2.78h3.84v1.71H65.91V28.08Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M60,60h3.27l2.32,9.73h0L67.95,60h3.2V73.17h-2V62.25h0L66.48,73.17H64.71L62.07,62.25h0V73.17H60Z"
    }), _react.default.createElement("text", {
      style: {
        "font-size": "12px",
        "font-family": "HelveticaNeue-CondensedBold, Helvetica Neue",
        "font-weight": "700"
      },
      transform: "translate(0 -3.93)"
    }, "Ora", _react.default.createElement("tspan", {
      style: {
        "letter-spacing": "-0.02em",
        "font-size": "12px",
        "font-family": "HelveticaNeue-CondensedBold, Helvetica Neue",
        "font-weight": "700"
      },
      x: "16.44",
      y: "0"
    }, "c"), _react.default.createElement("tspan", {
      x: "21.76",
      y: "0"
    }, "le DB instance"))) // -- END of generated content.

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