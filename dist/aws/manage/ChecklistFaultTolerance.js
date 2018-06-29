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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Checklist Fault Tolerance"), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "61.38 58.02 61.38 21.52 23.32 21.52 23.32 63.92 49.3 63.92 57.04 50.5 61.38 58.02"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "57.04 51.94 73.48 80.41 73.48 82.89 40.6 82.89 40.6 80.41 57.04 51.94"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "61.38 55.54 61.38 19.04 23.32 19.04 23.32 61.44 49.3 61.44 57.04 48.02 61.38 55.54"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "40.21",
      y: "26.6",
      width: "16.83",
      height: "3.12"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "40.21",
      y: "38.66",
      width: "16.83",
      height: "3.12"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "28.66",
      y: "25.3",
      width: "2.85",
      height: "5.72",
      transform: "translate(-11.1 29.52) rotate(-45)"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "28.78",
      y: "25.57",
      width: "9.17",
      height: "2.79",
      transform: "translate(-9.3 31.49) rotate(-45)"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "28.78",
      y: "37.46",
      width: "9.17",
      height: "2.79",
      transform: "translate(-17.7 34.97) rotate(-45)"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "28.78",
      y: "49.35",
      width: "9.17",
      height: "2.79",
      transform: "translate(-26.11 38.45) rotate(-45)"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "28.66",
      y: "37.19",
      width: "2.85",
      height: "5.72",
      transform: "translate(-19.51 33) rotate(-45)"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "28.66",
      y: "49.08",
      width: "2.85",
      height: "5.72",
      transform: "translate(-27.91 36.49) rotate(-45)"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "40.21 53.85 53.69 53.85 55.48 50.73 40.21 50.73 40.21 53.85"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "57.04 51.94 73.48 80.41 40.6 80.41 57.04 51.94"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M69.86,78.32H44.22L57,56.12Zm-21.31-2.5h17L57,61.12Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M55.94,72.5h2.2v2.16h-2.2Zm2.13-5.16-.55,4.32h-1L56,67.34V64.65h2.08Z"
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