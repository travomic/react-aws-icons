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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Elastic Beanstalk"), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "39.8 13.94 39.8 50 35.59 50 35.59 83.96 50 91.16 58.67 50 50 8.84 39.8 13.94"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "50 8.84 50 50 50 91.16 60.2 86.06 60.2 50 64.41 50 64.41 16.04 50 8.84"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#6b3a19"
      },
      points: "79.74 39.48 61.51 41.2 55.52 40.45 74.52 21.1 79.74 39.48"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "74.52 21.1 79.74 23.71 79.74 39.48 74.52 38.44 74.52 21.1"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "55.52 40.45 74.52 38.44 74.52 21.1 55.52 26.24 55.52 40.45"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fbbf93"
      },
      points: "20.26 60.52 38.49 58.8 44.48 59.55 25.48 78.9 20.26 60.52"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "25.48 78.9 20.26 76.29 20.26 60.52 25.48 61.62 25.48 78.9"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "44.48 59.55 25.48 61.62 25.48 78.9 44.48 73.76 44.48 59.55"
    }), _react.default.createElement("text", {
      style: {
        "font-size": "21px",
        "font-family": "HelveticaNeue-CondensedBold, Helvetica Neue",
        "font-weight": "700"
      },
      transform: "translate(-2.08 -31.35)"
    }, "AWS Elastic ", _react.default.createElement("tspan", {
      x: "10.49",
      y: "25.2"
    }, "Beanstalk"))) // -- END of generated content.

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