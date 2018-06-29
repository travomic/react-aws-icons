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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "ECR"), _react.default.createElement("circle", {
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
      points: "51.97 45.45 48.04 45.45 45.93 27.32 54.08 27.32 51.97 45.45"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "67.6 58.8 69.17 57.5 63.48 49 51.02 44.65 50 51.53 61.23 52.58 67.6 58.8"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "32.4 58.8 30.84 57.5 36.52 49 48.98 44.65 50 51.53 38.77 52.58 32.4 58.8"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#fff"
      },
      cx: "50",
      cy: "27.32",
      r: "5.65"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M50,33.47a6.15,6.15,0,1,1,6.15-6.15A6.16,6.16,0,0,1,50,33.47Zm0-11.3a5.15,5.15,0,1,0,5.15,5.15A5.15,5.15,0,0,0,50,22.17Z"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#f58536"
      },
      cx: "50",
      cy: "27.32",
      r: "1.85"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#fff"
      },
      cx: "50",
      cy: "48.02",
      r: "4.07"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M50,52.59A4.57,4.57,0,1,1,54.58,48,4.58,4.58,0,0,1,50,52.59Zm0-8.15A3.57,3.57,0,1,0,53.58,48,3.58,3.58,0,0,0,50,44.45Z"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#f58536"
      },
      cx: "50",
      cy: "48.02",
      r: "1.25"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "36.87",
      y: "57.4",
      width: "26.26",
      height: "14.51"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fbbf93"
      },
      x: "38.19",
      y: "58.57",
      width: "2",
      height: "12.17"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fbbf93"
      },
      x: "41.79",
      y: "58.57",
      width: "2",
      height: "12.17"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fbbf93"
      },
      x: "45.4",
      y: "58.57",
      width: "2",
      height: "12.17"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fbbf93"
      },
      x: "49",
      y: "58.57",
      width: "2",
      height: "12.17"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fbbf93"
      },
      x: "52.6",
      y: "58.57",
      width: "2",
      height: "12.17"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fbbf93"
      },
      x: "56.21",
      y: "58.57",
      width: "2",
      height: "12.17"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fbbf93"
      },
      x: "59.81",
      y: "58.57",
      width: "2",
      height: "12.17"
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