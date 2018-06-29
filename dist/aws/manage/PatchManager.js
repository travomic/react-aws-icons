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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Patch Manager"), _react.default.createElement("path", {
      style: {
        "fill": "#4b612c"
      },
      d: "M54.81,79.33l-31.65-22,22-31.65,31.65,22Zm-28-22.69,27.31,19,19-27.31-27.31-19Z"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "21.13",
      y: "46.34",
      width: "14.48",
      height: "2.64"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "25.3",
      y: "40.26",
      width: "14.48",
      height: "2.64"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "29.46",
      y: "34.19",
      width: "14.48",
      height: "2.64"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "53.51",
      y: "23.52",
      width: "2.64",
      height: "14.48"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "59.58",
      y: "27.75",
      width: "2.64",
      height: "14.48"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "65.66",
      y: "31.98",
      width: "2.64",
      height: "14.48"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "64.38",
      y: "56.01",
      width: "14.48",
      height: "2.64"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "60.22",
      y: "62.08",
      width: "14.48",
      height: "2.64"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "56.05",
      y: "68.15",
      width: "14.48",
      height: "2.64"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "43.84",
      y: "66.98",
      width: "2.64",
      height: "14.48"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "37.77",
      y: "62.76",
      width: "2.64",
      height: "14.48"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "31.7",
      y: "58.53",
      width: "2.64",
      height: "14.48"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#759c3e"
      },
      x: "30.72",
      y: "30.73",
      width: "38.56",
      height: "38.56",
      transform: "translate(-19.61 62.47) rotate(-55.15)"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "47.18 34.35 37.42 34.35 39.26 31.71 47.18 31.71 47.18 34.35"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "29.46 31.71 39.22 31.71 37.38 34.35 29.46 34.35 29.46 31.71"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "25.3 37.78 35.06 37.78 33.21 40.42 25.3 40.42 25.3 37.78"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "21.13 43.85 30.89 43.85 29.05 46.49 21.13 46.49 21.13 43.85"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "42.95 40.42 33.19 40.42 35.04 37.78 42.95 37.78 42.95 40.42"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "38.73 46.49 28.97 46.49 30.81 43.85 38.73 43.85 38.73 46.49"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "34.34 52.83 34.34 62.59 31.7 60.75 31.7 52.83 34.34 52.83"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "40.41 57.05 40.41 66.81 37.77 64.97 37.77 57.05 40.41 57.05"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "46.49 61.28 46.49 71.04 43.84 69.2 43.84 61.28 46.49 61.28"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "52.82 65.66 62.58 65.66 60.74 68.31 52.82 68.31 52.82 65.66"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "57.05 59.59 66.81 59.59 64.96 62.24 57.05 62.24 57.05 59.59"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "61.27 53.52 71.03 53.52 69.19 56.17 61.27 56.17 61.27 53.52"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "56.16 21.04 56.16 30.8 53.51 28.95 53.51 21.04 56.16 21.04"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "62.23 25.3 62.23 35.06 59.59 33.22 59.59 25.3 62.23 25.3"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "68.3 29.57 68.3 39.33 65.66 37.49 65.66 29.57 68.3 29.57"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "70.54 68.31 60.77 68.31 62.62 65.67 70.54 65.67 70.54 68.31"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "74.7 62.24 64.94 62.24 66.78 59.59 74.7 59.59 74.7 62.24"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "78.87 56.17 69.11 56.17 70.95 53.52 78.87 53.52 78.87 56.17"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "43.84 78.98 43.84 69.22 46.49 71.06 46.49 78.98 43.84 78.98"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "37.77 74.71 37.77 64.95 40.41 66.8 40.41 74.71 37.77 74.71"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "31.7 70.45 31.7 60.69 34.34 62.53 34.34 70.45 31.7 70.45"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "65.66 47.19 65.66 37.43 68.3 39.27 68.3 47.19 65.66 47.19"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "59.59 42.96 59.59 33.2 62.23 35.05 62.23 42.96 59.59 42.96"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "53.51 38.74 53.51 28.98 56.16 30.82 56.16 38.74 53.51 38.74"
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