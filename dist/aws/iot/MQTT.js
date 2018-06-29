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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "MQTT"), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "75.22 60.5 32.78 60.5 32.78 58 54 42.33 75.22 58 75.22 60.5"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "77.84 78.9 40.3 78.9 40.3 76.42 59.38 63.29 77.84 76.42 77.84 78.9"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "40.3",
      y: "60.5",
      width: "37.54",
      height: "15.92"
    }), _react.default.createElement("g", {
      style: {
        "isolation": "isolate"
      }
    }, _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M42.14,63.06h2.67L46.7,71h0l1.86-7.94H51.2V73.77H49.58V64.86h0l-2.16,8.91H45.95l-2.16-8.91h0v8.91H42.14Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M58.55,73.62a3.31,3.31,0,0,1-1.68.36c-2.46,0-3.54-1.74-3.54-5.56s1.08-5.57,3.54-5.57,3.54,1.74,3.54,5.57a8.69,8.69,0,0,1-.84,4.24l1.1,1.16-1,.92Zm-.9-2.8.71.71a9.76,9.76,0,0,0,.35-3.15c0-3.6-.81-4.23-1.83-4.23S55,64.77,55,68.37s.81,4.32,1.83,4.32a1.67,1.67,0,0,0,.61-.1l-.81-.79Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M64.29,64.5H61.74V63.06h6.76V64.5H66v9.27H64.29Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M71.85,64.5H69.3V63.06h6.76V64.5h-2.5v9.27H71.85Z"
    })), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M75.22,58V32.22A9.12,9.12,0,0,0,66.1,23.1H31.34a9.12,9.12,0,0,0-9.12,9.12V67a9.12,9.12,0,0,0,9.12,9.12h7V58Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M75.22,58V29.74a9.12,9.12,0,0,0-9.12-9.12H31.34a9.12,9.12,0,0,0-9.12,9.12V64.5a9.12,9.12,0,0,0,9.12,9.12h7V58Z"
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