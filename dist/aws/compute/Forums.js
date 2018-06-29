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
    }), _react.default.createElement("title", null, "Forums"), _react.default.createElement("polygon", {
      points: "11.76 29.37 88.24 29.37 88.24 26.86 50 16.88 11.76 26.86 11.76 29.37",
      fill: "#9d5125"
    }), _react.default.createElement("rect", {
      x: "11.76",
      y: "13.23",
      width: "76.48",
      height: "13.63",
      fill: "#f58535"
    }), _react.default.createElement("polygon", {
      points: "11.76 48.5 88.24 48.5 88.24 46 50 36.01 11.76 46 11.76 48.5",
      fill: "#9d5125"
    }), _react.default.createElement("rect", {
      x: "11.76",
      y: "32.36",
      width: "76.48",
      height: "13.63",
      fill: "#f58535"
    }), _react.default.createElement("polygon", {
      points: "11.76 67.64 88.24 67.64 88.24 65.13 50 55.15 11.76 65.13 11.76 67.64",
      fill: "#9d5125"
    }), _react.default.createElement("rect", {
      x: "11.76",
      y: "51.5",
      width: "76.48",
      height: "13.63",
      fill: "#f58535"
    }), _react.default.createElement("polygon", {
      points: "11.76 86.77 88.24 86.77 88.24 84.27 50 74.28 11.76 84.27 11.76 86.77",
      fill: "#9d5125"
    }), _react.default.createElement("rect", {
      x: "11.76",
      y: "70.63",
      width: "76.48",
      height: "13.63",
      fill: "#f58535"
    }), _react.default.createElement("rect", {
      x: "26.49",
      y: "16.1",
      width: "58.86",
      height: "7.88",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "14.65",
      y: "35.23",
      width: "58.86",
      height: "7.88",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "26.49",
      y: "54.37",
      width: "58.86",
      height: "7.88",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "14.65",
      y: "73.5",
      width: "58.86",
      height: "7.88",
      fill: "#fff"
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