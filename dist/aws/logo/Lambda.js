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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Lambda"), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "15.91 74.12 20.25 76.29 27.92 50.04 20.25 23.71 15.91 25.88 15.91 74.12"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "28.65 25.71 20.25 23.74 20.25 76.29 28.65 74.32 28.65 25.71"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "25.47 21.1 31.84 17.91 39.79 50.04 31.84 82.09 25.47 78.9 25.47 21.1"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "44.89 77.81 31.84 81.97 31.84 17.91 44.89 22.08 44.89 77.81"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "74.52 29.17 79.74 29.17 79.74 69.12 74.52 68.83 74.52 29.17"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#6b3a19"
      },
      points: "54.27 29.75 60.13 26.73 79.33 29.17 79.9 34.28 74.64 35.02 54.27 29.75"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fbbf93"
      },
      points: "54.44 70.25 60.29 73.27 80.06 65.71 74.81 64.98 54.44 70.25"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "55.92 61.77 66.37 63.17 66.37 36.83 55.92 38.22 55.92 61.77"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "39.79 86.06 49.99 91.16 58.75 49.94 49.99 8.84 39.79 13.94 39.79 86.06"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M50,8.84V91.16l34.1-17.05V25.89ZM79.74,65.77,60.19,71.64V28.36l19.54,5.86Z"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "66.37 36.83 66.37 63.25 77.24 50.04 66.37 36.83"
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