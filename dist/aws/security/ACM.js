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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "ACM"), _react.default.createElement("path", {
      style: {
        "fill": "#4b612c"
      },
      d: "M79.5,79.9h-59a3,3,0,0,1-3-3V31a3,3,0,0,1,3-3H79.6a3,3,0,0,1,3,3V77A3.08,3.08,0,0,1,79.5,79.9Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#759c3e"
      },
      d: "M79.5,75.9h-59a3,3,0,0,1-3-3V27a3,3,0,0,1,3-3H79.6a3,3,0,0,1,3,3V73A3.08,3.08,0,0,1,79.5,75.9Z"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "30.3",
      y: "28.1",
      width: "48.7",
      height: "4.4"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#fff"
      },
      cx: "23.8",
      cy: "30.3",
      r: "3.5"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "21",
      y: "36.8",
      width: "58",
      height: "35.1"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "55.5 58.1 55.3 58.7 54.8 60.1 53.5 59.5 52.9 59.2 52.6 59.7 51.7 60.9 50.6 60 50.1 59.6 49.7 60 48.5 60.9 47.7 59.7 47.4 59.2 46.8 59.5 45.5 60.1 45 58.7 44.8 58.1 43.8 58.3 43 58.3 43 69.3 50 63.4 57 69.3 57 58.3 56.3 58.3 55.5 58.1"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "59.1 48.8 60.3 47.5 58.8 46.5 59.6 44.9 57.9 44.3 58.3 42.6 56.5 42.4 56.4 40.7 54.6 41 54.1 39.4 52.5 40.1 51.5 38.7 50.1 39.8 48.8 38.7 47.8 40.1 46.2 39.4 45.6 41 43.9 40.7 43.8 42.4 42 42.6 42.3 44.3 40.7 44.9 41.4 46.5 40 47.5 41.1 48.8 40 50.1 41.4 51.1 40.7 52.7 42.3 53.3 41.8 55 43.2 55.2 43.5 55.2 43.8 56.9 45.6 56.6 46.2 58.3 47.8 57.5 48.8 59 50.1 57.8 51.5 59 52.5 57.5 54.1 58.3 54.6 56.6 56.4 56.9 56.6 55.2 56.7 55.2 58.3 55 57.9 53.3 59.6 52.7 58.8 51.1 60.3 50.1 59.1 48.8"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "48.4 49.8 45.9 47.1 43.1 49.9 43.1 49.9 48.3 55.1 57.1 46.3 55.1 44.2 48.4 49.8"
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