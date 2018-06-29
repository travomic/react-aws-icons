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
    }), _react.default.createElement("title", null, "Engine"), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M83.13,41H80.42c-2,0-3.66,1.11-3.85,3H72.11c-.49-3.78-2-7-3.7-7H61V35.76c0-2.14-.91-3.78-3.05-3.78H53V30h6c.69,0,2-1,2-1.68V25.63H36V28.3A1.92,1.92,0,0,0,37.52,30H44v2H38.58C36.44,32,34,33.62,34,35.76V37H25.8a4.1,4.1,0,0,0-3.8,4.2V53H17V39.83c0-.75-1-1.35-2-1.35s-2,.61-2,1.35v31c0,.75,1,1.36,2,1.36s2-.61,2-1.36V58h5V69.07A3.84,3.84,0,0,0,25.8,73H43c.67,3,1.92,5,3.37,5H68.41c1.9,0,3.48-4,3.81-8H77v.64A3.1,3.1,0,0,0,80.42,74h2.71C85.27,74,87,72.76,87,70.62v-26A3.72,3.72,0,0,0,83.13,41Z",
      fill: "#9d5025"
    }), _react.default.createElement("path", {
      d: "M83.13,38.5H80.42c-2,0-3.66,1.11-3.85,3H72.11c-.49-3.78-2-7-3.7-7H61V33.28c0-2.14-.91-3.78-3.05-3.78H53v-2h6c.69,0,2-1,2-1.68v-.19c0-.69-1.29-1.13-2-1.13H37.52c-.69,0-1.52.43-1.52,1.13v.19a1.92,1.92,0,0,0,1.52,1.68H44v2H38.58c-2.14,0-4.58,1.64-4.58,3.78V34.5H25.8A4.1,4.1,0,0,0,22,38.7V50.5H17V37.35C17,36.6,16,36,15,36s-2,.61-2,1.35v31c0,.75,1,1.36,2,1.36s2-.61,2-1.36V55.5h5V66.59a3.84,3.84,0,0,0,3.8,3.91H43c.67,3,1.92,5,3.37,5H68.41c1.9,0,3.48-4,3.81-8H77v.64a3.1,3.1,0,0,0,3.42,3.36h2.71c2.14,0,3.87-1.22,3.87-3.36v-26A3.72,3.72,0,0,0,83.13,38.5Z",
      fill: "#f58534"
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