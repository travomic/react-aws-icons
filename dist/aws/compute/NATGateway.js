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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "NATGateway"), _react.default.createElement("circle", {
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
      x: "58.24",
      y: "34.62",
      width: "3.21",
      height: "28.25"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "67.26 41.77 75.66 48.61 67.26 55.73 67.26 41.77"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "37.57 47.15 39.4 48.63 37.37 50.35 68.68 50.35 68.68 47.15 37.57 47.15"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "37.37 36.23 61.45 36.23 61.45 33.02 37.57 33.02 39.4 34.51 37.37 36.23"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "39.4 62.76 37.37 64.48 61.45 64.48 61.45 61.27 37.57 61.27 39.4 62.76"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "30.68 43.16 37.4 48.63 30.68 54.34 30.68 43.16"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "30.68 29.04 37.4 34.51 30.68 40.21 30.68 29.04"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "30.68 57.29 37.4 62.76 30.68 68.46 30.68 57.29"
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