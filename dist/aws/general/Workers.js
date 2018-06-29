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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Workers"), _react.default.createElement("path", {
      style: {
        "fill": "#4f4f4f"
      },
      d: "M70.19,45c5.44,0,9.23,3.42,9.23,8.29V63.86H74.64V56.68H73.33v7.18H66c-.48-5.36-4.82-9-10.91-9H50.88V51.94c4.66-.42,8.38-2.21,8.79-6.95l.44,0Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#4f4f4f"
      },
      d: "M39.9,45h.45c.41,4.74,4.13,6.53,8.78,6.95v2.91H45c-6.08,0-10.44,3.65-10.91,9H26.9V56.69H25.6v7.17h-5V53.27c0-4.89,3.79-8.29,9.23-8.29Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#4f4f4f"
      },
      d: "M55.05,59.31c5.44,0,9.23,3.42,9.23,8.29V78.19H59.49V71h-1.3v7.17H42V71H40.74v7.17h-5V67.6c0-4.87,3.79-8.29,9.23-8.29Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#4f4f4f"
      },
      d: "M34.85,24.37l8,5.67v2.47a8.07,8.07,0,0,1-8,8.16c-4.39,0-8-3.65-8-8.53V30Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#4f4f4f"
      },
      d: "M65.14,24.37l8,5.67v2.47a8.07,8.07,0,0,1-8,8.16c-4.39,0-8-3.65-8-8.53V30Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#4f4f4f"
      },
      d: "M50,35.52l7.07,5v2.19A7.16,7.16,0,0,1,50,50a7.23,7.23,0,0,1-7.05-7.56V40.47Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#acacac"
      },
      d: "M65.15,21.89a8.15,8.15,0,1,1-8,8.14A8.07,8.07,0,0,1,65.15,21.89Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#acacac"
      },
      d: "M50,33a7.23,7.23,0,1,1-7.06,7.23A7.15,7.15,0,0,1,50,33Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#acacac"
      },
      d: "M70.19,42.49c5.44,0,9.23,3.42,9.23,8.3V61.38H74.64V54.2H73.33v7.18H66c-.48-5.36-4.82-9-10.91-9H50.88v-.91a9.79,9.79,0,0,0,8.79-8.95l.44,0Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#acacac"
      },
      d: "M39.9,42.5h.45a9.79,9.79,0,0,0,8.78,8.95v.91H45c-6.08,0-10.44,3.65-10.91,9H26.9V54.21H25.6v7.17h-5V50.79c0-4.89,3.79-8.29,9.23-8.29Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#acacac"
      },
      d: "M55.05,56.83c5.44,0,9.23,3.42,9.23,8.29V75.71H59.49V68.54h-1.3v7.17H42V68.54H40.74v7.17h-5V65.12c0-4.88,3.79-8.29,9.23-8.29Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#acacac"
      },
      d: "M34.85,21.89a8.15,8.15,0,1,1-8,8.14A8.08,8.08,0,0,1,34.85,21.89Z"
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