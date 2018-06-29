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
    }), _react.default.createElement("title", null, "Virtual Tape Library"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "76.47 19.7 76.47 82.78 57.74 82.78 57.74 72.68 42.26 72.68 42.26 82.78 23.53 82.78 23.53 19.7 76.47 19.7",
      fill: "#8c3123"
    }), _react.default.createElement("polygon", {
      points: "76.47 17.22 76.47 80.3 57.74 80.3 57.74 70.2 42.26 70.2 42.26 80.3 23.53 80.3 23.53 17.22 76.47 17.22",
      fill: "#e05243"
    }), _react.default.createElement("path", {
      d: "M67.63,44.5a13.1,13.1,0,0,0-3.75-1.09c-.75-.08-2,1.36-2.75,1.43a10.7,10.7,0,0,0-8.64,6.06,10.88,10.88,0,0,0,.09,9.39c.24.49-6.52,1.46-6.14.94a10.65,10.65,0,0,0-8.09-16.92c-.18,0-1.37-1.56-1.56-1.56a7.16,7.16,0,0,0-4.19,1.16c-.31.17-.57,2.07-.86,2.27A10.7,10.7,0,0,0,37.79,65.7,10.11,10.11,0,0,0,43,64.3a11.49,11.49,0,0,0,1.9.1,33.6,33.6,0,0,0,10.5-.7,16.44,16.44,0,0,0,2.2,1.4A10.79,10.79,0,0,0,71.89,60a10.65,10.65,0,0,0-3.36-13.19C68,46.43,68.25,44.79,67.63,44.5ZM35,60.6l-1.5,1.2c-.8.7-3.34-1.92-3-2.6a2.17,2.17,0,0,1,.48-.6l1.5-1.3a2,2,0,0,1,2.8.3v.2A2,2,0,0,1,35,60.6ZM34,50.2l-.6-1.9a1.93,1.93,0,0,1,1.2-2.5l.2-.1a1.93,1.93,0,0,1,2.5,1.2l.6,1.9a1.93,1.93,0,0,1-1.2,2.5l-.2.1A1.93,1.93,0,0,1,34,50.2Zm3.7,6.3a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,37.69,56.5Zm5.5,1.2a1.92,1.92,0,0,1-1.9-2v-.2a1.92,1.92,0,0,1,2-1.9h2a1.92,1.92,0,0,1,1.9,2v.2a1.92,1.92,0,0,1-2,1.9Zm15.2-2.9V55a2,2,0,0,1-2.2,1.7l-1.9-.2a2,2,0,0,1-1.7-2.2v-.2a2,2,0,0,1,2.2-1.7l1.9.2A2,2,0,0,1,58.39,54.8ZM61,56.25a1.51,1.51,0,0,1,1.93-2.15,1.63,1.63,0,0,1,.72.89C63.74,55.35,61.11,56.49,61,56.25Zm1.63,6.85-.5-1.9a2,2,0,0,1,1.4-2.4h.2a2,2,0,0,1,2.4,1.4l.5,1.8C66.62,62.11,62.89,64.1,62.59,63.1Zm5.2-13.2-.9,1.8a1.89,1.89,0,0,1-2.6.9l-.2-.1a1.89,1.89,0,0,1-.9-2.6l.9-1.8a1.89,1.89,0,0,1,2.6-.9l.2.1A1.89,1.89,0,0,1,67.79,49.9Z",
      fill: "#8c3123"
    }), _react.default.createElement("path", {
      d: "M66.79,43.32a10.79,10.79,0,0,0-14.3,5.1,10.94,10.94,0,0,0,.9,10.8,35.41,35.41,0,0,1-8.2,1,10.9,10.9,0,0,0,3.3-7.7,10.7,10.7,0,1,0-10.7,10.7,10.11,10.11,0,0,0,5.2-1.4,11.49,11.49,0,0,0,1.9.1,33.6,33.6,0,0,0,10.5-.7,16.44,16.44,0,0,0,2.2,1.4,10.79,10.79,0,0,0,14.3-5.1A10.63,10.63,0,0,0,66.79,43.32ZM35,58.12l-1.5,1.2a1.92,1.92,0,0,1-2.7-.3l-.1-.2a1.92,1.92,0,0,1,.3-2.7l1.5-1.3a2,2,0,0,1,2.8.3v.2A2,2,0,0,1,35,58.12Zm-1-10.4-.6-1.9a1.93,1.93,0,0,1,1.2-2.5l.2-.1a1.93,1.93,0,0,1,2.5,1.2l.6,1.9a1.93,1.93,0,0,1-1.2,2.5l-.2.1A1.93,1.93,0,0,1,34,47.72Zm3.7,6.3a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,37.69,54Zm5.5,1.2a1.92,1.92,0,0,1-1.9-2V53a1.92,1.92,0,0,1,2-1.9h2a1.92,1.92,0,0,1,1.9,2v.2a1.92,1.92,0,0,1-2,1.9Zm15.2-2.9v.2a2,2,0,0,1-2.2,1.7l-1.9-.2a2,2,0,0,1-1.7-2.2v-.2a2,2,0,0,1,2.2-1.7l1.9.2A2,2,0,0,1,58.39,52.32Zm3.2,2a1.5,1.5,0,0,1,1.3-2.7,1.63,1.63,0,0,1,.7,2A1.47,1.47,0,0,1,61.59,54.32Zm3.6,7.6L65,62a2,2,0,0,1-2.4-1.4l-.5-1.9a2,2,0,0,1,1.4-2.4h.2a2,2,0,0,1,2.4,1.4l.5,1.8A2,2,0,0,1,65.19,61.92Zm2.6-14.5-.9,1.8a1.89,1.89,0,0,1-2.6.9l-.2-.1a1.89,1.89,0,0,1-.9-2.6l.9-1.8a1.89,1.89,0,0,1,2.6-.9l.2.1A1.89,1.89,0,0,1,67.79,47.42Z",
      fill: "#fff"
    }), _react.default.createElement("g", {
      style: {
        "isolation": " isolate"
      }
    }, _react.default.createElement("path", {
      d: "M40.89,33.67H39.16l-4-11.43h1.65L40,32.15h0l3.3-9.91H45Z",
      fill: "#fff"
    })), _react.default.createElement("g", {
      style: {
        "isolation": " isolate"
      }
    }, _react.default.createElement("path", {
      d: "M49.8,23.53H46V22.25h9.14v1.28H51.32V33.67H49.8Z",
      fill: "#fff"
    })), _react.default.createElement("g", {
      style: {
        "isolation": " isolate"
      }
    }, _react.default.createElement("path", {
      d: "M57.3,22.25h1.52V32.39h6v1.28H57.3Z",
      fill: "#fff"
    })))) // -- END of generated content.

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