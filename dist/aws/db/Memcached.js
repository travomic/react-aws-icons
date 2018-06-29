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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Memcached"), _react.default.createElement("rect", {
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
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "69 38.76 69 34.76 64 34.76 64 29.76 60 29.76 60 34.76 58 34.76 58 29.76 54 29.76 54 34.76 52 34.76 52 29.76 48 29.76 48 34.76 46 34.76 46 29.76 42 29.76 42 34.76 40 34.76 40 29.76 36 29.76 36 34.76 31 34.76 31 38.76 36 38.76 36 40.76 31 40.76 31 44.76 36 44.76 36 46.76 31 46.76 31 50.76 36 50.76 36 52.76 31 52.76 31 56.76 36 56.76 36 58.76 31 58.76 31 62.76 36 62.76 36 67.76 40 67.76 40 62.76 42 62.76 42 67.76 46 67.76 46 62.76 48 62.76 48 67.76 52 67.76 52 62.76 54 62.76 54 67.76 58 67.76 58 62.76 60 62.76 60 67.76 64 67.76 64 62.76 69 62.76 69 58.76 64 58.76 64 56.76 69 56.76 69 52.76 64 52.76 64 50.76 69 50.76 69 46.76 64 46.76 64 44.76 69 44.76 69 40.76 64 40.76 64 38.76 69 38.76"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M41,40.76h5.22l3.85,11h0l3.65-11H59v16H55v-11h.43l-4,11H48.6l-4-11H45v11H41Z"
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