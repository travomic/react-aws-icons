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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "My SQLM"), _react.default.createElement("rect", {
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
      d: "M30.3,28.08h3.1l1.48,7.31h0l1.49-7.31h3.09V38.43H37.57V30.17h0L35.7,38.43H34.08l-1.84-8.26h0v8.26H30.3Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M40.6,39.49a3.24,3.24,0,0,0,.52,0c.74,0,1-.41,1.07-1.1L40,30.63h2.09L43.25,36h0l1-5.39h2l-1.88,7.28c-.7,2.7-1.15,3.07-3,3.07H40.6Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M51.53,35.2v.3c0,1,.28,1.59,1.38,1.59a1.19,1.19,0,0,0,1.25-1.28c0-.94-.48-1.29-1.86-1.77-1.86-.64-2.71-1.41-2.71-3.13,0-2,1.23-3,3.2-3s3.2.8,3.2,2.78V31H54c0-1-.33-1.54-1.13-1.54a1.07,1.07,0,0,0-1.19,1.2c0,.64.19,1,1.07,1.41l1.61.7c1.57.68,2,1.48,2,2.74,0,2.19-1.33,3.17-3.59,3.17s-3.29-1.1-3.29-3V35.2Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M63,39.71l-1.23-1.28a2.72,2.72,0,0,1-.64.16,5.58,5.58,0,0,1-.74,0c-3.13,0-3.52-2.23-3.52-5.38s.39-5.38,3.52-5.38,3.52,2.23,3.52,5.38a7.57,7.57,0,0,1-.8,4.2l1.12,1.13ZM60.37,37.1c1.23,0,1.43-1.06,1.43-3.84s-.2-3.84-1.43-3.84-1.44,1.07-1.44,3.84S59.14,37.1,60.37,37.1Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M64.8,38.43V28.08h2.09v8.64h3.7v1.71Z"
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