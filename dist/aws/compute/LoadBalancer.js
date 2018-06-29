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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Load Balancer"), _react.default.createElement("circle", {
      style: {
        "fill": "#9d5025"
      },
      cx: "50",
      cy: "51.25",
      r: "30.43"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#f58536"
      },
      cx: "50",
      cy: "48.75",
      r: "30.43"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "24.42",
      y: "39.87",
      width: "11.05",
      height: "17.76"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "59.73",
      y: "27.74",
      width: "9.86",
      height: "9.86"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "59.73",
      y: "43.82",
      width: "9.86",
      height: "9.86"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "59.73",
      y: "59.91",
      width: "9.86",
      height: "9.86"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "57.01 50.05 58.65 49.24 59.73 48.71 58.65 48.17 57.19 47.45 52.79 45.28 52.79 47.45 39.58 47.45 54.59 37.84 55.78 39.68 58.27 35.48 59 34.24 59.73 33.02 58.33 33.19 56.74 33.37 52.04 33.92 53.17 35.66 34.76 47.45 32.73 48.75 35.15 50.29 53.17 61.84 52.04 63.58 56.74 64.13 58.33 64.31 59.73 64.48 59 63.26 58.27 62.02 55.78 57.82 54.59 59.66 39.58 50.05 52.79 50.05 52.79 52.14 57.01 50.05"
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