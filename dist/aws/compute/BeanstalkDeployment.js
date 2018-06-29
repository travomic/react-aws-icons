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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Beanstalk Deployment"), _react.default.createElement("path", {
      style: {
        "fill": "#6b3a19"
      },
      d: "M51,32.13a12.9,12.9,0,0,1-25.8,0V29.65L38,19.23,51,29.65Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#6b3a19"
      },
      d: "M48.65,51.78a.37.37,0,0,1-.3.1,2.36,2.36,0,0,1-1.4-1.2c-.2-.5.3-2.4.8-2.6.2-.1,16.8-6.1,25.6-20.3V25.3s-16.25,6.55-20.2,8.88v.9A12.82,12.82,0,0,1,44.85,47c-.4,1.9.2,3.9-.8,6.1v29.4h9V52.88c7-.6,14.4-2,17-4.7,2.9-2.9,4.1-11.4,4.7-17.3V28.4s-2.67,6.37-3,6.81A54.39,54.39,0,0,1,48.65,51.78Z"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#f58536"
      },
      cx: "38.05",
      cy: "29.65",
      r: "12.9"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M34.75,39.9h6.6V27.3H46l-8-7.9-8,7.9h4.7Zm-2.5-13.5L38,20.7l5.8,5.7h-3.4V39h-4.8V26.4Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M48.65,49.3a.37.37,0,0,1-.3.1A2.36,2.36,0,0,1,47,48.2c-.2-.5.3-2.4.8-2.6.2-.1,16.8-6.1,25.6-20.3-6,.8-15.1,3.4-20.2,6.4v.9a12.82,12.82,0,0,1-8.3,11.9c-.4,1.9.2,3.9-.8,6.1V80h9V50.4c7-.6,14.4-2,17-4.7,2.9-2.9,4.1-11.4,4.7-17.3C65.55,43.5,49.45,49,48.65,49.3Z"
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