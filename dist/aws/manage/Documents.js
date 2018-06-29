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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Documents"), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "20.23",
      y: "19.57",
      width: "7.73",
      height: "42.4"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "30.97",
      y: "30.3",
      width: "7.73",
      height: "42.4"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "79.77 83.44 79.77 54.06 66.75 41.04 41.7 41.04 41.7 83.44 79.77 83.44"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "53.01 24.3 45.27 16.56 20.23 16.56 20.23 58.96 27.96 58.96 27.96 24.3 53.01 24.3"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "63.74 35.03 56.01 27.3 30.97 27.3 30.97 69.7 38.7 69.7 38.7 35.03 63.74 35.03"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "79.77 80.43 79.77 51.06 66.75 38.04 41.7 38.04 41.7 80.43 79.77 80.43"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "64.11",
      y: "38.04",
      width: "2.6",
      height: "15.62"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "64.11",
      y: "51.06",
      width: "15.66",
      height: "2.6"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "46.91",
      y: "51.06",
      width: "11.88",
      height: "2.6"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "46.91",
      y: "60.66",
      width: "27.92",
      height: "2.6"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "46.91",
      y: "70.26",
      width: "27.92",
      height: "2.6"
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