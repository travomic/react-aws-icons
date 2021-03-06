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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Postgre SQL"), _react.default.createElement("rect", {
      style: {
        "fill": "#19486f"
      },
      x: "23.5",
      y: "24.74",
      width: "53",
      height: "53",
      rx: "9.12",
      ry: "9.12"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "23.5",
      y: "22.26",
      width: "53",
      height: "53",
      rx: "9.12",
      ry: "9.12"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M26,30.58h2.49a2,2,0,0,1,2.17,2.29,2.13,2.13,0,0,1-2.3,2.32h-1.1v3.25H26Zm1.25,3.66h.89a1.19,1.19,0,0,0,1.25-1.35c0-.85-.34-1.36-1.34-1.36h-.8Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M33.45,32.36c1.73,0,2.21,1.28,2.21,3.11s-.56,3.11-2.21,3.11-2.2-1.28-2.2-3.11S31.74,32.36,33.45,32.36Zm0,5.35c.87,0,1-.73,1-2.23,0-1.31-.15-2.23-1-2.23s-1,.92-1,2.23C32.44,37,32.6,37.71,33.45,37.71Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M39.16,34.24v-.15c0-.47-.17-.91-.78-.91s-.85.22-.85.77.21.65.84.87l.76.26a1.6,1.6,0,0,1,1.29,1.71c0,1.27-.92,1.8-2.12,1.8-1.5,0-1.95-.69-1.95-1.84v-.22H37.4v.19c0,.68.24,1.06.92,1.06s1-.33,1-.87a.86.86,0,0,0-.65-.87l-1-.34A1.58,1.58,0,0,1,36.41,34c0-1.11.8-1.63,2-1.63,1.51,0,1.85.88,1.85,1.62v.26Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M40.88,32.51h.81V30.83h1.19v1.68h1v.88h-1v3.53c0,.46.13.63.54.63a2.31,2.31,0,0,0,.43,0v.88a3.91,3.91,0,0,1-1,.1c-.8,0-1.2-.22-1.2-1.43V33.39h-.81Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M45.63,38.94a.77.77,0,0,0,.86.7,1,1,0,0,0,1-1.11v-1h0a1.43,1.43,0,0,1-1.34.81c-1.39,0-1.77-1.36-1.77-3,0-1.3.2-3,1.88-3a1.32,1.32,0,0,1,1.3.88h0v-.73h1.12v5.63c0,1.44-.62,2.31-2.21,2.31-1.76,0-2-1-2-1.52Zm.84-1.5c.92,0,1-1.17,1-2.1s-.12-2-.95-2-1,.88-1,2S45.59,37.44,46.47,37.44Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M49.77,32.51H51v.92h0a1.46,1.46,0,0,1,1.38-1.08.94.94,0,0,1,.29,0v1.21a2.2,2.2,0,0,0-.5-.07c-.54,0-1.19.24-1.19,1.34v3.54H49.77Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M54.3,35.63V36c0,.79.1,1.8,1,1.8s.95-1,.95-1.32h1.12a2,2,0,0,1-2.08,2.13c-1,0-2.17-.29-2.17-3,0-1.55.33-3.2,2.19-3.2,1.65,0,2.09,1,2.09,2.64v.63Zm1.9-.81v-.32c0-.75-.24-1.32-.91-1.32s-1,.75-1,1.52v.12Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M59.45,36v.2c0,1,.42,1.44,1.29,1.44a1.11,1.11,0,0,0,1.19-1.14,1.32,1.32,0,0,0-1.12-1.4l-.86-.3a2.09,2.09,0,0,1-1.64-2.16,2.16,2.16,0,0,1,2.44-2.22c2,0,2.22,1.25,2.22,2.07v.18H61.72V32.5c0-.71-.32-1.13-1.1-1.13a1,1,0,0,0-1.06,1.13c0,.67.34,1,1.18,1.33l.85.31a2,2,0,0,1,1.59,2.08c0,1.67-1,2.37-2.6,2.37a2.16,2.16,0,0,1-2.39-2.4V36Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M67.9,38.32a2.43,2.43,0,0,1-1.23.26c-1.8,0-2.6-1.28-2.6-4.08s.79-4.08,2.6-4.08,2.6,1.28,2.6,4.08a6.38,6.38,0,0,1-.62,3.11l.8.85-.75.67Zm-.66-2.06.52.52A7.18,7.18,0,0,0,68,34.47c0-2.64-.59-3.1-1.34-3.1s-1.34.46-1.34,3.1.59,3.17,1.34,3.17a1.22,1.22,0,0,0,.45-.08L66.52,37Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M70.36,30.58h1.25v6.8h3v1.06H70.36Z"
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