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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Voice Service"), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M43.78,43.23H23.5v26.6a9.12,9.12,0,0,0,9.12,9.12H67.38a9.12,9.12,0,0,0,9.12-9.12V35.07a9.12,9.12,0,0,0-9.12-9.12H47V40A3.22,3.22,0,0,1,43.78,43.23Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M75.91,29.43c-.05-.14-.1-.28-.16-.41A9.11,9.11,0,0,0,71,24.25l-.41-.16a9.08,9.08,0,0,0-3.2-.59H32.62a9.12,9.12,0,0,0-9.12,9.12h0V67.38a9.12,9.12,0,0,0,9.12,9.12H67.38a9.12,9.12,0,0,0,9.12-9.12V32.62h0A9.08,9.08,0,0,0,75.91,29.43Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#00b3ff"
      },
      d: "M50,31.25a18.75,18.75,0,0,0-2.52,37.33l.13-.06V64.62a2.55,2.55,0,0,0-1.76-2.43A12.87,12.87,0,1,1,62.7,47.91c1.45,8.64-6.39,16.74-15.09,20.61v.07A18.75,18.75,0,1,0,50,31.25Z"
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