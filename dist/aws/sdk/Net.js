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
    }), _react.default.createElement("title", null, "Net"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "49.98 85.98 81.72 67.95 81.72 31.98 49.98 49.96 49.98 85.98",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "18.3 67.94 50 85.94 50 49.97 18.3 32.01 18.3 67.94",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "81.5 31.98 50 14.13 18.5 31.98 50 49.86 81.5 31.98",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "50 48.8 79.67 32 79.64 31.98 50 48.8 50 48.8",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "20.36 31.98 20.33 32 50 48.8 50 48.8 20.36 31.98",
      fill: "#fff"
    }), _react.default.createElement("circle", {
      cx: "50",
      cy: "48.8",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M81.66,30.83,50,12.89,18.34,30.83l-1,.59V68.54l31.7,18,1,.57,1-.57,31.7-18V31.41Zm-1,36.55L51,84.24V50.54L80.7,33.71ZM49,84.24,19.3,67.37V33.71L49,50.54ZM20.36,32,50,15.19,79.64,32l0,0L50,48.8h0L20.33,32Z",
      fill: "#444"
    }), _react.default.createElement("polygon", {
      points: "50.13 69.39 67.18 59.72 67.18 40.41 50.13 50.07 50.13 69.39",
      fill: "#115193"
    }), _react.default.createElement("polygon", {
      points: "32.82 59.72 49.87 69.39 49.87 50.07 32.82 40.41 32.82 59.72",
      fill: "#115193"
    }), _react.default.createElement("polygon", {
      points: "67 40.15 50 30.52 33 40.15 50 49.81 67 40.15",
      fill: "#115193"
    }), _react.default.createElement("polygon", {
      points: "50 48.83 65.29 40.17 65.27 40.15 50 48.82 50 48.83",
      fill: "#96bf3d"
    }), _react.default.createElement("polygon", {
      points: "34.73 40.15 34.71 40.17 50 48.83 50 48.82 34.73 40.15",
      fill: "#96bf3d"
    }), _react.default.createElement("circle", {
      cx: "50",
      cy: "48.82",
      fill: "#96bf3d"
    }), _react.default.createElement("path", {
      d: "M67.3,39,50,29.21,32.7,39l-1,.58V60.39L49,70.22l1,.57,1-.57,17.32-9.83V39.58Zm-1,20.22L51,67.92V50.56l15.32-8.68ZM49,67.92l-15.32-8.7V41.88L49,50.56ZM34.73,40.15,50,31.51l15.27,8.65h0L50,48.82h0L34.71,40.17Z",
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