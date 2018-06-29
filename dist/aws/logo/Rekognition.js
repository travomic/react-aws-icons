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
    }), _react.default.createElement("title", null, "Rekognition"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "18.84 63.12 32.35 61.55 32.35 38.45 18.84 36.88 18.84 63.12",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "81.25 38.62 74.98 41.11 39.82 35.63 49.99 9 81.25 38.62",
      fill: "#19486f"
    }), _react.default.createElement("polygon", {
      points: "19.44 38.69 50 21.54 60.23 35.65 32.35 39.98 19.44 38.69",
      fill: "#19486f"
    }), _react.default.createElement("polygon", {
      points: "49.99 33.6 16.04 40.39 16.04 25.97 49.99 9 66.5 27.94 49.99 33.6",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "22.84 25.89 16.04 28.88 16.04 74.03 22.84 77.42 22.84 25.89",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "83.96 25.98 49.99 9 49.99 33.6 83.96 40.39 83.96 25.98",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "17.16 61.54 49.99 91 60.23 64.35 32.35 60.02 17.16 61.54",
      fill: "#99bce3"
    }), _react.default.createElement("polygon", {
      points: "81.67 61.42 75.37 58.83 39.82 64.37 49.99 90.22 81.67 61.42",
      fill: "#99bce3"
    }), _react.default.createElement("polygon", {
      points: "81.25 61.38 67.7 60.02 67.7 39.98 81.25 38.62 81.25 61.38",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "49.99 66.4 64.67 50 49.99 33.6 31.91 50 49.99 66.4",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "68.07 50 49.99 66.4 49.99 33.6 68.07 50",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "16.04 59.61 49.99 66.4 68.63 74.47 49.99 91 16.04 74.03 16.04 59.61",
      fill: "#205b99"
    }), _react.default.createElement("polygon", {
      points: "83.96 74.02 49.99 91 49.99 66.4 83.96 59.61 83.96 74.02",
      fill: "#5294cf"
    }), _react.default.createElement("polygon", {
      points: "77.14 77.42 83.96 74.02 83.96 25.98 77.14 22.57 77.14 77.42",
      fill: "#5294cf"
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