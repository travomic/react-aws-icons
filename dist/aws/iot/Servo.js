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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Servo"), _react.default.createElement("rect", {
      style: {
        "fill": "#19486f"
      },
      x: "12.5",
      y: "54.34",
      width: "75",
      height: "22.17"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "12.5",
      y: "23.49",
      width: "75",
      height: "49.87"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "28",
      y: "43.34",
      width: "9.67",
      height: "9.67",
      rx: "4.83",
      ry: "4.83"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fff"
      },
      points: "56.17 53.01 43.67 53.01 49.92 43.34 56.17 53.01"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "62.17",
      y: "43.34",
      width: "9.67",
      height: "9.67"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M50.78,23.49,51,25.08a.47.47,0,0,0,.53.4l1.78-.25a10.69,10.69,0,0,0,1.61,3.06l-1.2,1.32a.47.47,0,0,0,0,.67l2.26,2a.47.47,0,0,0,.67,0L57.88,31a10.76,10.76,0,0,0,3.21,1.31L61,34.06a.47.47,0,0,0,.46.49l3,.11a.47.47,0,0,0,.49-.46l.06-1.75a9.93,9.93,0,0,0,3.31-1.07l1.08,1.39a.47.47,0,0,0,.67.08L72.54,31a.47.47,0,0,0,.08-.67l-1.08-1.39A10.76,10.76,0,0,0,73.38,26l1.73.37a.47.47,0,0,0,.56-.36l.54-2.5Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M46.57,71.7l1.59-.84a.47.47,0,0,0,.2-.64l-1.43-2.69a.47.47,0,0,0-.64-.2l-1.61.85a10.71,10.71,0,0,0-2.55-2.3l.69-1.69a.47.47,0,0,0-.26-.62l-2.82-1.15a.47.47,0,0,0-.62.26l-.69,1.7A10.64,10.64,0,0,0,35,64.27l-.57-1.75a.47.47,0,0,0-.6-.31l-2.9.94a.47.47,0,0,0-.31.6l.57,1.75a10.64,10.64,0,0,0-2.7,2.09l-1.56-1a.47.47,0,0,0-.65.15l-1.62,2.58a.47.47,0,0,0,.15.65l1.54,1a10.56,10.56,0,0,0-.63,2.39H46.94A10.58,10.58,0,0,0,46.57,71.7Z"
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