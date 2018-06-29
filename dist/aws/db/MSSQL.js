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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "MSSQL"), _react.default.createElement("path", {
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
      d: "M29.78,28.08h3.1l1.48,7.31h0l1.49-7.31H39V38.43H37.05V30.17h0l-1.84,8.26H33.56l-1.84-8.26h0v8.26H29.78Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M41.77,35.2v.3c0,1,.28,1.59,1.38,1.59a1.19,1.19,0,0,0,1.25-1.28c0-.94-.48-1.29-1.86-1.77-1.86-.64-2.71-1.41-2.71-3.13,0-2,1.23-3,3.2-3s3.2.8,3.2,2.78V31h-2c0-1-.33-1.54-1.13-1.54a1.07,1.07,0,0,0-1.19,1.2c0,.64.19,1,1.07,1.41l1.61.7c1.57.68,2,1.48,2,2.74,0,2.19-1.33,3.17-3.59,3.17s-3.29-1.1-3.29-3V35.2Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M52,35.2v.3c0,1,.28,1.59,1.38,1.59a1.19,1.19,0,0,0,1.25-1.28c0-.94-.48-1.29-1.86-1.77-1.86-.64-2.71-1.41-2.71-3.13,0-2,1.23-3,3.2-3s3.2.8,3.2,2.78V31h-2c0-1-.33-1.54-1.13-1.54a1.07,1.07,0,0,0-1.19,1.2c0,.64.19,1,1.07,1.41l1.61.7c1.57.68,2,1.48,2,2.74,0,2.19-1.33,3.17-3.59,3.17s-3.29-1.1-3.29-3V35.2Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M63.5,39.71l-1.23-1.28a2.72,2.72,0,0,1-.64.16,5.58,5.58,0,0,1-.74,0c-3.13,0-3.52-2.23-3.52-5.38s.39-5.38,3.52-5.38,3.52,2.23,3.52,5.38a7.57,7.57,0,0,1-.8,4.2l1.12,1.13ZM60.89,37.1c1.23,0,1.43-1.06,1.43-3.84s-.2-3.84-1.43-3.84-1.44,1.07-1.44,3.84S59.66,37.1,60.89,37.1Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M65.32,38.43V28.08h2.09v8.64h3.7v1.71Z"
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
      transform: "translate(0 -3.59)"
    }, "MS SQL instance")) // -- END of generated content.

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