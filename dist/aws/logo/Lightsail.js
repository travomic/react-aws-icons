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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Lightsail"), _react.default.createElement("polygon", {
      style: {
        "fill": "#fbbf93"
      },
      points: "62.55 67.85 70.4 68.95 64.83 80.75 56.79 68.95 62.55 67.85"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fbbf93"
      },
      points: "37.46 67.86 43.19 68.95 35.16 80.75 29.62 68.96 37.46 67.86"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "35.16 80.75 29.62 78.58 29.62 68.96 35.16 70.26 41.84 74.85 35.16 80.75"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "16 64.15 25.53 66.06 36.4 46.97 25.53 25.7 16 30.47 16 64.15"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "49.99 76.73 55.83 75.16 55.83 66.9 49.99 67.85 49.99 76.73"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "49.99 76.73 44.19 75.16 44.19 66.91 49.99 67.85 49.99 76.73"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "35.16 80.75 43.19 78.57 43.19 68.95 35.16 70.26 35.16 80.75"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "41.84 64.29 25.53 66.06 25.53 25.7 41.84 30.11 41.84 64.29"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "64.83 80.75 56.79 78.57 56.79 68.95 64.83 70.26 69.45 74.29 64.83 80.75"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fbbf93"
      },
      points: "49.99 70.26 58.15 71.82 49.99 86.53 41.84 71.82 49.99 70.26"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "49.99 86.53 41.84 83.35 41.84 71.82 49.99 73.73 55.13 79.17 49.99 86.53"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "57.16 64.17 74.45 66.04 81.74 48.25 74.45 25.7 57.16 30.38 57.16 64.17"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "31.89 67.33 49.99 70.95 56.27 44.17 49.99 13.47 31.89 22.52 31.89 67.33"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "64.83 70.26 70.4 68.95 70.4 78.57 64.83 80.75 64.83 70.26"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "58.15 71.82 49.99 73.73 49.99 86.53 58.15 83.35 58.15 71.82"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "74.45 25.7 84 30.48 84 64.14 74.45 66.04 74.45 25.7"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "49.99 13.47 68.17 22.56 68.17 67.3 49.99 70.93 49.99 13.47"
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