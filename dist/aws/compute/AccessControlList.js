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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Access Control List"), _react.default.createElement("g", {
      id: "network_access_control_list",
      "data-name": "network access control list"
    }, _react.default.createElement("path", {
      style: {
        "fill": "#9d5025"
      },
      d: "M19.57,50.24c0-16.81,13.62-29.43,30.43-29.43S80.43,33.43,80.43,50.24"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#9d5025"
      },
      d: "M80.43,50.24C80.43,67,66.81,81.67,50,81.67S19.57,67,19.57,50.24"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M50,18.33C33.19,18.33,19.57,31,19.57,47.76S33.19,79.19,50,79.19,80.43,64.57,80.43,47.76,66.81,18.33,50,18.33Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M55,48.67V44.8a5,5,0,0,0-9.93,0v3.88H42.5v8.59h15V48.67Zm-2.43,0H47.46l0-3.88A2.37,2.37,0,0,1,50,42.43a2.48,2.48,0,0,1,2.56,2.37Z"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fbbf93"
      },
      x: "33.5",
      y: "31.26",
      width: "5",
      height: "35"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fbbf93"
      },
      x: "61.5",
      y: "31.26",
      width: "5",
      height: "35"
    }), _react.default.createElement("polyline", {
      style: {
        "fill": "#fff"
      },
      points: "26.5 50.67 26.5 53.26 31.5 49.26 26.5 45.26 26.5 47.86"
    }), _react.default.createElement("polyline", {
      style: {
        "fill": "#fff"
      },
      points: "73.5 47.86 73.5 45.26 68.5 49.26 73.5 53.26 73.5 50.67"
    }))) // -- END of generated content.

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