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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Temporary Credential"), _react.default.createElement("rect", {
      style: {
        "fill": "#7d7c7c"
      },
      x: "20.15",
      y: "25.76",
      width: "53",
      height: "39.92",
      rx: "6.21",
      ry: "6.21"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "20.15",
      y: "23.28",
      width: "53",
      height: "39.92",
      rx: "6.21",
      ry: "6.21"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#759c3e"
      },
      cx: "59.9",
      cy: "36",
      r: "9.53"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#fff"
      },
      cx: "64.07",
      cy: "36",
      r: "2.49"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "56.67 40.05 45.65 40.05 44.65 38.31 40.92 38.66 39.49 37.19 38.18 36.91 34.78 38.94 30.56 35.7 32.88 31.95 56.67 31.95 56.67 40.05"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#7d7c7c"
      },
      cx: "33.4",
      cy: "50.66",
      r: "9.53"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#fff"
      },
      cx: "29.23",
      cy: "50.66",
      r: "2.49"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#7d7c7c"
      },
      points: "36.63 46.61 47.65 46.61 48.65 48.35 52.38 48 53.81 49.47 55.12 49.75 58.52 47.72 62.74 50.96 60.42 54.71 36.63 54.71 36.63 46.61"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#fff"
      },
      cx: "65.35",
      cy: "62.22",
      r: "13"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#4f4f4f"
      },
      d: "M65.35,76.72a14.5,14.5,0,1,1,14.5-14.5A14.52,14.52,0,0,1,65.35,76.72Zm0-26a11.5,11.5,0,1,0,11.5,11.5A11.51,11.51,0,0,0,65.35,50.72Z"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4f4f4f"
      },
      x: "59.34",
      y: "61.72",
      width: "7.01",
      height: "3"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4f4f4f"
      },
      x: "64.85",
      y: "53.16",
      width: "3",
      height: "11.56"
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