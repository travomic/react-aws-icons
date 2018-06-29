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
    }), _react.default.createElement("title", null, "IAM"), _react.default.createElement("g", null, _react.default.createElement("circle", {
      cx: "38.81",
      cy: "51.24",
      r: "10.76",
      fill: "#4b612c"
    }), _react.default.createElement("polygon", {
      points: "42.45 46.67 54.91 46.67 56.03 48.63 60.24 48.23 61.86 49.89 63.34 50.22 71.95 49.1 71.95 51.58 69.33 55.81 42.45 55.81 42.45 46.67",
      fill: "#4b612c"
    }), _react.default.createElement("rect", {
      x: "28.05",
      y: "48.76",
      width: "10.36",
      height: "2.81",
      fill: "#4b612c"
    }), _react.default.createElement("circle", {
      cx: "38.81",
      cy: "48.76",
      r: "10.76",
      fill: "#759c3e"
    }), _react.default.createElement("circle", {
      cx: "34.1",
      cy: "48.76",
      r: "2.81",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "42.45 44.19 54.91 44.19 56.03 46.15 60.24 45.76 61.86 47.41 63.34 47.74 67.18 45.44 71.95 49.1 69.33 53.33 42.45 53.33 42.45 44.19",
      fill: "#759c3e"
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