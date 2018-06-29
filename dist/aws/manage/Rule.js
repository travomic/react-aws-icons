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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Rule"), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "40.83 39.13 25.59 39.13 25.59 55.78 40.83 55.78 48.33 62.78 74.42 62.78 74.42 46.13 48.33 46.13 40.83 39.13"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "48.33 64.78 40.83 57.78 25.59 57.78 25.59 72.9 25.59 79.02 25.59 81.85 74.42 81.85 74.42 79.02 74.42 72.9 74.42 64.78 48.33 64.78"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "48.33 27.63 40.83 20.63 25.59 20.63 25.59 37.13 40.83 37.13 48.33 44.13 74.42 44.13 74.42 27.63 48.33 27.63"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "40.83 36.65 25.59 36.65 25.59 53.3 40.83 53.3 48.33 60.3 74.42 60.3 74.42 43.65 48.33 43.65 40.83 36.65"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "48.33 62.3 40.83 55.3 25.59 55.3 25.59 70.42 25.59 76.54 25.59 79.37 74.42 79.37 74.42 76.54 74.42 70.42 74.42 62.3 48.33 62.3"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "61.27",
      y: "68.28",
      width: "3.65",
      height: "7.34",
      transform: "translate(-32.4 65.69) rotate(-45)"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "61.42",
      y: "68.63",
      width: "11.76",
      height: "3.58",
      transform: "translate(-30.08 68.21) rotate(-45)"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "61.27",
      y: "49.63",
      width: "3.65",
      height: "7.34",
      transform: "translate(-19.21 60.23) rotate(-45)"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "61.42",
      y: "49.98",
      width: "11.76",
      height: "3.58",
      transform: "translate(-16.89 62.75) rotate(-45)"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "48.33 25.15 40.83 18.15 25.59 18.15 25.59 34.65 40.83 34.65 48.33 41.65 74.42 41.65 74.42 25.15 48.33 25.15"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "60.09",
      y: "31.25",
      width: "11.76",
      height: "3.58",
      transform: "translate(-4.04 56.32) rotate(-45)"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "64.18",
      y: "27.15",
      width: "3.58",
      height: "11.76",
      transform: "translate(-4.04 56.32) rotate(-45)"
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