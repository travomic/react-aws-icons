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
    }), _react.default.createElement("title", null, "Redshift"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "78.47 23.02 84.17 25.77 84.17 74.08 78.47 76.84 69.45 50 78.47 23.02",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "21.53 23.02 15.84 25.77 15.84 74.08 21.53 76.84 35.77 50 21.53 23.02",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "50 69.89 78.47 76.82 78.47 23.02 50 29.95 50 69.89",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "50 69.89 21.53 76.82 21.53 23.02 50 29.95 50 69.89",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "56.83 87.58 67.72 82.15 67.72 17.85 56.83 12.42 46.02 48.16 56.83 87.58",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "43.17 87.58 32.29 82.15 32.29 17.85 43.17 12.42 52.85 50 43.17 87.58",
      fill: "#205b99"
    }), _react.default.createElement("rect", {
      x: "43.17",
      y: "12.42",
      width: "13.67",
      height: "75.16",
      fill: "#2e73b8"
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