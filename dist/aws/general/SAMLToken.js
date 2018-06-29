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
    }), _react.default.createElement("title", null, "SAMLToken"), _react.default.createElement("path", {
      d: "M17.57,57.11l27.8,27.8L78.43,51.85V24H50.63L17.57,54.63ZM61.52,41a5.51,5.51,0,1,1,7.79,0A5.51,5.51,0,0,1,61.52,41Z",
      fill: "#7d7c7c"
    }), _react.default.createElement("path", {
      d: "M17.57,54.63l27.8,27.8L78.43,49.37V21.57H50.63Z",
      fill: "#d2d3d3"
    }), _react.default.createElement("path", {
      d: "M46.76,64.46A8.08,8.08,0,0,0,48.64,56L52,52.62,51.58,51,54,49l0-1.74.61-1,3.26-.82L58.47,41l-3.64-.86-11,11a8.08,8.08,0,1,0,3,13.32ZM37,62.74a2.11,2.11,0,1,1,3,0A2.11,2.11,0,0,1,37,62.74Z",
      fill: "#7d7c7c"
    }), _react.default.createElement("circle", {
      cx: "65.41",
      cy: "34.59",
      r: "5.51",
      transform: "translate(-5.3 56.38) rotate(-45)",
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