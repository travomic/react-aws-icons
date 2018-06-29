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
    }), _react.default.createElement("title", null, "Glacier"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "21.51 23.25 16.03 25.98 16.03 74.02 21.51 76.75 34.38 50 21.51 23.25",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "50 69.84 78.49 76.75 83.22 50 78.49 23.25 50 30.14 50 69.84",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "78.49 23.25 83.97 25.98 83.97 74.02 78.49 76.75 78.49 23.25",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "50 69.84 21.51 76.75 21.51 23.25 50 30.14 50 69.84",
      fill: "#e05243"
    }), _react.default.createElement("polygon", {
      points: "50 91 61.74 51.63 50 9 37.58 15.21 37.58 84.79 50 91",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "50 91 50 9 62.42 15.21 62.42 84.79 50 91",
      fill: "#e05243"
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