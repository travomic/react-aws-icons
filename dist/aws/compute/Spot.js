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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Spot"), _react.default.createElement("rect", {
      style: {
        "fill": "#9d5025"
      },
      x: "23.5",
      y: "26.27",
      width: "53",
      height: "53",
      rx: "9.12",
      ry: "9.12"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#f58536"
      },
      x: "23.5",
      y: "23.79",
      width: "53",
      height: "53",
      rx: "9.12",
      ry: "9.12"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M49.48,64.87c-7.58,0-12.08-6.38-12.08-14,0-8.79,5-14.54,12.08-14.54V31.66h2.25v4.71c5.81,0,10.67,3.71,11.14,9.78h-6c-.37-3-2.41-5.07-5.18-5.07V60.16c3.19-.52,5-2.72,5.39-6.17h6c-1.2,6.59-4.86,10.88-11.35,10.88v4.71H49.48Zm0-23.8c-4.6.42-6.12,5.49-6.12,9.83,0,4.19,1.73,8.58,6.12,9.26Z"
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