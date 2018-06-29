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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Batch"), _react.default.createElement("polygon", {
      style: {
        "fill": "#6b3a19"
      },
      points: "24.47 43.1 34.09 28.7 45.9 42.89 35.74 43.82 24.47 43.1"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fbbf93"
      },
      points: "46.97 56.9 36.78 56.01 24.47 56.78 34.09 71.16 46.97 56.9"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "34.09 71.16 24.47 68.08 24.47 56.78 34.09 57.94 54.61 61.91 34.09 71.16"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "71.42 54.91 34.09 57.94 34.09 71.16 71.42 63.09 71.42 54.91"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fbbf93"
      },
      points: "83.97 64.39 71.08 62.79 35.58 70.25 50 91 83.97 64.39"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "34.09 41.92 24.47 43.1 24.47 31.8 34.09 28.7 58.97 39.18 34.09 41.92"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "22.83 55.48 16.03 54.8 16.03 45.2 22.83 44.52 46.68 50 22.83 55.48"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "53.94 53.92 22.83 55.48 22.83 44.52 53.94 46.08 53.94 53.92"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "75.13 45.31 34.09 41.92 34.09 28.7 75.13 37.63 75.13 45.31"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#6b3a19"
      },
      points: "83.97 35.59 71.08 37.19 35.58 29.73 50 9 83.97 35.59"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#6b3a19"
      },
      points: "83.97 48.55 71.08 48.71 35.58 47.96 50 31.12 83.97 48.55"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fbbf93"
      },
      points: "83.97 51.43 71.08 51.27 35.58 52.01 50 68.84 83.97 51.43"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "50 25.4 35.58 29.73 35.58 16.21 50 9 77.9 27.13 50 25.4"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "83.97 25.98 50 9 50 25.4 83.97 35.59 83.97 25.98"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "50 47.52 35.58 47.96 35.58 34.44 50 31.12 77.9 43.1 50 47.52"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "83.97 48.55 50 47.52 50 31.12 83.97 38.94 83.97 48.55"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "50 68.84 35.58 65.53 35.58 52.01 50 52.44 77.9 58.35 50 68.84"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "50 52.44 83.97 51.43 83.97 61.04 50 68.84 50 52.44"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "50 90.97 35.58 83.76 35.58 70.25 50 74.56 79.52 72.21 50 90.97"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "83.97 74.02 50 91 50 74.56 83.97 64.39 83.97 74.02"
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