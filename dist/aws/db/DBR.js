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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "DBR"), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M71.82,29.66c0,3-9.77,5.5-21.82,5.5s-21.82-2.46-21.82-5.5V27.18l21.82-3,21.82,3Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M50,39.56,28.18,70.34v2.48c0,3,9.77,5.5,21.82,5.5s21.82-2.46,21.82-5.5V70.34Z"
    }), _react.default.createElement("ellipse", {
      style: {
        "fill": "#2e73b8"
      },
      cx: "50",
      cy: "27.18",
      rx: "21.82",
      ry: "5.5"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M50,37.08c-12.05,0-21.82-2.46-21.82-5.5V70.34c0,3,9.77,5.5,21.82,5.5s21.82-2.46,21.82-5.5V31.58C71.82,34.62,62.05,37.08,50,37.08Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M39.52,44.23H52.36c4.45,0,8.82,2,8.82,7.09a6.48,6.48,0,0,1-4,6.32v.07c2.68.64,3.46,3.64,3.67,6,.07,1.06.18,4.76,1.06,5.68H55.47c-.57-.85-.67-3.32-.74-4-.18-2.54-.6-5.15-3.67-5.15h-5v9.18H39.52Zm6.56,10.94h5.51a2.7,2.7,0,0,0,3-3c0-1.87-1.48-2.72-3.32-2.72H46.08Z"
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