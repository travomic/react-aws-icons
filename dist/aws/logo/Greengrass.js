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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Greengrass"), _react.default.createElement("polygon", {
      style: {
        "fill": "#205b99"
      },
      points: "68.08 62.83 62.6 62.13 62.6 37.92 68.08 37.22 83.45 50.64 68.08 62.83"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#5294cf"
      },
      points: "31.92 62.83 37.43 62.13 37.43 37.92 31.92 37.22 17.04 50.02 31.92 62.83"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#5294cf"
      },
      points: "59.42 59.21 49.97 60.41 40.96 49.64 49.97 39.59 59.42 40.79 59.42 59.21"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#5294cf"
      },
      points: "83.97 59.64 68.08 62.83 68.08 37.22 83.97 40.39 83.97 59.64"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#205b99"
      },
      points: "40.65 59.22 50 60.41 50 39.59 40.65 40.78 40.65 59.22"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "55.7 34.74 37.43 37.92 31.92 37.22 50 9 55.7 34.74"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "68.08 37.22 62.6 37.92 44.33 34.73 50 9 68.08 37.22"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#99bce3"
      },
      points: "68.08 62.83 62.6 62.13 44.33 65.33 50 91 68.08 62.83"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#99bce3"
      },
      points: "55.7 65.32 37.43 62.13 31.92 62.83 50 91 55.7 65.32"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#5294cf"
      },
      points: "68.08 37.22 50 33.6 33.49 25.09 50 9 68.08 18.04 68.08 37.22"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#5294cf"
      },
      points: "68.08 81.96 50 91 33.98 75.34 50 66.46 68.08 62.83 68.08 81.96"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#205b99"
      },
      points: "31.92 37.22 50 33.6 50 9 31.92 18.04 31.92 37.22"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#205b99"
      },
      points: "16.03 59.64 31.92 62.83 31.92 37.22 16.03 40.39 16.03 59.64"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#205b99"
      },
      points: "31.92 81.96 50 91 50 66.46 31.92 62.83 31.92 81.96"
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