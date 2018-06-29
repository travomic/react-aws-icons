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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Auto Scaling"), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "59.03 69.58 59.03 59.11 54.57 54.66 51.63 51.71 54.57 48.77 59.03 44.31 59.03 33.84 59.03 33.59 64.26 33.59 64.26 30.17 50 20.38 35.74 30.17 35.74 33.59 40.97 33.59 40.97 33.84 40.97 44.31 45.43 48.77 48.37 51.71 45.43 54.66 40.97 59.11 40.97 69.58 35.74 66.41 35.74 69.83 50 84.09 64.26 69.83 64.26 66.41 59.03 69.58"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "41.71 51.71 41.71 48.29 27.45 44.27 14.45 44.27 14.45 59.15 27.45 59.15 27.45 65.97 41.71 51.71"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "85.55 44.27 72.56 44.27 58.29 48.29 58.29 51.71 72.56 65.97 72.56 59.15 85.55 59.15 85.55 44.27"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "59.03 66.16 59.03 55.69 54.57 51.23 51.63 48.29 54.57 45.34 59.03 40.89 59.03 30.42 59.03 30.17 64.26 30.17 50 15.91 35.74 30.17 40.97 30.17 40.97 30.42 40.97 40.89 45.43 45.34 48.37 48.29 45.43 51.23 40.97 55.69 40.97 66.16 40.97 66.41 35.74 66.41 50 80.67 64.26 66.41 59.03 66.41 59.03 66.16"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "41.71 48.29 27.45 34.02 27.45 40.85 14.45 40.85 14.45 55.73 27.45 55.73 27.45 62.55 41.71 48.29"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "85.55 40.85 72.56 40.85 72.56 34.02 58.29 48.29 72.56 62.55 72.56 55.73 85.55 55.73 85.55 40.85"
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