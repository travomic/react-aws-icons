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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Shadow"), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M61.92,24.91l-3.7,2.53-1.83-4.07A17.51,17.51,0,0,0,40.45,13.1,17.46,17.46,0,0,0,23,30.59l.07,3.24-2.75.79c-4.46,1.28-8.05,7-8.05,10.86v1.39c0,4.7,5.7,10.17,13,10.17H74.7c7.34,0,13-5.47,13-10.17V45.49c0-4.73-5.28-11-11.44-11.49L73,33.72l-.11-3.3a7,7,0,0,0-11-5.51Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M61.92,21.91l-3.7,2.53-1.83-4.07A17.51,17.51,0,0,0,40.45,10.1,17.46,17.46,0,0,0,23,27.59l.07,3.24-2.75.79c-4.46,1.28-8.05,7-8.05,10.86v1.39c0,4.7,5.7,10.17,13,10.17H74.7c7.34,0,13-5.47,13-10.17V42.49c0-4.73-5.28-11-11.44-11.49L73,30.72l-.11-3.3a7,7,0,0,0-11-5.51Z"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#19486f"
      },
      x: "20.07",
      y: "67.73",
      width: "58",
      height: "22.17"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "20.07",
      y: "64.73",
      width: "58",
      height: "22.17"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "27.07",
      y: "70.73",
      width: "9.67",
      height: "9.67",
      rx: "4.83",
      ry: "4.83"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "55.24 80.39 42.74 80.39 48.99 70.73 55.24 80.39"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "61.24",
      y: "70.73",
      width: "9.67",
      height: "9.67"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "23.9",
      y: "33.44",
      width: "50",
      height: "15.75"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "27.07",
      y: "36.4",
      width: "9.67",
      height: "9.67",
      rx: "4.83",
      ry: "4.83"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "55.24 46.06 42.74 46.06 48.99 36.4 55.24 46.06"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "61.24",
      y: "36.4",
      width: "9.67",
      height: "9.67"
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