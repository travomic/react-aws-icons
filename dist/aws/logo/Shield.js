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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Shield"), _react.default.createElement("polygon", {
      style: {
        "fill": "#648339"
      },
      points: "72.31 81.58 35.39 70.82 55.93 52.37 72.31 74.61 72.31 81.58"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#3c4929"
      },
      points: "27.69 81.58 49.91 75.11 50 69.53 26.27 59.49 27.69 81.58"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#b7ca9d"
      },
      points: "35.39 29.36 72.3 18.41 68.75 40.32 17.94 37.92 35.39 29.36"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "83.94 62.89 72.3 81.59 53.84 70.4 50 50 53.84 29.57 72.3 18.41 83.94 37.13 83.94 62.89"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "53.84 70.4 17.94 62.23 17.94 37.92 53.84 29.57 53.84 70.4"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#648339"
      },
      points: "50 25.03 27.7 18.41 31.25 40.32 50 30.45 50 25.03"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "16.06 62.89 27.7 81.59 46.16 70.4 48.81 50 46.16 29.57 27.7 18.41 16.06 37.13 16.06 62.89"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "50 69.53 46.16 70.4 46.16 29.57 50 30.45 50 69.53"
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