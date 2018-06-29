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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Dynamo DBAccelerator"), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M82,59.3V51.63l-2.69,0V48.39l2.68,0V40.88l-2.68-1.4v-1.8L82,37.44V29.81L74,21h0L59.61,13.83H39.53L25.05,21v0h0l-7,8.8v7.65l2,.23v1.84l-2,1.19v7.65l2,0v3.21l-2,0v7.62l2,1.2v1.86l-2,.24,0,7.62,7,8.81h0v0l14.46,7.18h20.1L74,79h0l8-8.81v-7.6l-2.68-.26V60.64Zm-23.22-2L43.43,75.65l3-15.81-6.52-2,6.34-12.29-5.9-2.8L55.74,24.32l-3,15.81,6.52,2L52.89,54.47Z"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#205b99"
      },
      points: "25.08 67.97 25.08 79 39.52 86.17 39.54 72.43 25.08 67.97"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#205b99"
      },
      points: "39.52 27.21 39.52 13.83 25.05 20.99 25.08 32 39.52 27.21"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#99bce3"
      },
      points: "46.29 45.51 43.68 45.97 39.53 46.69 35.93 42.28 40.39 42.71 46.29 45.51"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#99bce3"
      },
      points: "44.03 63.65 46.46 59.84 39.95 57.79 35.91 61.09 39.54 65.33 44.03 63.65"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#205b99"
      },
      points: "52.71 40.13 55.3 36.41 58.48 35.82 55.91 33.24 57.06 27.21 59.18 26.53 59.61 13.92 55.74 24.32 52.71 40.13"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#205b99"
      },
      points: "55.65 53.69 52.88 54.47 59.23 42.18 63.28 38.9 66.23 45.48 58.94 47.31 55.83 53.34 57.68 54.05 55.65 53.69"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#205b99"
      },
      points: "58.78 57.26 63.55 57.51 59.62 66.4 56.09 66.4 51.03 72.43 53.96 83.5 39.54 86.11 43.43 75.65 58.78 57.26"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "55.3 36.41 59.61 37.77 59.61 33.24 55.91 33.24 55.3 36.41"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "42.99 47.31 43.68 45.97 39.52 44 39.52 47.31 39.63 47.31 42.99 47.31"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "55.63 53.7 59.61 55.62 59.61 53.34 55.81 53.34 55.63 53.7"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "44.03 63.65 39.52 62.24 39.52 66.4 43.48 66.4 44.03 63.65"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "43.47 33.24 39.52 33.24 39.52 37.97 43.47 33.24"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "39.52 72.43 39.52 86.12 42.27 72.43 39.52 72.43"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "59.61 66.4 59.61 62.21 56.09 66.4 59.61 66.4"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "59.61 27.21 59.61 13.92 57.06 27.21 59.61 27.21"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "39.52 86.12 39.52 86.17 59.61 86.17 59.61 72.43 51.03 72.43 39.52 86.12"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "39.52 27.21 48.5 27.21 59.61 13.91 59.61 13.83 39.52 13.83 39.52 27.21"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#5294cf"
      },
      points: "59.62 55.62 63.55 57.51 59.62 62.2 59.62 66.4 73.94 63.31 73.95 63.3 73.95 52.3 59.62 53.34 59.62 55.62"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#5294cf"
      },
      points: "59.62 13.83 59.61 13.83 59.62 13.9 59.62 27.21 73.95 31.84 73.95 31.84 73.95 20.99 59.62 13.83"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#5294cf"
      },
      points: "59.62 37.77 63.26 38.91 59.62 45.97 58.92 47.31 59.61 47.31 59.62 47.31 73.95 47.77 73.95 36.62 59.62 33.24 59.62 37.77"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#5294cf"
      },
      points: "59.62 86.17 73.95 78.99 73.95 67.99 59.62 72.43 59.62 86.17"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "73.95 63.3 82 59.3 82 51.63 73.95 52.3 73.95 63.3"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "81.99 37.47 81.99 29.82 73.95 20.99 73.95 31.85 81.99 37.47"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "73.95 36.62 73.95 47.77 81.99 48.37 81.99 40.88 73.95 36.62"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "73.95 78.99 81.99 70.22 81.99 62.58 73.95 67.99 73.95 78.99"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#205b99"
      },
      points: "25.49 63.31 33.38 65.05 39.52 66.4 39.52 62.24 35.91 61.09 39.53 54.07 39.91 53.34 39.53 53.34 29.75 52.63 25.08 52.3 25.08 63.22 25.24 63.26 25.49 63.31"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#205b99"
      },
      points: "39.53 47.31 39.52 44 35.95 42.29 39.52 37.97 39.52 33.24 25.23 36.62 25.08 36.66 25.08 47.66 30.03 47.54 39.53 47.31"
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