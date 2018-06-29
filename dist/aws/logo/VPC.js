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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "VPC"), _react.default.createElement("polygon", {
      style: {
        "fill": "#fbbf93"
      },
      points: "60.81 55.73 50.04 55.07 16.08 57.25 25.66 78.88 60.81 55.73"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "25.53 21.21 16.08 25.98 16.08 50 25.53 50 38.9 37.88 25.53 21.21"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "60.81 55.73 25.66 58.66 25.66 78.88 60.81 69.31 60.81 55.73"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "42.66 50 25.53 50 25.53 21.21 42.66 25.85 42.66 50"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "67.28 49.98 79.58 50 79.58 26.39 67.28 28.43 67.28 49.98"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#6b3a19"
      },
      points: "43.2 30.81 54.27 19.7 79.58 34.29 67.28 36.02 43.2 30.81"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "31.88 50 49.96 50 59.44 31.04 49.96 9 31.88 18.04 31.88 50"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "49.96 9 49.96 50 60.12 50 60.12 28.45 79.58 34.29 79.58 50 83.92 50 83.92 25.98 49.96 9"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "16.08 57.25 25.66 58.66 25.66 78.88 16.08 74.1 16.08 57.25"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fbbf93"
      },
      points: "83.92 57.16 67.59 56.15 31.88 59.61 49.96 91 83.92 57.16"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "83.92 57.16 49.96 62.25 49.96 91 83.92 74.02 83.92 57.16"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "31.88 59.61 49.96 62.25 49.96 91 31.88 81.98 31.88 59.61"
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