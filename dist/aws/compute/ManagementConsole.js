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
    }), _react.default.createElement("title", null, "Management Console"), _react.default.createElement("path", {
      d: "M71.68,70.3H54.07A1.7,1.7,0,0,0,52.36,72h21A1.69,1.69,0,0,0,71.68,70.3Z",
      fill: "none"
    }), _react.default.createElement("path", {
      d: "M54.07,73.68H71.68A1.69,1.69,0,0,0,73.37,72h-21A1.7,1.7,0,0,0,54.07,73.68Z",
      fill: "none"
    }), _react.default.createElement("path", {
      d: "M73.37,72a1.69,1.69,0,0,1-1.69,1.69H54.07A1.7,1.7,0,0,1,52.36,72H22.2v1.69a4.23,4.23,0,0,0,4.23,4.23H73.55a4.24,4.24,0,0,0,4.25-4.23V72Z",
      fill: "#9d5125"
    }), _react.default.createElement("path", {
      d: "M75.94,51.88l-2.73,3a1.93,1.93,0,0,1-1.93,1.92H28.66a1.93,1.93,0,0,1-1.92-1.92l-2.3-3H22.24v3a6.41,6.41,0,0,0,6.42,6.39H71.28a6.42,6.42,0,0,0,6.43-6.39v-3Z",
      fill: "#9d5125"
    }), _react.default.createElement("path", {
      d: "M73.55,63.59a4.22,4.22,0,0,1,4.25,4.21V71.2a4.24,4.24,0,0,1-4.25,4.23H26.44A4.23,4.23,0,0,1,22.2,71.2V67.81a4.22,4.22,0,0,1,4.23-4.21ZM71.68,71.2a1.69,1.69,0,1,0,0-3.38H54.07a1.69,1.69,0,1,0,0,3.38H71.68",
      fill: "#f58535"
    }), _react.default.createElement("path", {
      d: "M71.28,22.15a6.42,6.42,0,0,1,6.43,6.38V52.39a6.42,6.42,0,0,1-6.43,6.39H28.66a6.41,6.41,0,0,1-6.42-6.39V28.54a6.41,6.41,0,0,1,6.42-6.38Zm1.93,30.24V28.54a1.92,1.92,0,0,0-1.93-1.92H28.66a1.92,1.92,0,0,0-1.92,1.92V52.39a1.93,1.93,0,0,0,1.92,1.92H71.28a1.93,1.93,0,0,0,1.93-1.92",
      fill: "#f58535"
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