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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Redis"), _react.default.createElement("rect", {
      style: {
        "fill": "#19486f"
      },
      x: "23.5",
      y: "24.74",
      width: "53",
      height: "53",
      rx: "9.12",
      ry: "9.12"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "23.5",
      y: "22.26",
      width: "53",
      height: "53",
      rx: "9.12",
      ry: "9.12"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "69 39 69 35 64 35 64 30 60 30 60 35 58 35 58 30 54 30 54 35 52 35 52 30 48 30 48 35 46 35 46 30 42 30 42 35 40 35 40 30 36 30 36 35 31 35 31 39 36 39 36 41 31 41 31 45 36 45 36 47 31 47 31 51 36 51 36 53 31 53 31 57 36 57 36 59 31 59 31 63 36 63 36 68 40 68 40 63 42 63 42 68 46 68 46 63 48 63 48 68 52 68 52 63 54 63 54 68 58 68 58 63 60 63 60 68 64 68 64 63 69 63 69 59 64 59 64 57 69 57 69 53 64 53 64 51 69 51 69 47 64 47 64 45 69 45 69 41 64 41 64 39 69 39"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M42,40h9.93a4.71,4.71,0,0,1,5,4.84,4.39,4.39,0,0,1-3,4.39v.05c2,.49,2.62,2.56,2.75,4.33.07,1.11.2,3.38.9,4.38H53.74c-.47-1-.42-2.87-.62-4.28-.27-1.85-1-2.72-3-2.72H46v7H42Zm4,8h4.53c1.74,0,2.69-.76,2.69-2.54S52.27,43,50.53,43H46Z"
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