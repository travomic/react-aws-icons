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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Attribute"), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "47 79.24 22 79.24 22 76.76 34.5 69.74 47 76.76 47 79.24"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "78 79.24 53 79.24 53 76.76 65.5 69.74 78 76.76 78 79.24"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "47 48.24 22 48.24 22 45.76 34.5 38.74 47 45.76 47 48.24"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "78 48.24 53 48.24 53 45.76 65.5 38.74 78 45.76 78 48.24"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "22",
      y: "20.76",
      width: "25",
      height: "25"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "53",
      y: "20.76",
      width: "25",
      height: "25"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "22",
      y: "51.76",
      width: "25",
      height: "25"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "53",
      y: "51.76",
      width: "25",
      height: "25"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#fff"
      },
      cx: "34.5",
      cy: "33.26",
      r: "8.67"
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