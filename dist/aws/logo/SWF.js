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
    }), _react.default.createElement("title", null, "SWF"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "45.16 68.06 79.75 76.29 84.1 74.11 84.1 25.89 79.75 23.71 45.16 31.82 45.16 68.06",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "45.16 25.26 45.16 74.81 68.15 82.09 74.52 78.9 74.52 21.1 68.15 17.91 45.16 25.26",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "74.52 78.9 68.15 82.09 68.15 17.91 74.52 21.1 74.52 78.9",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "84.1 74.11 79.75 76.29 79.75 23.71 84.1 25.89 84.1 74.11",
      fill: "#d9a741"
    }), _react.default.createElement("path", {
      d: "M50,8.84,15.9,25.89l0,48.23L50,91.16l10.2-5.1V13.94Zm-10.2,58L29.66,64.45V35.55L39.8,33.19Z",
      fill: "#876929"
    }), _react.default.createElement("polygon", {
      points: "20.26 65.78 39.79 71.64 39.8 66.81 29.66 64.45 20.26 65.78",
      fill: "#fad791"
    }), _react.default.createElement("polygon", {
      points: "29.66 64.45 20.26 65.78 20.26 34.23 29.66 35.55 29.66 64.45",
      fill: "#d9a741"
    }), _react.default.createElement("polygon", {
      points: "39.8 33.19 29.66 35.55 20.26 34.23 39.8 28.36 39.8 33.19",
      fill: "#624a1e"
    }), _react.default.createElement("polygon", {
      points: "60.2 86.06 50 91.16 50 8.84 60.2 13.94 60.2 86.06",
      fill: "#d9a741"
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