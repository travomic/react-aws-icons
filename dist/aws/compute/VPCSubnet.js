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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      width: size,
      size: size
    }, otherProps, {
      height: size,
      viewBox: "0 0 70 70"
    }), _react.default.createElement("g", null, _react.default.createElement("rect", {
      x: "29.544",
      y: "30.692",
      fill: "#262261",
      width: "2.668",
      height: "8.715"
    }), _react.default.createElement("rect", {
      x: "26.701",
      y: "34.904",
      fill: "#262261",
      width: "16.598",
      height: "9.296"
    }), _react.default.createElement("path", {
      fill: "#262261",
      d: "M29.544,30.71c0.281-2.772,2.65-4.91,5.496-4.91c2.838,0,5.205,2.148,5.495,4.91h-2.668 c0,0-0.12-2.554-2.828-2.562c-2.828-0.009-2.827,2.562-2.827,2.562H29.544z"
    }), _react.default.createElement("g", null, _react.default.createElement("rect", {
      x: "37.867",
      y: "30.692",
      fill: "#262261",
      width: "2.668",
      height: "8.715"
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