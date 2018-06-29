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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Mechanical Turk"), _react.default.createElement("polygon", {
      style: {
        "fill": "#373737"
      },
      points: "64.34 36.47 49.99 38.48 35.64 36.47 49.99 9 64.34 36.47"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4f4f4f"
      },
      points: "63.58 50 77.14 50 83.03 57.4 77.14 66.45 63.58 64.41 63.58 50"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#acacac"
      },
      points: "36.43 50 22.86 50 16.88 57.31 22.86 66.46 36.43 64.42 36.43 50"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#acacac"
      },
      points: "64.34 36.47 49.99 33.6 49.99 9 64.34 16.18 64.34 36.47"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4f4f4f"
      },
      points: "35.64 36.47 49.99 33.6 49.99 9 35.64 16.18 35.64 36.47"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#acacac"
      },
      points: "71.41 50 49.99 50 31.87 62.91 49.99 91 71.41 80.29 71.41 50"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4f4f4f"
      },
      points: "28.57 50 49.99 50 49.99 91 28.57 80.29 28.57 50"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#acacac"
      },
      points: "77.14 66.45 83.96 64.41 83.96 50 77.14 50 77.14 66.45"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4f4f4f"
      },
      points: "22.86 66.46 16.04 64.42 16.04 50 22.86 50 22.86 66.46"
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