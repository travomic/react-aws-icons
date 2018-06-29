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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Artifact"), _react.default.createElement("polygon", {
      style: {
        "fill": "#648339"
      },
      points: "49.95 90 63.28 69.93 45.76 68.2 49.95 90"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "50 10 36.84 29.9 50 25.95 50 10"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#b7ca9d"
      },
      points: "50 10 63.28 29.96 50 25.98 50 10"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "36.84 70 49.95 73.93 49.95 25.96 36.84 29.9 36.84 70"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "49.95 25.96 63.28 29.96 63.28 69.93 49.95 73.93 49.95 25.96"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#3c4929"
      },
      points: "49.95 90 36.84 70 49.95 73.93 49.95 90"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "26.1 26.55 16.91 40.6 22.99 39.39 26.1 26.55"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#3c4929"
      },
      points: "22.99 39.39 16.91 40.6 25.73 54.71 22.99 39.39"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#b7ca9d"
      },
      points: "22.99 39.39 35.3 40.6 26.1 26.55 22.99 39.39"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#648339"
      },
      points: "25.73 54.71 35.3 40.65 22.99 39.44 25.73 54.71"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#648339"
      },
      points: "73.9 78.11 83.09 64.05 77.01 65.27 73.9 78.11"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#b7ca9d"
      },
      points: "77.01 65.27 83.09 64.05 74.27 49.95 77.01 65.27"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#3c4929"
      },
      points: "77.01 65.27 64.7 64.05 73.9 78.11 77.01 65.27"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "74.27 49.95 64.7 64.01 77.01 65.22 74.27 49.95"
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