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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Cloud Watch"), _react.default.createElement("rect", {
      style: {
        "fill": "#9d5025"
      },
      x: "23.5",
      y: "24.74",
      width: "53",
      height: "53",
      rx: "9.12",
      ry: "9.12"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#f58536"
      },
      x: "23.5",
      y: "22.26",
      width: "53",
      height: "53",
      rx: "9.12",
      ry: "9.12"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "51.1",
      y: "54.94",
      width: "5.68",
      height: "11.29"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "58.07",
      y: "49.14",
      width: "5.69",
      height: "17.08"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "65.04",
      y: "58.79",
      width: "5.69",
      height: "7.43"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "70.31 67.06 51.47 67.06 50.64 67.06 50.64 67.88 50.64 69.31 50.64 70.12 51.47 70.12 70.31 70.12 71.13 70.12 71.13 69.31 71.13 67.88 71.13 67.06 70.31 67.06"
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