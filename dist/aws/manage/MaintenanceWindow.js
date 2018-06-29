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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Maintenance Window"), _react.default.createElement("path", {
      style: {
        "fill": "#4b612c"
      },
      d: "M69.55,46.86a19.91,19.91,0,0,0-2.64-6.35L69.44,38V35.51l-8.71-1.18a19.9,19.9,0,0,0-6.35-2.64V30.49H45.63v1.19a19.9,19.9,0,0,0-6.35,2.64l-8.71,1.18V38l2.53,2.53a19.91,19.91,0,0,0-2.64,6.35H26.88v8.75h3.56A19.91,19.91,0,0,0,33.08,62l-2.53,0v2.48l6.19,6.19,2.53-2.53a19.9,19.9,0,0,0,6.35,2.64v3.56h8.75V70.79a19.9,19.9,0,0,0,6.35-2.64l2.53,2.53,6.19-6.19V62l-2.53,0a19.91,19.91,0,0,0,2.64-6.35h3.56V46.86ZM62.49,57.54a14,14,0,0,1-6.19,6.19,13.9,13.9,0,0,1-12.6,0,14,14,0,0,1-6.19-6.19,13.9,13.9,0,0,1,0-12.6,14,14,0,0,1,6.19-6.19,13.9,13.9,0,0,1,12.6,0,14,14,0,0,1,6.19,6.19,13.9,13.9,0,0,1,0,12.6Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#759c3e"
      },
      d: "M69.55,44.39A19.91,19.91,0,0,0,66.92,38l2.53-2.53-6.19-6.19-2.53,2.53a19.9,19.9,0,0,0-6.35-2.64V25.64H45.63v3.56a19.9,19.9,0,0,0-6.35,2.64l-2.53-2.53-6.19,6.19L33.08,38a19.91,19.91,0,0,0-2.64,6.35H26.88v8.75h3.56a19.91,19.91,0,0,0,2.64,6.35L30.56,62l6.19,6.19,2.53-2.53a19.9,19.9,0,0,0,6.35,2.64v3.56h8.75V68.31a19.9,19.9,0,0,0,6.35-2.64l2.53,2.53L69.44,62l-2.53-2.53a19.91,19.91,0,0,0,2.64-6.35h3.56V44.39Z"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#fff"
      },
      cx: "50",
      cy: "48.76",
      r: "15.33"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#759c3e"
      },
      x: "49.76",
      y: "46.99",
      width: "8.27",
      height: "3.54"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#759c3e"
      },
      x: "48.23",
      y: "38.08",
      width: "3.54",
      height: "12.45"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#b7ca9d"
      },
      d: "M63.56,48.76h3.54A17.11,17.11,0,0,0,50,31.67V35.2A13.57,13.57,0,0,1,63.56,48.76Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#4b612c"
      },
      d: "M63.56,48.76A13.56,13.56,0,1,1,50,35.2V31.67A17.09,17.09,0,1,0,67.09,48.76Z"
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