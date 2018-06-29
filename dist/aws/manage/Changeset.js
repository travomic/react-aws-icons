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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Changeset"), _react.default.createElement("g", {
      style: {
        "isolation": "isolate"
      }
    }, _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "25.58",
      y: "32.42",
      width: "48.83",
      height: "46.07"
    })), _react.default.createElement("path", {
      style: {
        "fill": "#759c3e"
      },
      d: "M25.59,21.62V76H74.42V21.62Z"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "30.72",
      y: "27",
      width: "9.88",
      height: "9.88"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "69.31 36.59 58.47 36.59 63.89 27.3 69.31 36.59"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "54.19 31.94 51.61 29.37 51.61 31.04 44.94 31.04 44.94 32.85 51.61 32.85 51.61 34.52 54.19 31.94"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#fff"
      },
      cx: "35.66",
      cy: "49.65",
      r: "4.94"
    }), _react.default.createElement("ellipse", {
      style: {
        "fill": "#fff"
      },
      cx: "63.92",
      cy: "49.65",
      rx: "6.95",
      ry: "4.94"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "54.19 49.65 51.61 47.08 51.61 48.75 44.94 48.75 44.94 50.56 51.61 50.56 51.61 52.23 54.19 49.65"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#fff"
      },
      cx: "35.66",
      cy: "67.36",
      r: "4.94"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "69.16 63.65 68 62.5 64.29 66.21 60.58 62.5 59.42 63.65 63.13 67.36 59.42 71.08 60.58 72.23 64.29 68.52 68 72.23 69.16 71.08 65.44 67.36 69.16 63.65"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "54.19 67.36 51.61 64.79 51.61 66.46 44.94 66.46 44.94 68.27 51.61 68.27 51.61 69.94 54.19 67.36"
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