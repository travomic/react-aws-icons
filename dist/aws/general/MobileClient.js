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
    }), _react.default.createElement("title", null, "Mobile Client"), _react.default.createElement("path", {
      d: "M58,24.34a3.12,3.12,0,0,1,3.13,3.11L68.27,75a3.12,3.12,0,0,1-3.13,3.11H34.86A3.13,3.13,0,0,1,31.73,75l8.89-47.54a3.13,3.13,0,0,1,3.13-3.11Z",
      fill: "#7d7c7c"
    }), _react.default.createElement("path", {
      d: "M65.14,21.86A3.12,3.12,0,0,1,68.27,25V72.5a3.12,3.12,0,0,1-3.13,3.11H34.86a3.13,3.13,0,0,1-3.13-3.11V25a3.13,3.13,0,0,1,3.13-3.11Z",
      fill: "#d2d3d3"
    }), _react.default.createElement("path", {
      d: "M40.87,25.31H59.08a2,2,0,1,1,0,4.06H40.87a2,2,0,1,1,0-4.06ZM50,74.2a3.54,3.54,0,1,1,3.56-3.55A3.55,3.55,0,0,1,50,74.2ZM64.71,62.86a2,2,0,0,1-2.09,1.86H37.32a2,2,0,0,1-2.09-1.86V34.58a2,2,0,0,1,2.09-1.86h25.3a2,2,0,0,1,2.09,1.86Z",
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