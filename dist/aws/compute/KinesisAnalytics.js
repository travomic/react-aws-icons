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
    }), _react.default.createElement("title", null, "Kinesis Analytics"), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M67.38,23.8H32.62a9.12,9.12,0,0,0-9.12,9.12v16.5A14.38,14.38,0,0,1,38.23,65.06a12.9,12.9,0,0,1-1.32,2.67v2.2A9.53,9.53,0,0,1,49.34,76.8h18a9.12,9.12,0,0,0,9.12-9.12V32.92A9.12,9.12,0,0,0,67.38,23.8Z",
      fill: "#9d5025"
    }), _react.default.createElement("path", {
      d: "M67.38,21.6H32.62a9.12,9.12,0,0,0-9.12,9.12v16.5a14.37,14.37,0,0,1,13.4,20.5A9.53,9.53,0,0,1,49.34,74.6h18a9.12,9.12,0,0,0,9.12-9.12V30.72A9.12,9.12,0,0,0,67.38,21.6Z",
      fill: "#f58534"
    }), _react.default.createElement("path", {
      d: "M35.22,61.88v-2.5l-3.87-.57a10.47,10.47,0,0,0-2.8-2.6l.79-4.61-4.12,1-.79,2.12a10.47,10.47,0,0,0-3.81.13L15.7,52.08v2.5l.93,2.05A10.47,10.47,0,0,0,14,59.42l-3.65.83v2.5l2.11.79a10.58,10.58,0,0,0-.12,1.58c0,.75-1.79.67-1.79.67v2.5l1.82,4,2-.92a10.4,10.4,0,0,0,2.06,2.09l0,.11v2.5l4.12,1.54.78-2.08a10.47,10.47,0,0,0,3.84-.13l.92,2,4-1.82v-2.5l-.09-.2a10.52,10.52,0,0,0,1.78-2.13l2.08.78,1.54-4.12v-2.5l-2.09,1.72a10.47,10.47,0,0,0-.13-3.83Z",
      fill: "#9d5025"
    }), _react.default.createElement("path", {
      d: "M45.56,80.12l1.93-.6V77l-3-.43a6.47,6.47,0,0,0-2.23-2l.44-2v-2.5l-4.06,3.67a6.48,6.48,0,0,0-2.26.56,6.56,6.56,0,0,0-.64.34l-4-1.15V76l1.49,1.37c-.13.27-.33.82-.33.82l-2.26.24v2.5l1.11,3.53,1.94-.61a6.46,6.46,0,0,0,1.78,1.78v2.25l3.61.81.44-2a6.48,6.48,0,0,0,2.26-.56,6.56,6.56,0,0,0,.64-.34l1.49,1.37,2.51-2.72v-2.5l-.92-.62A6.55,6.55,0,0,0,45.56,80.12Z",
      fill: "#9d5025"
    }), _react.default.createElement("path", {
      d: "M35.22,59.38l-1.82-4-2,.93a10.47,10.47,0,0,0-2.8-2.6l.79-2.11-4.12-1.54-.79,2.12a10.47,10.47,0,0,0-3.81.13l-.94-2.05-4,1.82.93,2.05A10.47,10.47,0,0,0,14,56.92l-2.11-.79-1.54,4.12,2.11.79a10.47,10.47,0,0,0,.12,3.82l-2,.93,1.82,4,2-.92a10.47,10.47,0,0,0,2.8,2.62l-.78,2.09,4.12,1.54L21.34,73a10.47,10.47,0,0,0,3.84-.13l.92,2,4-1.82-.92-2a10.47,10.47,0,0,0,2.61-2.81l2.08.78,1.54-4.12-2.09-.78a10.47,10.47,0,0,0-.13-3.83Z",
      fill: "#f58534"
    }), _react.default.createElement("path", {
      d: "M45.56,77.62l1.93-.6-1.11-3.53-1.94.61a6.47,6.47,0,0,0-2.23-2l.44-2-3.61-.81-.44,2a6.48,6.48,0,0,0-2.26.56,6.56,6.56,0,0,0-.64.34l-1.49-1.37-2.51,2.72,1.49,1.37a6.53,6.53,0,0,0-.66,3l-1.93.6,1.11,3.53,1.94-.61a6.47,6.47,0,0,0,2.23,2l-.44,2,3.61.81.44-2a6.48,6.48,0,0,0,2.26-.56,6.56,6.56,0,0,0,.64-.34l1.49,1.37,2.51-2.72L44.9,80.58A6.53,6.53,0,0,0,45.56,77.62Z",
      fill: "#f58534"
    }), _react.default.createElement("circle", {
      cx: "22.91",
      cy: "62.6",
      r: "2.75",
      transform: "translate(-23.89 15.13) rotate(-24.49)",
      fill: "#fff"
    }), _react.default.createElement("circle", {
      cx: "39.05",
      cy: "77.71",
      r: "1.78",
      transform: "translate(-28.71 23.19) rotate(-24.5)",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "58.66 47.05 69.69 36.01 66.68 33 58.66 24.98 58.66 28.97 46.19 28.97 46.19 33 46.19 43 58.66 43 58.66 47.05",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "42.34 33 42.34 28.97 28.54 28.97 28.54 33 28.54 43 42.34 43 42.34 33",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "73.54 59.62 70.53 56.61 62.51 48.59 62.51 52.57 50.04 52.57 50.04 56.61 50.04 66.61 62.51 66.61 62.51 70.65 73.54 59.62",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M37,55.64c.15.33.26.66.39,1a14.3,14.3,0,0,1,0,10h8.84v-14H35.11A14.38,14.38,0,0,1,37,55.64Z",
      fill: "#fff"
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