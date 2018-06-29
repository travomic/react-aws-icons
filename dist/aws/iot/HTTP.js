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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "HTTP"), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "75.22 60.5 32.78 60.5 32.78 58 54 42.33 75.22 58 75.22 60.5"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "77.84 78.9 43.8 78.9 43.8 76.42 61.1 63.29 77.84 76.42 77.84 78.9"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "43.8",
      y: "60.5",
      width: "34.04",
      height: "15.92"
    }), _react.default.createElement("g", {
      style: {
        "isolation": "isolate"
      }
    }, _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M45.59,63.06H47.3v4.29h3.15V63.06h1.71V73.77H50.45v-5H47.3v5H45.59Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M56.3,64.5H53.75V63.06h6.76V64.5H58v9.27H56.3Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M63.86,64.5H61.31V63.06h6.76V64.5h-2.5v9.27H63.86Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M69.67,63.06h3.39c2.05,0,3,1.29,3,3.12a2.9,2.9,0,0,1-3.13,3.17h-1.5v4.42H69.67Zm1.71,5h1.21a1.62,1.62,0,0,0,1.71-1.84c0-1.16-.46-1.86-1.83-1.86H71.38Z"
    })), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M75.22,58V32.22A9.12,9.12,0,0,0,66.1,23.1H31.34a9.12,9.12,0,0,0-9.12,9.12V67a9.12,9.12,0,0,0,9.12,9.12h10V58Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M75.22,58V29.74a9.12,9.12,0,0,0-9.12-9.12H31.34a9.12,9.12,0,0,0-9.12,9.12V64.5a9.12,9.12,0,0,0,9.12,9.12h10V58Z"
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