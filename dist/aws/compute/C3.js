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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "C3"), _react.default.createElement("rect", {
      style: {
        "fill": "#9d5025"
      },
      x: "23.5",
      y: "24.74",
      width: "53",
      height: "53",
      rx: "9.12",
      ry: "9.12"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#f58536"
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
      d: "M60.36,62.36c0-1.87-.38-2.68-1.55-2.68s-1.62,1.31-1.62,5c0,3.89.54,4.59,1.66,4.59.94,0,1.62-.49,1.62-3.26h2.59c0,2.77-.68,5.17-4.09,5.17-3.89,0-4.38-2.77-4.38-6.68s.49-6.68,4.38-6.68c3.71,0,4,2.72,4,4.59Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M66.48,67.15c0,1.48.29,2.29,1.42,2.29s1.42-.94,1.42-2.05-.25-2.18-1.67-2.18h-.86V63.51h.85c1.08,0,1.48-1,1.48-2s-.4-1.67-1.24-1.67c-1.12,0-1.31.86-1.31,2.07H64.17c0-2.5,1.33-3.76,3.75-3.76s3.67,1,3.67,3.28a2.59,2.59,0,0,1-1.94,2.81v0c1.64.25,2.27,1.4,2.27,3s-.7,3.87-4.23,3.87c-2.47,0-3.69-1.49-3.69-3.92v-.05Z"
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