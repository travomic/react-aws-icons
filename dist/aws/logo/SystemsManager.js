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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Systems Manager"), _react.default.createElement("polygon", {
      style: {
        "fill": "#b7ca9d"
      },
      points: "41.44 54.75 53.37 55.95 61.9 55.02 50.01 54.04 41.44 54.75"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "53.37 69.87 41.44 66.88 41.44 54.75 53.37 55.95 53.37 69.87"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "13.14 57.09 23.57 59.18 23.57 77.95 13.14 72.74 13.14 57.09"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#b7ca9d"
      },
      points: "13.14 57.09 23.57 59.18 38.55 57.55 27.06 55.94 13.14 57.09"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "23.57 77.95 38.55 73.89 38.55 57.55 23.57 59.18 23.57 77.95"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "53.37 69.87 61.9 67.56 61.9 55.02 53.37 55.95 53.37 69.87"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "86.86 72.73 79.46 76.43 79.46 58.57 86.86 57.09 86.86 72.73"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#b7ca9d"
      },
      points: "60.61 56.67 79.46 58.57 86.86 57.09 68.97 55.61 60.61 56.67"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "79.46 76.43 60.61 71.69 60.61 56.67 79.46 58.57 79.46 76.43"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "24.94 46.66 36.31 46.66 36.31 18.83 24.94 23.03 24.94 46.66"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "36.31 46.66 54.91 46.66 54.91 23.87 36.31 18.83 36.31 46.66"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "80.82 46.66 63.34 46.66 63.34 8.84 80.82 17.58 80.82 46.66"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "65.57 83.38 49.99 91.16 49.99 64.46 65.57 61.35 65.57 83.38"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "49.99 91.16 30.37 81.35 30.37 60.54 49.99 64.46 49.99 91.16"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "63.34 46.66 43.51 46.66 43.51 16.17 63.34 8.84 63.34 46.66"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#b7ca9d"
      },
      points: "30.37 60.54 49.99 64.46 65.57 61.35 45.78 58.57 30.37 60.54"
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