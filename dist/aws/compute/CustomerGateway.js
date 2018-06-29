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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Customer Gateway"), _react.default.createElement("circle", {
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
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "47.5",
      y: "30.62",
      width: "5",
      height: "36.46"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "43.77 32.44 50 21.65 56.23 32.44 43.77 32.44"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "43.77 65.26 50 76.05 56.23 65.26 43.77 65.26"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "31.77",
      y: "46.35",
      width: "36.46",
      height: "5"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "33.59 55.09 22.8 48.85 33.59 42.62 33.59 55.09"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "66.41 55.09 77.2 48.85 66.41 42.62 66.41 55.09"
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