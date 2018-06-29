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
    }), _react.default.createElement("title", null, "Dense Compute Node"), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M72.71,47.1a2,2,0,0,0,2-2V37.81a2,2,0,0,0-2-2H65.42a2,2,0,0,0-1.24.44l-4.5-3.36v-6.3a2,2,0,0,0-2-2H50.4a2,2,0,0,0-2,2v7.29a2,2,0,0,0,.21.87l-6.79,8.06H28.28a3,3,0,0,0-3,3V59.54a3,3,0,0,0,3,3H42a3,3,0,0,0,.76-.11l5.67,5.91a2,2,0,0,0,0,.39V76a2,2,0,0,0,2,2h7.29a2,2,0,0,0,2-2V69.66l4.48-3.38a2,2,0,0,0,1.26.46h7.29a2,2,0,0,0,2-2V57.44a2,2,0,0,0-2-2h-2.4V47.1Zm-8.42,1.32-1.71-3.51.84-.28v.46A2,2,0,0,0,65,47ZM58.88,67.13a2,2,0,0,0-.73-.34l3.09-6.36,2.19.54V63.7Zm-8-31.25H55.4l3.68,7.56L45,48.1V45.82a3,3,0,0,0-.77-2Zm12.5,2.92V42l-1.94.64-3.32-6.83a2,2,0,0,0,.77-.38ZM45,59.54V56.41l13.75,3.41-3.36,6.91h-5l-5.66-5.9A3,3,0,0,0,45,59.54Zm20-4a2,2,0,0,0-1.53,1.94v1l-1.07-.26,1.94-4Zm-5.08,2L45,53.83v-3.1l15.18-5,2.71,5.57Zm7.95-2.08h-.11l-2-4.16,2-4.18h.1Z",
      fill: "#19486f"
    }), _react.default.createElement("path", {
      d: "M72.71,44.62a2,2,0,0,0,2-2V35.33a2,2,0,0,0-2-2H65.42a2,2,0,0,0-1.24.44l-4.5-3.36v-6.3a2,2,0,0,0-2-2H50.4a2,2,0,0,0-2,2V31.4a2,2,0,0,0,.21.87l-6.79,8.06H28.28a3,3,0,0,0-3,3V57.06a3,3,0,0,0,3,3H42a3,3,0,0,0,.76-.11l5.67,5.91a2,2,0,0,0,0,.39v7.29a2,2,0,0,0,2,2h7.29a2,2,0,0,0,2-2V67.18l4.48-3.38a2,2,0,0,0,1.26.46h7.29a2,2,0,0,0,2-2V55a2,2,0,0,0-2-2h-2.4V44.62Zm-8.42,1.32-1.71-3.51.84-.28v.46A2,2,0,0,0,65,44.56ZM58.88,64.65a2,2,0,0,0-.73-.34L61.23,58l2.19.54v2.73Zm-8-31.25H55.4L59.08,41,45,45.62V43.34a3,3,0,0,0-.77-2Zm12.5,2.92v3.21l-1.94.64-3.32-6.83a2,2,0,0,0,.77-.38ZM45,57.06V53.93l13.75,3.41-3.36,6.91h-5l-5.66-5.9A3,3,0,0,0,45,57.06Zm20-4A2,2,0,0,0,63.42,55v1l-1.07-.26,1.94-4Zm-5.08,2L45,51.35v-3.1l15.18-5L62.9,48.8ZM67.82,53h-.11l-2-4.16,2-4.18h.1Z",
      fill: "#2e73b8"
    }), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M55.5,53.5a4,4,0,0,1-4,4h-18a4,4,0,0,1-4-4v-6a4,4,0,0,1,4-4h18a4,4,0,0,1,4,4Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M51.5,58h-18A4.5,4.5,0,0,1,29,53.5v-6A4.5,4.5,0,0,1,33.5,43h18A4.5,4.5,0,0,1,56,47.5v6A4.5,4.5,0,0,1,51.5,58Zm-18-14A3.5,3.5,0,0,0,30,47.5v6A3.5,3.5,0,0,0,33.5,57h18A3.5,3.5,0,0,0,55,53.5v-6A3.5,3.5,0,0,0,51.5,44Z",
      fill: "#19486f"
    })), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M36.3,46.17h2.86c2.43,0,2.86,1.66,2.86,4.21,0,3.07-.65,4.45-3,4.45H36.3ZM38,53.54h.78c1.21,0,1.45-.76,1.45-3.12,0-2-.16-3-1.49-3H38Z",
      fill: "#2e73b8"
    }), _react.default.createElement("path", {
      d: "M46.88,49.09c0-1.26-.25-1.81-1-1.81s-1.09.89-1.09,3.34c0,2.62.36,3.09,1.12,3.09S47,53.39,47,51.52H48.7c0,1.87-.46,3.48-2.75,3.48C43.33,55,43,53.13,43,50.5s.33-4.5,2.95-4.5,2.68,1.83,2.68,3.09Z",
      fill: "#2e73b8"
    })))) // -- END of generated content.

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