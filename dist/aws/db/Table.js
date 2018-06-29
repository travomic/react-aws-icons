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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Table"), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "29.5 32.74 20 32.74 20 30.26 24.75 23.24 29.5 30.26 29.5 32.74"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "80 32.74 33.5 32.74 33.5 30.26 56.75 23.24 80 30.26 80 32.74"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "29.5 48.24 20 48.24 20 45.76 24.75 38.74 29.5 45.76 29.5 48.24"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "80 48.24 33.5 48.24 33.5 45.76 56.75 38.74 80 45.76 80 48.24"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "29.5 63.74 20 63.74 20 61.26 24.75 54.24 29.5 61.26 29.5 63.74"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "80 63.74 33.5 63.74 33.5 61.26 56.75 54.24 80 61.26 80 63.74"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "29.5 79.24 20 79.24 20 76.76 24.75 69.74 29.5 76.76 29.5 79.24"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "80 79.24 33.5 79.24 33.5 76.76 56.75 69.74 80 76.76 80 79.24"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "33.5",
      y: "20.76",
      width: "46.5",
      height: "9.5"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "33.5",
      y: "36.26",
      width: "46.5",
      height: "9.5"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "33.5",
      y: "51.76",
      width: "46.5",
      height: "9.5"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "33.5",
      y: "67.26",
      width: "46.5",
      height: "9.5"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "20",
      y: "20.76",
      width: "9.5",
      height: "9.5"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "20",
      y: "36.26",
      width: "9.5",
      height: "9.5"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "20",
      y: "51.76",
      width: "9.5",
      height: "9.5"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "20",
      y: "67.26",
      width: "9.5",
      height: "9.5"
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