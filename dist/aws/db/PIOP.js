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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "PIOP"), _react.default.createElement("rect", {
      style: {
        "fill": "#19486f"
      },
      x: "23.5",
      y: "24.74",
      width: "53",
      height: "53",
      rx: "9.12",
      ry: "9.12"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "23.5",
      y: "22.26",
      width: "53",
      height: "53",
      rx: "9.12",
      ry: "9.12"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M72.5,67.47a4,4,0,0,1-4,4h-19a4,4,0,0,1-4-4v-6a4,4,0,0,1,4-4h19a4,4,0,0,1,4,4Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M68.5,72h-19a4.5,4.5,0,0,1-4.5-4.5v-6A4.5,4.5,0,0,1,49.5,57h19a4.5,4.5,0,0,1,4.5,4.5v6A4.5,4.5,0,0,1,68.5,72Zm-19-14a3.5,3.5,0,0,0-3.5,3.5v6A3.5,3.5,0,0,0,49.5,71h19a3.5,3.5,0,0,0,3.5-3.5v-6A3.5,3.5,0,0,0,68.5,58Z"
    }), _react.default.createElement("g", {
      style: {
        "isolation": "isolate"
      }
    }, _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M49.55,60.65h2.77A2.08,2.08,0,0,1,54.48,63,2.2,2.2,0,0,1,52,65.37h-.85V68.5H49.55Zm1.58,3.55h.7c.63,0,1.06-.37,1.06-1.18s-.31-1.21-1.1-1.21h-.66Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M55.33,68.5V60.65h1.58V68.5Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M60.6,60.49c2.38,0,2.67,1.69,2.67,4.08s-.3,4.08-2.67,4.08S57.93,67,57.93,64.58,58.23,60.49,60.6,60.49Zm0,7c.93,0,1.09-.8,1.09-2.92s-.15-2.92-1.09-2.92-1.09.81-1.09,2.92S59.67,67.49,60.6,67.49Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M64.21,60.65H67A2.08,2.08,0,0,1,69.14,63a2.2,2.2,0,0,1-2.5,2.37h-.85V68.5H64.21Zm1.58,3.55h.7c.63,0,1.06-.37,1.06-1.18s-.31-1.21-1.1-1.21h-.66Z"
    }))) // -- END of generated content.

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