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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Template"), _react.default.createElement("g", {
      style: {
        "isolation": "isolate"
      }
    }, _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "25.58",
      y: "32.42",
      width: "48.83",
      height: "46.07"
    })), _react.default.createElement("path", {
      style: {
        "fill": "#759c3e"
      },
      d: "M25.59,21.62V76H74.42V21.62Z"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "33.19",
      y: "28.99",
      width: "8.66",
      height: "8.66"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "45.26",
      y: "31.31",
      width: "21.59",
      height: "4"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "45.26",
      y: "46.79",
      width: "21.59",
      height: "4"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "45.26",
      y: "62.27",
      width: "21.59",
      height: "4"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "33.19",
      y: "44.46",
      width: "8.66",
      height: "8.66"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "33.19",
      y: "59.94",
      width: "8.66",
      height: "8.66"
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