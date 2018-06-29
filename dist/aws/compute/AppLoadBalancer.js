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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "App Load Balancer"), _react.default.createElement("circle", {
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
      x: "44.48",
      y: "20.81",
      width: "11.05",
      height: "17.76",
      transform: "translate(79.69 -20.31) rotate(90)"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "63.62",
      y: "56.16",
      width: "9",
      height: "9",
      transform: "translate(128.78 -7.47) rotate(90)"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "52.24",
      y: "56.16",
      width: "9",
      height: "9",
      transform: "translate(117.4 3.91) rotate(90)"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "38.39",
      y: "56.16",
      width: "9",
      height: "9",
      transform: "translate(103.55 17.76) rotate(90)"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "27.01",
      y: "56.16",
      width: "9",
      height: "9",
      transform: "translate(92.17 29.14) rotate(90)"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "30.7",
      y: "48.36",
      width: "1.62",
      height: "8.83"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "30.7",
      y: "48.36",
      width: "13",
      height: "1.62"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "42.08",
      y: "48.36",
      width: "1.62",
      height: "8.83"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "55.93",
      y: "48.36",
      width: "1.62",
      height: "8.83"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "55.93",
      y: "48.36",
      width: "13",
      height: "1.62"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "67.31",
      y: "48.36",
      width: "1.62",
      height: "8.83"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "36.4",
      y: "42.06",
      width: "1.62",
      height: "7.11"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "49.19",
      y: "33.59",
      width: "1.62",
      height: "8.6"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "36.4",
      y: "41.38",
      width: "26.87",
      height: "1.62"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "61.65",
      y: "42.06",
      width: "1.62",
      height: "7.11"
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