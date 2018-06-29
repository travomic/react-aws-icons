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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "AVS"), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "60",
      y: "14.4",
      width: "4",
      height: "13.65"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "36",
      y: "14.4",
      width: "4",
      height: "13.65"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "54",
      y: "14.4",
      width: "4",
      height: "13.65"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "42",
      y: "14.4",
      width: "4",
      height: "13.65"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "48",
      y: "14.4",
      width: "4",
      height: "13.65"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#19486f"
      },
      cx: "68.75",
      cy: "72.4",
      r: "12.18"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M68.75,58.22a14.1,14.1,0,0,1,7.75,2.32V35.13A9.12,9.12,0,0,0,67.38,26H32.62a9.12,9.12,0,0,0-9.12,9.12V69.89A9.12,9.12,0,0,0,32.62,79H56.21A14.17,14.17,0,0,1,68.75,58.22Z"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#2e73b8"
      },
      cx: "68.75",
      cy: "69.9",
      r: "12.18"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M68.75,55.72A14.1,14.1,0,0,1,76.5,58V32.63a9.12,9.12,0,0,0-9.12-9.12H32.62a9.12,9.12,0,0,0-9.12,9.12V67.39a9.12,9.12,0,0,0,9.12,9.12H56.21A14.17,14.17,0,0,1,68.75,55.72Z"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "36",
      y: "69.88",
      width: "4",
      height: "15.72"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "42",
      y: "69.88",
      width: "4",
      height: "15.72"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "48",
      y: "69.88",
      width: "4",
      height: "15.72"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "14.4",
      y: "60",
      width: "18.1",
      height: "4"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "14.4",
      y: "42",
      width: "18.1",
      height: "4"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "14.4",
      y: "54",
      width: "18.1",
      height: "4"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "14.4",
      y: "48",
      width: "18.1",
      height: "4"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "14.4",
      y: "36",
      width: "18.1",
      height: "4"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "69.67",
      y: "36",
      width: "15.94",
      height: "4"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "69.67",
      y: "48",
      width: "15.94",
      height: "4"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "69.67",
      y: "42",
      width: "15.94",
      height: "4"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#00b3ff"
      },
      d: "M68.75,60.22a9.68,9.68,0,0,0-1.3,19.26l.07,0v-2a1.32,1.32,0,0,0-.91-1.25,6.64,6.64,0,1,1,8.7-7.37c.75,4.46-3.3,8.64-7.79,10.64v0a9.68,9.68,0,1,0,1.24-19.27Z"
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