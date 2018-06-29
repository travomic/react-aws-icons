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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "ECS"), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "19.64 22.51 16 24.32 16 75.68 19.64 77.49 33.98 51.07 19.64 22.51"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "30.72 31.78 36.08 24.19 60.1 34.87 54.5 35.76 30.72 31.78"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "26.56 68.77 32.46 76.88 60.1 64.95 54.76 64.12 26.56 68.77"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "28.12 75.5 19.64 77.49 19.64 22.51 28.12 24.44 28.12 75.5"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "23.66 20.5 28.12 18.27 36.52 53.56 28.12 81.73 23.66 79.5 23.66 20.5"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "54.46 64.08 60.1 64.95 65.26 50.58 60.1 34.87 54.46 35.76 54.46 64.08"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "36.8 79.28 28.12 81.73 28.12 18.27 36.8 20.73 36.8 79.28"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "66.01 63.84 28.12 70.88 28.12 81.73 66.01 71.03 66.01 63.84"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "66.08 36 28.12 28.79 28.12 18.27 66.08 29.04 66.08 36"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "60.1 27.34 66.19 29.02 66.19 71.03 60.1 72.7 60.1 27.34"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#6b3a19"
      },
      points: "84 44.45 67.7 45.22 61.94 44.83 78.42 31.55 84 44.45"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "61.94 44.83 78.42 43.9 78.42 31.55 61.94 34.22 61.94 44.83"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#6b3a19"
      },
      points: "46.43 43.79 63.13 26.96 71.62 43.22 54.31 44.32 46.43 43.79"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "46.43 43.79 63.13 42.37 63.13 26.96 46.43 30.87 46.43 43.79"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "61.94 55.39 84 55.77 78.42 68.67 61.94 66 61.94 55.39"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "46.43 56.43 71.62 57.01 63.13 73.26 46.43 69.36 46.43 56.43"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fbbf93"
      },
      points: "46.43 56.43 63.13 57.86 71.62 57.01 54.31 55.9 46.43 56.43"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fbbf93"
      },
      points: "84 55.77 67.7 55.01 61.94 55.39 78.42 56.33 84 55.77"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "78.42 43.9 84 44.45 84 33.22 78.42 31.55 78.42 43.9"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "71.62 43.22 63.13 42.37 63.13 26.96 71.62 29.51 71.62 43.22"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "78.42 56.33 84 55.77 84 67 78.42 68.67 78.42 56.33"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "71.62 57.01 63.13 57.86 63.13 73.26 71.62 70.72 71.62 57.01"
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