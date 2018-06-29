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
    }), _react.default.createElement("title", null, "Search Documents"), _react.default.createElement("g", null, _react.default.createElement("g", {
      style: {
        "isolation": " isolate"
      }
    }, _react.default.createElement("rect", {
      x: "27.98",
      y: "21",
      width: "44",
      height: "56",
      fill: "#9d5125"
    })), _react.default.createElement("path", {
      d: "M28,21V74.65H72V21Z",
      fill: "#f58534"
    }), _react.default.createElement("polygon", {
      points: "24 34.93 30.75 42.42 24 49.92 24 34.93",
      fill: "#f58534"
    }), _react.default.createElement("path", {
      d: "M23,52.52V32.33l9.1,10.09Zm2-15v9.78l4.4-4.89Z",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "76 49.92 69.25 42.42 76 34.93 76 49.92",
      fill: "#f58534"
    }), _react.default.createElement("path", {
      d: "M77,52.52,67.9,42.42,77,32.33ZM70.6,42.42,75,47.31V37.54Z",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "33",
      y: "26.33",
      width: "34",
      height: "5",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "33",
      y: "33.93",
      width: "34",
      height: "5",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "33",
      y: "41.53",
      width: "34",
      height: "5",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "33",
      y: "49.13",
      width: "34",
      height: "5",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "33",
      y: "56.73",
      width: "34",
      height: "5",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "33",
      y: "64.33",
      width: "34",
      height: "5",
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