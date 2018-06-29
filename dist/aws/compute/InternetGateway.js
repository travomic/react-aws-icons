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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Internet Gateway"), _react.default.createElement("circle", {
      style: {
        "fill": "#9d5025"
      },
      cx: "50",
      cy: "51.25",
      r: "30.43"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#9d5025"
      },
      x: "19.57",
      y: "48.75",
      width: "60.86",
      height: "2.5"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#f58536"
      },
      cx: "50",
      cy: "48.75",
      r: "30.43"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M27.06,51.77V51a10,10,0,0,1,5.63-8.39A12.32,12.32,0,0,1,55.63,37,6.82,6.82,0,0,1,65,42c4.59.9,7.9,5.29,7.9,9v.73c0,4.5-4.66,8.45-10,8.45H37C31.72,60.22,27.06,56.27,27.06,51.77Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M56.25,40.24l-1.94,1.33-1-2.14A9.19,9.19,0,0,0,45,34a9.17,9.17,0,0,0-9.17,9.18l0,1.7-1.44.42A6.74,6.74,0,0,0,30.19,51v.73c0,2.47,3,5.34,6.85,5.34H63c3.85,0,6.84-2.87,6.84-5.34V51c0-2.48-2.77-5.75-6-6l-1.74-.14L62,43.14a3.67,3.67,0,0,0-5.75-2.89Z"
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