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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "VPNConnection"), _react.default.createElement("path", {
      style: {
        "fill": "#9d5025"
      },
      d: "M76.11,44.74V42.26L67.25,42H61.76v-.54c0-6.29-5.65-9.77-11.77-9.77S38.84,35.62,38.13,42H32.77l-8.88.28v2.48l8.88,6.09V47.34h5.38V53.9h-3.9V70.8H65.68V53.9H61.76V47.34h5.49v3.47ZM55.21,53.9H43.91V47.34H55.21ZM43.88,42c0-1,.25-5.29,5.62-5.29h0A5.23,5.23,0,0,1,55.21,42Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M76.11,42.26l-8.85-6.08v3.32H61.76V39c0-6.29-5.65-9.77-11.77-9.77S38.84,33.14,38.13,39.51H32.77V36.18l-8.88,6.08,8.88,6.09V44.86h5.38v6.55h-3.9V68.32H65.68V51.42H61.76V44.86h5.49v3.47Zm-20.9,9.15H43.91V44.86H55.21ZM43.88,39.51c0-1,.25-5.29,5.62-5.29h0a5.23,5.23,0,0,1,5.67,5.29Z"
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