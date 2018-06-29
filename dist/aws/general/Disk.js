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
    }), _react.default.createElement("defs", null, _react.default.createElement("clipPath", {
      id: "clip-path"
    }, _react.default.createElement("path", {
      d: "M77.5,48.78v2.46a27.51,27.51,0,0,1-55,0V48.78Z",
      fill: "#4f4f4f"
    }))), _react.default.createElement("title", null, "Disk"), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M77.5,48.78v2.46a27.51,27.51,0,0,1-55,0V48.78Z",
      fill: "#4f4f4f"
    }), _react.default.createElement("g", {
      "clip-path": "url(#clip-path)"
    }, _react.default.createElement("path", {
      d: "M77.5,48.78v2.46a27.29,27.29,0,0,1-.3,4.07V52.85a27.4,27.4,0,0,0,.3-4.07",
      fill: "#4f4f4f"
    }), _react.default.createElement("path", {
      d: "M77.2,52.85v2.46a26.47,26.47,0,0,1-1.09,4.53V57.37a26.3,26.3,0,0,0,1.09-4.52",
      fill: "#4f4f4f"
    }), _react.default.createElement("path", {
      d: "M76.11,57.37v2.47a27.13,27.13,0,0,1-2.2,4.89V62.27a27,27,0,0,0,2.2-4.9",
      fill: "#4f4f4f"
    }), _react.default.createElement("path", {
      d: "M73.92,62.27v2.46A27.55,27.55,0,0,1,22.5,51.25V48.78A27.55,27.55,0,0,0,73.92,62.27",
      fill: "#4f4f4f"
    }))), _react.default.createElement("path", {
      d: "M50,21.48A27.29,27.29,0,1,1,22.5,48.77,27.4,27.4,0,0,1,50,21.48Z",
      fill: "#7d7c7c"
    }), _react.default.createElement("circle", {
      cx: "50",
      cy: "48.75",
      r: "8.5",
      fill: "none",
      stroke: "#fff",
      "stroke-miterlimit": "10"
    }), _react.default.createElement("circle", {
      cx: "50",
      cy: "48.75",
      r: "5.24",
      fill: "#fff"
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