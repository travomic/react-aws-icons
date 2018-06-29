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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Peering"), _react.default.createElement("circle", {
      style: {
        "fill": "#9d5025"
      },
      cx: "50",
      cy: "51.25",
      r: "30.43"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#f58536"
      },
      cx: "50",
      cy: "48.75",
      r: "30.43"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "79.03 48.85 68.23 42.62 68.23 46.35 52.5 46.35 52.5 30.62 56.23 30.62 50 19.83 43.77 30.62 47.5 30.62 47.5 46.35 31.77 46.35 31.77 42.62 20.97 48.85 31.77 55.09 31.77 51.35 47.5 51.35 47.5 67.08 43.77 67.08 50 77.88 56.23 67.08 52.5 67.08 52.5 51.35 68.23 51.35 68.23 55.09 79.03 48.85"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M41.67,56.08c-3.09,0-5.4-2.34-5.4-4.43v-.47a5.31,5.31,0,0,1,3.44-4.63l.19-.05v-.32a6.9,6.9,0,0,1,13.18-2.87l.13.29.26-.18a3.36,3.36,0,0,1,5.26,2.65v.22l.23,0a5.43,5.43,0,0,1,4.78,4.87v.47c0,2.09-2.31,4.43-5.4,4.43Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M46.78,40.26a5.91,5.91,0,0,1,5.38,3.46l.62,1.37L54,44.24a2.36,2.36,0,0,1,3.7,1.86l0,1.11,1.12.09a4.48,4.48,0,0,1,3.86,3.88v.47c0,1.59-1.92,3.43-4.4,3.43H41.67c-2.48,0-4.4-1.85-4.4-3.43v-.47A4.33,4.33,0,0,1,40,47.52l.93-.27,0-1.09a5.89,5.89,0,0,1,5.89-5.9m0-2a7.89,7.89,0,0,0-7.88,7.53,6.43,6.43,0,0,0-3.63,5.4v.47c0,2.89,3,5.43,6.4,5.43H58.33c3.41,0,6.4-2.54,6.4-5.43v-.47a6.43,6.43,0,0,0-5.08-5.78,4.37,4.37,0,0,0-6-3.21,7.92,7.92,0,0,0-6.83-3.93Z"
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