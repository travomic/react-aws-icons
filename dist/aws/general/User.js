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
    }), _react.default.createElement("title", null, "User"), _react.default.createElement("path", {
      d: "M50,24.51l11.78,9.2v2.48a11.77,11.77,0,0,1-23.54,0V33.71Z",
      fill: "#7d7c7c"
    }), _react.default.createElement("path", {
      d: "M56.73,51.22c7.44,0,13.45,4.51,13.45,11.87V77.93H62.43V67.52H61.11V77.93H39.19V67.52H37.86V77.93h-8V63.09c0-7.36,6-11.87,13.46-11.87Z",
      fill: "#7d7c7c"
    }), _react.default.createElement("path", {
      d: "M50,22A11.68,11.68,0,1,1,38.23,33.71,11.73,11.73,0,0,1,50,22Z",
      fill: "#d2d3d3"
    }), _react.default.createElement("path", {
      d: "M56.73,48.74c7.44,0,13.45,4.51,13.45,11.87V75.45H62.43V65H61.11V75.45H39.19V65H37.86V75.45h-8V60.61c0-7.36,6-11.87,13.46-11.87Z",
      fill: "#d2d3d3"
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