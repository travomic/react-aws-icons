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
    }), _react.default.createElement("title", null, "Kinesis"), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M80.92,66c0,9.58-5.45,14.18-12.18,14.18S56.57,76,56.57,66.79c0-6.73,5.45-9.93,12.18-9.93S80.92,59.31,80.92,66Z",
      fill: "#9d5025"
    }), _react.default.createElement("circle", {
      cx: "68.75",
      cy: "66.04",
      r: "12.18",
      fill: "#f58534"
    }), _react.default.createElement("g", {
      style: {
        "isolation": " isolate"
      }
    }, _react.default.createElement("path", {
      d: "M64.86,60h1.71v6.41L73.08,60H75.3l-5.42,5.19,5.64,7.67H73.36l-4.65-6.5-2.14,2v4.5H64.86Z",
      fill: "#fff"
    })), _react.default.createElement("path", {
      d: "M68.24,22.62,28.19,19.79a5.16,5.16,0,0,0-5.11,5.09V71.62a4.91,4.91,0,0,0,.17,1.23,4.73,4.73,0,0,0,3.88,3.82,4.85,4.85,0,0,0,.8.09v0H57.1A17.17,17.17,0,0,1,55,73.52l-18.29-.29C44,70,53.38,65.47,53.39,63.31c0-3.53,8.35-16.52,22.69-9.45V24.62C76.08,21.86,71,22.62,68.24,22.62Z",
      fill: "#9d5025"
    }), _react.default.createElement("path", {
      d: "M53.17,66A16.45,16.45,0,0,1,69.59,49.46a15.64,15.64,0,0,1,6.49,1.39V24.62a4.57,4.57,0,0,0-4.46-4.83H27.93a4.91,4.91,0,0,0-4.86,4.83V69a4.84,4.84,0,0,0,4.86,4.75H55.09A15.64,15.64,0,0,1,53.17,66Z",
      fill: "#f58534"
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