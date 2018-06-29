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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Long Term Credential"), _react.default.createElement("rect", {
      style: {
        "fill": "#7d7c7c"
      },
      x: "23.5",
      y: "31.28",
      width: "53",
      height: "39.92",
      rx: "6.21",
      ry: "6.21"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "23.5",
      y: "28.8",
      width: "53",
      height: "39.92",
      rx: "6.21",
      ry: "6.21"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#759c3e"
      },
      cx: "63.25",
      cy: "41.52",
      r: "9.53"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#fff"
      },
      cx: "67.42",
      cy: "41.52",
      r: "2.49"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "60.02 45.57 49 45.57 48 43.84 44.27 44.19 42.84 42.72 41.53 42.43 38.13 44.47 33.91 41.22 36.23 37.48 60.02 37.48 60.02 45.57"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#7d7c7c"
      },
      cx: "36.75",
      cy: "56.19",
      r: "9.53"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#fff"
      },
      cx: "32.58",
      cy: "56.19",
      r: "2.49"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#7d7c7c"
      },
      points: "39.98 52.14 51 52.14 52 53.88 55.73 53.53 57.16 54.99 58.47 55.28 61.87 53.24 66.09 56.49 63.77 60.24 39.98 60.24 39.98 52.14"
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