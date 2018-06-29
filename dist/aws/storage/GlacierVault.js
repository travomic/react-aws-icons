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
    }), _react.default.createElement("title", null, "Glacier Vault"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "72.33 23.42 72.33 25.91 27.21 25.91 27.21 23.42 49.77 17.33 72.33 23.42",
      fill: "#8c3123"
    }), _react.default.createElement("rect", {
      x: "26.6",
      y: "31.41",
      width: "46.79",
      height: "51.59",
      fill: "#8c3123"
    }), _react.default.createElement("rect", {
      x: "26.6",
      y: "29.14",
      width: "46.79",
      height: "51.37",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "65.96 17 34.07 17 27.21 23.42 27.7 23.42 72.33 23.42 65.96 17",
      fill: "#e05243"
    }), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M46.19,50.75a6.4,6.4,0,0,1,8.41.7l3.53-1.69v-2S52.78,45.67,50,45.67a61.42,61.42,0,0,0-7,.79v2Z",
      fill: "#8c3123"
    }), _react.default.createElement("path", {
      d: "M56.36,55a6.26,6.26,0,0,1,.06.86c0,3.11-2.56,7.48-5.53,8.05v2a10.57,10.57,0,0,0,9.47-10.37,29.58,29.58,0,0,0-.51-4.22Z",
      fill: "#8c3123"
    }), _react.default.createElement("path", {
      d: "M47.25,61.7v-2a1.77,1.77,0,0,1-1.33,0C44.84,59,43,57.37,43,56.16a8.76,8.76,0,0,1,0-2.25L43.87,52l-3.17-2.28a14.52,14.52,0,0,0-1,5.88,10.54,10.54,0,0,0,7.16,9.92Z",
      fill: "#8c3123"
    })), _react.default.createElement("path", {
      d: "M66.1,47.15l-.87-1.8-11,5.26a5.4,5.4,0,0,0-8.1-.67l-9.38-6.76L35.61,44.8,45,51.57A5.4,5.4,0,0,0,48.23,59l-1,11.2,2,.18,1-11.12a5.39,5.39,0,0,0,4.93-6.83Z",
      fill: "#fff"
    }), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M46.19,48.75a6.4,6.4,0,0,1,8.41.7l3.53-1.69A10.14,10.14,0,0,0,43,46.46Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M56.36,53a6.26,6.26,0,0,1,.06.86,6.41,6.41,0,0,1-5.2,6.29L50.88,64a10.12,10.12,0,0,0,9-12.59Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M47.25,59.7a6.4,6.4,0,0,1-3.66-5.79,6.33,6.33,0,0,1,.29-1.9l-3.17-2.28a10.16,10.16,0,0,0,6.2,13.8Z",
      fill: "#fff"
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