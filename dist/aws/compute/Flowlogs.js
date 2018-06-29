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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Flowlogs"), _react.default.createElement("circle", {
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
      x: "38.17",
      y: "58.96",
      width: "19.41",
      height: "2.81"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "38.17",
      y: "53.15",
      width: "19.41",
      height: "2.81"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "38.17",
      y: "41.54",
      width: "19.41",
      height: "2.81"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "24.34",
      y: "47.15",
      width: "44.34",
      height: "3.21"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "38.17",
      y: "35.74",
      width: "19.41",
      height: "2.81"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "62.05 45.82 59.25 45.82 59.25 33.07 36.49 33.07 36.49 45.77 33.69 45.77 33.69 30.26 62.05 30.26 62.05 45.82"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "62.05 67.24 33.69 67.24 33.69 51.8 36.49 51.8 36.49 64.43 59.25 64.43 59.25 51.99 62.05 51.99 62.05 67.24"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "67.26 41.91 75.66 48.75 67.26 55.88 67.26 41.91"
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