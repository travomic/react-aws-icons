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
      id: "aws-work-spaces-linear-gradient",
      x1: "50",
      y1: "7.94",
      x2: "50",
      y2: "92.36",
      gradientUnits: "userSpaceOnUse"
    }, _react.default.createElement("stop", {
      offset: "0",
      "stop-color": "#f58536"
    }), _react.default.createElement("stop", {
      offset: "1",
      "stop-color": "#d16929"
    }))), _react.default.createElement("title", null, "Spaces"), _react.default.createElement("polygon", {
      points: "13 28.7 50 7.5 87 28.7 87 71.2 50 92.5 13 71.2 13 28.7",
      fill: "url(#aws-work-spaces-linear-gradient)"
    }), _react.default.createElement("path", {
      d: "M37.4,30.4v9.9H26.2a1.9,1.9,0,0,0-1.9,1.9h0V68.5h0a1.9,1.9,0,0,0,1.9,1.9h19a1.9,1.9,0,0,0,1.9-1.9h0V65.7H69.5v-2c0-1.3-4.6-2.4-10.8-2.7V58H74.8V30.4ZM35.7,69.5a1.6,1.6,0,1,1,1.6-1.6A1.58,1.58,0,0,1,35.7,69.5Zm7.6-4.1H28.2V44.2H43.3ZM53.4,61a52,52,0,0,0-6.3.6V57.9h6.3ZM71,54.1H47.2V42.2h0a1.9,1.9,0,0,0-1.9-1.9H41.4V34.4H71.1V54.1Z",
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