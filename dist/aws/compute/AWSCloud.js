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
    }), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      fill: "#F7981F",
      points: "27.09,35.764 25.984,40.34 28.182,40.34 27.115,35.764 \t"
    }), _react.default.createElement("path", {
      fill: "#F7981F",
      d: "M16.302,40.744v0.666c0,3.311,3.579,6.66,7.991,6.66h23.533c4.412,0,7.991-3.35,7.991-6.66v-0.666 c0-3.078-3.098-6.943-7.081-7.283c-0.089-2.752-2.342-4.955-5.113-4.955c-1.076,0-2.074,0.334-2.898,0.9 c-1.58-3.52-5.107-5.977-9.216-5.977c-5.579,0-10.101,4.521-10.101,10.102c0,0.1,0.012,0.195,0.015,0.293 C18.43,34.691,16.302,38.195,16.302,40.744z M29.001,43.799l-0.572-2.275h-2.717l-0.599,2.275h-1.547l2.639-9.283h1.898 l2.444,9.283H29.001z M38.013,43.799h-1.716l-1.196-6.994h-0.026l-1.183,6.994h-1.716l-1.795-9.283h1.496l1.221,7.215h0.027 l1.221-7.215h1.561l1.248,7.254h0.026l1.209-7.254h1.469L38.013,43.799z M43.446,43.98c-2.301,0-2.821-1.533-2.821-2.834v-0.221 h1.482v0.234c0,1.131,0.494,1.703,1.521,1.703c0.936,0,1.403-0.664,1.403-1.354c0-0.975-0.493-1.404-1.325-1.65l-1.015-0.352 c-1.353-0.52-1.937-1.221-1.937-2.547c0-1.691,1.144-2.627,2.886-2.627c2.379,0,2.626,1.482,2.626,2.443v0.209h-1.482v-0.195 c0-0.846-0.377-1.34-1.3-1.34c-0.637,0-1.248,0.352-1.248,1.34c0,0.793,0.403,1.195,1.392,1.572l1,0.365 c1.313,0.467,1.886,1.184,1.886,2.457C46.515,43.162,45.318,43.98,43.446,43.98z"
    }), _react.default.createElement("path", {
      fill: "#FFFFFF",
      d: "M26.205,34.516l-2.639,9.283h1.547l0.599-2.275h2.717l0.572,2.275h1.547l-2.444-9.283H26.205z M25.984,40.34l1.105-4.576h0.025l1.066,4.576H25.984z"
    }), _react.default.createElement("polygon", {
      fill: "#FFFFFF",
      points: "37.181,41.77 37.154,41.77 35.906,34.516 34.346,34.516 33.125,41.73 33.098,41.73 31.877,34.516  30.381,34.516 32.176,43.799 33.892,43.799 35.074,36.805 35.101,36.805 36.297,43.799 38.013,43.799 39.858,34.516 38.39,34.516 \t "
    }), _react.default.createElement("path", {
      fill: "#FFFFFF",
      d: "M44.629,38.729l-1-0.365c-0.988-0.377-1.392-0.779-1.392-1.572c0-0.988,0.611-1.34,1.248-1.34 c0.923,0,1.3,0.494,1.3,1.34v0.195h1.482v-0.209c0-0.961-0.247-2.443-2.626-2.443c-1.742,0-2.886,0.936-2.886,2.627 c0,1.326,0.584,2.027,1.937,2.547l1.015,0.352c0.832,0.246,1.325,0.676,1.325,1.65c0,0.689-0.468,1.354-1.403,1.354 c-1.027,0-1.521-0.572-1.521-1.703v-0.234h-1.482v0.221c0,1.301,0.521,2.834,2.821,2.834c1.872,0,3.068-0.818,3.068-2.795 C46.515,39.912,45.942,39.195,44.629,38.729z"
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