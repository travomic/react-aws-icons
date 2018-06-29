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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Cloud HSM"), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "22.92 72.36 16.04 74.03 16.04 25.97 22.92 22.54 33.3 37.86 22.92 72.36"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "31.79 37.64 22.92 36.55 22.92 22.54 31.79 24.77 31.79 37.64"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "68.09 35.57 82.4 37.64 77.06 22.54 68.09 24.8 68.09 35.57"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "35.65 72.78 49.99 91 59.2 32.74 49.99 9 35.65 16.17 35.65 72.78"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "16.04 74.03 49.99 91 61.04 58.36 49.99 25.73 16.04 35.78 16.04 74.03"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "56.23 37.86 82.4 47.17 77.06 77.46 64.6 74.33 56.23 37.86"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "64.6 83.7 49.99 91 49.99 9 64.6 16.3 64.6 83.7"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "77.06 77.46 83.96 74.02 83.96 25.98 77.06 22.54 77.06 77.46"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "83.96 50 49.99 50 49.99 25.73 83.96 35.78 83.96 50"
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