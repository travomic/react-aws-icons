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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "MFAToken"), _react.default.createElement("circle", {
      style: {
        "fill": "#d2d3d3"
      },
      cx: "50",
      cy: "50",
      r: "26.5"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#7d7c7c"
      },
      d: "M50,77.5A27.5,27.5,0,1,1,77.5,50,27.53,27.53,0,0,1,50,77.5Zm0-53A25.5,25.5,0,1,0,75.5,50,25.53,25.53,0,0,0,50,24.5Z"
    }), _react.default.createElement("g", {
      style: {
        "isolation": "isolate"
      }
    }, _react.default.createElement("path", {
      style: {
        "fill": "#373737"
      },
      d: "M31.65,43.14h2.41l4.17,11.12,4.19-11.12h2.41V56.38H43.16v-11h0L39,56.38h-1.5l-4.13-11h0v11H31.65Z"
    })), _react.default.createElement("g", {
      style: {
        "isolation": "isolate"
      }
    }, _react.default.createElement("path", {
      style: {
        "fill": "#373737"
      },
      d: "M47.06,43.14h8.69v1.48H48.82v4.21H54.9v1.48H48.82v6.06H47.06Z"
    })), _react.default.createElement("g", {
      style: {
        "isolation": "isolate"
      }
    }, _react.default.createElement("path", {
      style: {
        "fill": "#373737"
      },
      d: "M61,43.14h1.95l5.17,13.24H66.14l-1.45-4h-5.6l-1.48,4H55.79Zm-1.32,7.77h4.49l-2.21-6.17h0Z"
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