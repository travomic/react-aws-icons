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
    }), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
      id: "aws-work-mail-linear-gradient",
      x1: "50",
      y1: "-687.73",
      x2: "50",
      y2: "-603.9",
      gradientTransform: "translate(0 696)",
      gradientUnits: "userSpaceOnUse"
    }, _react.default.createElement("stop", {
      offset: "0",
      "stop-color": "#f58536"
    }), _react.default.createElement("stop", {
      offset: "1",
      "stop-color": "#d16929"
    }))), _react.default.createElement("title", null, "Mail"), _react.default.createElement("polygon", {
      points: "13 28.9 50 7.8 87 28.9 87 71.1 50 92.2 13 71.1 13 28.9",
      fill: "url(#aws-work-mail-linear-gradient)"
    }), _react.default.createElement("path", {
      d: "M71.4,35.8v9L49.3,54.6,27.2,44.8v-9H23.3v33H75.2v-33Zm0,29.2H27.3V49.2L49.4,59l22.1-9.8V65Z",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "49.3 21.7 23.4 33.3 23.4 38.4 27.3 38.4 27.3 35.9 49.3 26 71.4 35.9 71.4 38.4 75.3 38.4 75.3 33.3 49.3 21.7",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "35.1 48.4 35.1 42.1 63.5 42.1 63.5 48.4 67.5 46.6 67.5 38.1 31.2 38.1 31.2 46.6 35.1 48.4",
      fill: "#fff"
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