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
    }), _react.default.createElement("title", null, "Cached Volume"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "76.47 19.7 76.47 82.78 57.74 82.78 57.74 72.68 42.26 72.68 42.26 82.78 23.53 82.78 23.53 19.7 76.47 19.7",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "76.47 17.22 76.47 80.3 57.74 80.3 57.74 70.2 42.26 70.2 42.26 80.3 23.53 80.3 23.53 17.22 76.47 17.22",
      fill: "#e05243"
    }), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M37.53,32.69v.23c0,2-.81,4-3.44,4-2.81,0-3.69-1.8-3.69-5.76s.88-5.76,3.7-5.76c3.17,0,3.36,2.33,3.36,3.48V29H35.68v-.19c0-1-.31-2.2-1.6-2.16s-1.9.81-1.9,4.38.59,4.47,1.9,4.47c1.49,0,1.66-1.65,1.66-2.67v-.19h1.78Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M40.89,25.58h2.28L46.1,36.66H44.24l-.69-2.72H40.29l-.72,2.72H37.71Zm2.37,7L42,27.07h0l-1.33,5.46Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M53.74,32.69v.23c0,2-.81,4-3.44,4-2.81,0-3.69-1.8-3.69-5.76s.88-5.76,3.71-5.76c3.17,0,3.36,2.33,3.36,3.48V29H51.89v-.19c0-1-.31-2.2-1.59-2.16s-1.91.81-1.91,4.38.59,4.47,1.91,4.47c1.49,0,1.66-1.65,1.66-2.67v-.19h1.78Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M55,25.58h1.78V30h3.28V25.58h1.78V36.66H60.05V31.51H56.77v5.15H55Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M63.67,25.58h6v1.49H65.45v3.07h4v1.49h-4v3.54h4.37v1.49H63.67Z",
      fill: "#fff"
    })))) // -- END of generated content.

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