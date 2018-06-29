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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Parameter Store"), _react.default.createElement("path", {
      style: {
        "fill": "#4b612c"
      },
      d: "M60.7,73.13h0a7.85,7.85,0,0,1,6.89-7.47v-34H27.37V76H60.7V73.13Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#759c3e"
      },
      d: "M60.65,71h0a7.85,7.85,0,0,1,6.94-7.48V29.67H27.37V73.85H60.65V71Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#4b612c"
      },
      d: "M74.59,77.44V72.82a6.15,6.15,0,0,0-12.21,0v4.63H59.23V87.69H77.66V77.44Zm-3,0H65.33l0-4.63A2.87,2.87,0,0,1,68.49,70a3,3,0,0,1,3.14,2.82Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#759c3e"
      },
      d: "M74.59,75.28V70.65a6.15,6.15,0,0,0-12.21,0v4.63H59.23V85.53H77.66V75.28Zm-3,0H65.33l0-4.63a2.87,2.87,0,0,1,3.14-2.82,3,3,0,0,1,3.14,2.82Z"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4b612c"
      },
      points: "66.69 24.75 66.69 26.89 27.89 26.89 27.89 24.75 47.29 19.51 66.69 24.75"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759c3e"
      },
      points: "61.21 19.23 33.78 19.23 27.89 24.75 28.31 24.75 66.69 24.75 61.21 19.23"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "40.6",
      y: "56.54",
      width: "13.76",
      height: "2.81"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "40.6",
      y: "50.15",
      width: "13.76",
      height: "2.81"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "40.6",
      y: "43.76",
      width: "13.76",
      height: "2.81"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M35.29,37.37V65.74h24.4V37.37ZM56.88,62.93H38.09V40.18H56.88Z"
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