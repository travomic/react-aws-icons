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
    }), _react.default.createElement("title", null, "Kinesis Firehose"), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M32.62,23.8H67.38a9.12,9.12,0,0,1,9.12,9.12V48.22c-1.8-.93-5.74-1.92-11.57-1.92a42.35,42.35,0,0,0-6.67.5c-3.93.65-6,1.77-6,2.46v26c0,.43.59,1,1.71,1.56H32.62a9.12,9.12,0,0,1-9.12-9.12V32.92A9.12,9.12,0,0,1,32.62,23.8Z",
      fill: "#9d5025"
    }), _react.default.createElement("path", {
      d: "M32.62,21.6H67.38a9.12,9.12,0,0,1,9.12,9.12V46c-1.8-.93-5.74-1.92-11.57-1.92a42.35,42.35,0,0,0-6.67.5c-3.93.65-6,1.77-6,2.46V73c0,.43.59,1,1.71,1.56H32.62a9.12,9.12,0,0,1-9.12-9.12V30.72A9.12,9.12,0,0,1,32.62,21.6Z",
      fill: "#f58534"
    }), _react.default.createElement("path", {
      d: "M65.85,51.08a35.53,35.53,0,0,0-5.6.42,16.49,16.49,0,0,1-5-.44v2.5c0,.58,1.75,1.52,5,2.05a33.94,33.94,0,0,0,5.6.42c6.9,0,10.65-1.63,10.65-2.47v-2.5Z",
      fill: "#9d5025"
    }), _react.default.createElement("path", {
      d: "M55,58.42l0,17.1C55,76.38,58,78,65.15,78a32.25,32.25,0,0,0,8.79-1c1.42-.46,2.43-1,2.54-1.37v-17c-2.08,1.29-6.37,2-10.63,2h-.28l-1.31,0h-.18L63,60.44l-.54,0-.84-.07-.45-.07-.9-.12A14.26,14.26,0,0,1,55,58.42Z",
      fill: "#9d5025"
    }), _react.default.createElement("path", {
      d: "M65.85,48.59a35.53,35.53,0,0,0-5.6.42c-3.3.55-5,1.49-5,2.06s1.75,1.52,5,2.05a33.94,33.94,0,0,0,5.6.42c6.9,0,10.65-1.63,10.65-2.47S72.75,48.59,65.85,48.59Z",
      fill: "#f58534"
    }), _react.default.createElement("path", {
      d: "M55,55.92,55,73c0,.87,3,2.47,10.12,2.47a32.25,32.25,0,0,0,8.79-1c1.42-.46,2.43-1,2.54-1.37v-17c-2.08,1.29-6.37,2-10.63,2h-.28l-1.31,0h-.18L63,57.94l-.54,0-.84-.07-.45-.07-.9-.12A14.26,14.26,0,0,1,55,55.92Z",
      fill: "#f58534"
    }), _react.default.createElement("path", {
      d: "M32.62,74.6H53.95v2.2H32.62a9.12,9.12,0,0,1-9.12-9.12v-2.2A9.12,9.12,0,0,0,32.62,74.6Z",
      fill: "#9d5025"
    }), _react.default.createElement("path", {
      d: "M66.68,33l-8-8v4H46.19V43H58.66v1.54c.86-.13,1.8-.24,2.82-.31L69.69,36Z",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "28.54 33 28.54 43 42.34 43 42.34 33 42.34 28.97 28.54 28.97 28.54 33",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "32.39 56.63 32.39 66.63 46.19 66.63 46.19 56.63 46.19 52.6 32.39 52.6 32.39 56.63",
      fill: "#fff"
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