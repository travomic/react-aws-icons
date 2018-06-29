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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Policy"), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M60.31,13.25H32.88c-4,0-7.16,2.35-7.16,5.67v42c0,3.31,3.21,6.33,7.16,6.33H48.53v-3H48.4A14,14,0,0,1,67.72,52.13V18.92C67.72,15.6,64.27,13.25,60.31,13.25Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M60.31,10.25H32.88c-4,0-7.16,2.35-7.16,5.67v42c0,3.31,3.21,6.33,7.16,6.33H48.53A14,14,0,0,1,67.72,49.13V15.92C67.72,12.6,64.27,10.25,60.31,10.25Z"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "35.11 50.44 32.32 47.4 29.23 50.49 29.23 50.49 35.05 56.31 44.88 46.48 42.64 44.19 35.11 50.44"
    }), _react.default.createElement("g", {
      style: {
        "isolation": "isolate"
      }
    }, _react.default.createElement("path", {
      style: {
        "fill": "#99bce3"
      },
      d: "M29.41,31.61h3.43l3.73,3.53,3.89-3.53h3.22l-5.43,4.82,5.83,5.18h-3.5l-4.1-3.82-4.17,3.82H29l5.83-5.18Z"
    })), _react.default.createElement("g", {
      style: {
        "isolation": "isolate"
      }
    }, _react.default.createElement("path", {
      style: {
        "fill": "#99bce3"
      },
      d: "M29.41,17.11h3.43l3.73,3.53,3.89-3.53h3.22l-5.43,4.82,5.83,5.18h-3.5l-4.1-3.82-4.17,3.82H29l5.83-5.18Z"
    })), _react.default.createElement("path", {
      style: {
        "fill": "none"
      },
      d: "M56,61.69h0a1.22,1.22,0,0,0,0,2.44h0a1.22,1.22,0,1,0,0-2.44Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M62.4,78.8a11.85,11.85,0,0,1-9.27-4.46V89.75l9.27-6.38,9.27,6.38V74.34A11.85,11.85,0,0,1,62.4,78.8Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M62.4,52.56A11.87,11.87,0,1,0,74.28,64.43,11.88,11.88,0,0,0,62.4,52.56Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M62.4,76.5A11.85,11.85,0,0,1,53.13,72V87.44l9.27-6.38,9.27,6.38V72A11.85,11.85,0,0,1,62.4,76.5Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M62.4,50.25A11.87,11.87,0,1,0,74.28,62.13,11.88,11.88,0,0,0,62.4,50.25Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M69.73,61.23l-1.53.92L67.62,62,67,61.35l-1.68.16-.7-1.21-2,0-.45,0a4.16,4.16,0,0,0-1-1.09,4.34,4.34,0,0,0-5.44,0,4.25,4.25,0,0,0-.27,6.39,4.33,4.33,0,0,0,5.73.24,3.48,3.48,0,0,0,.58-.58,3.3,3.3,0,0,0,.44-.66,3.84,3.84,0,0,0,.25-.51h8l.81-1.43ZM56.58,63.61h0a1.12,1.12,0,0,1,0-2.25h0a1.12,1.12,0,1,1,0,2.25Z"
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