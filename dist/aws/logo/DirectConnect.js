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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Direct Connect"), _react.default.createElement("polygon", {
      style: {
        "fill": "#6b3a19"
      },
      points: "83.97 35.59 50 39.81 16.04 35.59 50 9 83.97 35.59"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fbbf93"
      },
      points: "83.97 64.41 50 60.19 16.04 64.41 50 91 83.97 64.41"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "83.97 35.59 50 25.4 50 9 83.97 25.98 83.97 35.59"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "64.35 56.77 83.97 54.8 83.97 45.2 64.35 43.24 64.35 56.77"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "83.97 64.41 50 74.6 50 91 83.97 74.02 83.97 64.41"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "16.04 35.59 50 25.4 50 9 16.04 25.98 16.04 35.59"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "31.92 62.78 50 66.4 68.08 50 50 33.6 31.92 37.22 31.92 62.78"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "68.08 62.78 50 66.4 50 33.6 68.08 37.22 68.08 62.78"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "35.65 56.77 16.04 54.8 16.04 45.2 35.65 43.24 35.65 56.77"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "16.04 64.41 50 74.6 50 91 16.04 74.02 16.04 64.41"
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