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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Checklist Security"), _react.default.createElement("path", {
      style: {
        "fill": "#4b612c"
      },
      d: "M50.61,55.69a10.59,10.59,0,0,1,9.09-5.17c.16,0,.32,0,.48,0h1.2v-29H23.32v42.4H49.1V61.13A10.54,10.54,0,0,1,50.61,55.69Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#759c3e"
      },
      d: "M50.61,53.21A10.59,10.59,0,0,1,59.7,48c.16,0,.32,0,.48,0h1.2V19H23.32v42.4H49.1V58.65A10.54,10.54,0,0,1,50.61,53.21Z"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "40.21",
      y: "26.6",
      width: "16.83",
      height: "3.12"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "40.21",
      y: "38.66",
      width: "16.83",
      height: "3.12"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "28.66",
      y: "25.3",
      width: "2.85",
      height: "5.72",
      transform: "translate(-11.1 29.52) rotate(-45)"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "28.78",
      y: "25.57",
      width: "9.17",
      height: "2.79",
      transform: "translate(-9.3 31.49) rotate(-45)"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "28.78",
      y: "37.46",
      width: "9.17",
      height: "2.79",
      transform: "translate(-17.7 34.97) rotate(-45)"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "28.78",
      y: "49.35",
      width: "9.17",
      height: "2.79",
      transform: "translate(-26.11 38.45) rotate(-45)"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "28.66",
      y: "37.19",
      width: "2.85",
      height: "5.72",
      transform: "translate(-19.51 33) rotate(-45)"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "28.66",
      y: "49.08",
      width: "2.85",
      height: "5.72",
      transform: "translate(-27.91 36.49) rotate(-45)"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M40.21,53.85H50.28c.11-.21.21-.43.33-.64a10.68,10.68,0,0,1,2.08-2.48H40.21Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#4b612c"
      },
      d: "M67.82,66.32V60.18a8.16,8.16,0,0,0-16.2,0v6.14H47.42V79.94H71.89V66.32Zm-4,0H55.52l0-6.14a3.81,3.81,0,0,1,4.17-3.75,4,4,0,0,1,4.17,3.75Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#759c3e"
      },
      d: "M67.82,63.84V57.7a8.16,8.16,0,0,0-16.2,0v6.14H47.42V77.46H71.89V63.84Zm-4,0H55.52l0-6.14A3.81,3.81,0,0,1,59.72,54a4,4,0,0,1,4.17,3.75Z"
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