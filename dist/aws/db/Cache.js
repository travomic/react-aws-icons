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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Cache"), _react.default.createElement("rect", {
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
      d: "M37.48,36v.23c0,2-.81,4-3.44,4-2.82,0-3.7-1.82-3.7-5.81s.88-5.81,3.71-5.81c3.18,0,3.37,2.35,3.37,3.51v.2H35.63v-.19c0-1-.31-2.22-1.6-2.18s-1.91.81-1.91,4.42.59,4.51,1.91,4.51c1.49,0,1.66-1.66,1.66-2.69V36Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M40.85,28.82h2.29L46.08,40H44.22l-.69-2.74H40.26L39.54,40H37.67Zm2.38,7-1.28-5.51h0l-1.33,5.51Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M53.74,36v.23c0,2-.81,4-3.44,4-2.82,0-3.7-1.82-3.7-5.81s.88-5.81,3.71-5.81c3.18,0,3.37,2.35,3.37,3.51v.2H51.89v-.19c0-1-.31-2.22-1.6-2.18s-1.91.81-1.91,4.42.59,4.51,1.91,4.51c1.49,0,1.66-1.66,1.66-2.69V36Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M55,28.82h1.78V33.3h3.29V28.82h1.79V40H60.07V34.8H56.78V40H55Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M63.7,28.82h6v1.5H65.49v3.1h4v1.5h-4V38.5h4.38V40H63.7Z"
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