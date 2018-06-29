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
    }), _react.default.createElement("title", null, "Kinesis"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "83.92 54.78 49.93 53.37 15.95 54.78 49.93 70.43 83.92 54.78",
      fill: "#fcbf92"
    }), _react.default.createElement("polygon", {
      points: "15.96 49.97 56.82 49.97 56.82 12.39 50.04 9 15.96 25.99 15.96 49.97",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "84.05 66.88 49.99 61.92 15.96 66.88 50.06 91 84.05 66.88",
      fill: "#fcbf92"
    }), _react.default.createElement("polygon", {
      points: "50.04 49.97 68.02 49.97 68.02 24.39 62.77 22.29 50.04 26 50.04 49.97",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "62.77 49.97 76.66 49.97 76.66 33.38 72.69 32.19 62.77 33.87 62.77 49.97",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "72.69 49.97 83.92 49.97 84.05 30.8 80.64 29.44 72.69 30.88 72.69 49.97",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "56.82 12.39 50.04 9 50.04 49.97 56.82 49.97 56.82 12.39",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "68.02 24.39 62.77 22.29 62.77 49.97 68.02 49.97 68.02 24.39",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "76.66 33.38 72.69 32.19 72.69 49.97 76.66 49.97 76.66 33.38",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "80.64 29.44 84.05 30.8 84.05 49.97 80.64 49.97 80.64 29.44",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "83.92 61.95 49.93 70.43 49.93 58.18 83.92 54.78 83.92 61.95",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "84.05 66.88 49.93 78.91 49.93 91 84.05 73.94 84.05 66.88",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "15.96 66.88 49.93 78.82 49.93 91 15.96 74.02 15.96 66.88",
      fill: "#9d5025"
    }), _react.default.createElement("polygon", {
      points: "15.95 54.78 49.93 58.18 49.93 70.43 15.95 61.95 15.95 54.78",
      fill: "#9d5025"
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