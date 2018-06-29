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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Directory Service"), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "16.06 25.97 20.39 23.81 28.7 40.6 20.39 55.22 16.06 54.78 16.06 25.97"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "28.7 25.74 20.39 23.81 20.39 55.22 28.7 54.9 28.7 25.74"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "25.63 21.19 31.89 18.05 41.27 38.23 31.89 56.38 25.63 55.75 25.63 21.19"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#b7ca9d"
      },
      points: "83.94 64.46 50 60.14 16.06 64.46 50 91 83.94 64.46"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "58.31 46.67 70.91 45.68 68.11 56.38 58.31 55.81 58.31 46.67"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "72.89 47.03 82.69 47.03 79.61 55.24 72.89 54.9 72.89 47.03"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "44.08 21.98 31.89 18.05 31.89 56.38 44.08 55.58 44.08 21.98"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "83.94 64.46 50 74.6 50 91 83.94 74.03 83.94 64.46"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "39.86 14.07 50 9 72.49 27.51 50 58.2 39.86 57.17 39.86 14.07"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "16.06 64.46 50 74.6 50 91 16.06 74.03 16.06 64.46"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "60.14 14.13 50 9 50 58.2 60.14 57.17 60.14 14.13"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "79.61 31.55 83.94 33.03 83.94 54.78 79.61 55.24 79.61 31.55"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "74.37 44.19 68.11 43.62 68.11 56.38 74.37 55.81 74.37 44.19"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "50 9 83.94 25.97 83.94 50 50 50 50 9"
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