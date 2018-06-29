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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Route53"), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "64.29 83.83 49.94 91 49.94 9 64.29 16.18 64.29 83.83"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "35.59 83.83 49.94 91 49.94 9 35.59 16.18 35.59 83.83"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "44.53 38.84 20.33 35.76 20.33 23.81 44.53 29.5 44.53 38.84"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "16 25.97 20.33 23.81 20.33 35.76 16 36.96 16 25.97"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#6b3a19"
      },
      points: "44.53 38.84 39.52 39.58 16 36.96 20.33 35.76 44.53 38.84"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "80.41 60.31 84 59.57 84 50 80.41 50 80.41 60.31"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "55.3 58.14 80.41 60.48 80.41 50 55.3 50 55.3 58.14"
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