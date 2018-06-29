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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Managed Services"), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "16.02 59.61 30.21 59 25.56 78.79 16.02 74.02 16.02 59.61"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "60.72 60.13 76.69 59 74.44 78.79 60.72 75.08 60.72 60.13"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "39.31 60.08 25.56 60.13 25.56 78.79 39.31 75.07 39.31 60.08"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "83.98 59.61 74.44 59.79 74.44 78.79 83.98 74.02 83.98 59.61"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "31.9 62.78 58.54 62.31 50 91 31.9 81.96 31.9 62.78"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "68.1 62.78 50 63.46 50 91 68.1 81.96 68.1 62.78"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#3c4929"
      },
      points: "83.98 40.39 50 43.21 16.02 40.39 50 13.34 83.98 40.39"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#b7ca9d"
      },
      points: "68.1 62.78 50 60.47 31.9 62.78 50 66.4 68.1 62.78"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#b7ca9d"
      },
      points: "39.31 60.08 28.58 58.57 16.02 59.61 25.77 61.56 39.31 60.08"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#b7ca9d"
      },
      points: "83.98 59.61 71.61 58.58 60.72 60.13 74.44 61.59 83.98 59.61"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "68.1 40.81 74.44 40.23 77.62 50.64 74.44 59.8 68.1 59.22 68.1 40.81"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "25.52 40.23 21.62 40.88 21.62 59.14 25.52 59.8 30.85 50.78 25.52 40.23"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "50 36.59 42.81 37.79 42.81 62.24 50 63.46 55.98 51.28 50 36.59"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "31.87 40.81 25.52 40.23 25.52 59.8 31.87 59.22 31.87 40.81"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "16.02 40.39 50 33.6 59.18 22.67 50 9 16.02 25.99 16.02 40.39"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "83.98 40.39 50 33.6 50 9 83.98 25.99 83.98 40.39"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "50 36.59 57.16 37.79 57.16 62.24 50 63.46 50 36.59"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "74.44 40.23 78.35 40.88 78.35 59.14 74.44 59.8 74.44 40.23"
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