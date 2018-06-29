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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Elastic Network Interface"), _react.default.createElement("circle", {
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
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "29.25 35.75 29.25 35.75 29.25 38 32.02 38 32.02 62 29.25 62 29.25 64.25 34.61 64.25 34.61 35.75 29.25 35.75 29.25 35.75 29.25 35.75"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "70.75 38.86 70.75 38.86 37.03 38.86 37.03 57.69 40.32 57.69 40.32 61.48 54.67 61.48 54.67 57.69 59.85 57.69 59.85 61.48 66.08 61.48 66.08 57.69 70.75 57.69 70.75 38.86 70.75 38.86 70.75 38.86"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#d9a741"
      },
      points: "40.66 41.63 40.66 41.63 66.6 41.63 66.6 54.75 40.66 54.75 40.66 41.63 40.66 41.63 40.66 41.63"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "43.43 43.7 43.43 43.7 52.42 43.7 52.42 52.5 43.43 52.5 43.43 43.7 43.43 43.7 43.43 43.7"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "55.19 43.7 55.19 43.7 64.18 43.7 64.18 52.5 55.19 52.5 55.19 43.7 55.19 43.7 55.19 43.7"
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