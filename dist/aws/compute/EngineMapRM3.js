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
    }), _react.default.createElement("title", null, "Engine Map RM3"), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M83.13,41H80.42c-2,0-3.66,1.11-3.85,3H72.11c-.49-3.78-2-7-3.7-7H61V35.76c0-2.14-.91-3.78-3.05-3.78H53V30h6c.69,0,2-1,2-1.68V25.63H36V28.3A1.92,1.92,0,0,0,37.52,30H44v2H38.58C36.44,32,34,33.62,34,35.76V37H25.8a4.1,4.1,0,0,0-3.8,4.2V53H17V39.83c0-.75-1-1.35-2-1.35s-2,.61-2,1.35v31c0,.75,1,1.36,2,1.36s2-.61,2-1.36V58h5V69.07A3.84,3.84,0,0,0,25.8,73H43c.67,3,1.92,5,3.37,5H68.41c1.9,0,3.48-4,3.81-8H77v.64A3.1,3.1,0,0,0,80.42,74h2.71C85.27,74,87,72.76,87,70.62v-26A3.72,3.72,0,0,0,83.13,41Z",
      fill: "#9d5025"
    }), _react.default.createElement("path", {
      d: "M83.13,38.5H80.42c-2,0-3.66,1.11-3.85,3H72.11c-.49-3.78-2-7-3.7-7H61V33.28c0-2.14-.91-3.78-3.05-3.78H53v-2h6c.69,0,2-1,2-1.68v-.19c0-.69-1.29-1.13-2-1.13H37.52c-.69,0-1.52.43-1.52,1.13v.19a1.92,1.92,0,0,0,1.52,1.68H44v2H38.58c-2.14,0-4.58,1.64-4.58,3.78V34.5H25.8A4.1,4.1,0,0,0,22,38.7V50.5H17V37.35C17,36.6,16,36,15,36s-2,.61-2,1.35v31c0,.75,1,1.36,2,1.36s2-.61,2-1.36V55.5h5V66.59a3.84,3.84,0,0,0,3.8,3.91H43c.67,3,1.92,5,3.37,5H68.41c1.9,0,3.48-4,3.81-8H77v.64a3.1,3.1,0,0,0,3.42,3.36h2.71c2.14,0,3.87-1.22,3.87-3.36v-26A3.72,3.72,0,0,0,83.13,38.5Z",
      fill: "#f58534"
    }), _react.default.createElement("g", {
      id: "Layer_1-2",
      "data-name": "Layer 1"
    }, _react.default.createElement("g", {
      style: {
        "isolation": " isolate"
      }
    }, _react.default.createElement("path", {
      d: "M28.11,47.9h1.61l2.79,7.45,2.81-7.45h1.61v8.87H35.83V49.39h0L33,56.77H32l-2.77-7.38h0v7.38H28.11Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M44.43,56.74a1.43,1.43,0,0,1-.76.17c-.55,0-.89-.3-.89-1a2.85,2.85,0,0,1-2.26,1c-1.17,0-2.12-.52-2.12-1.8,0-1.45,1.08-1.76,2.17-2s2.16-.15,2.16-.94S42,51.13,41.3,51.13c-.89,0-1.55.27-1.6,1.22H38.64c.06-1.59,1.29-2.15,2.72-2.15,1.16,0,2.41.26,2.41,1.76v3.3c0,.5,0,.72.34.72a.9.9,0,0,0,.32-.06Zm-1.71-3.29a5.44,5.44,0,0,1-1.91.43c-.7.12-1.29.37-1.29,1.16s.6.94,1.24.94c1.39,0,2-.87,2-1.45Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M45.45,50.35H46.5v.87h0a2.16,2.16,0,0,1,2-1c2,0,3,1.56,3,3.38s-1,3.34-2.93,3.34a2.46,2.46,0,0,1-2.07-1h0v3.32H45.45Zm3,.78c-1.42,0-2,1.22-2,2.42S47,56,48.49,56s1.93-1.23,1.93-2.48S49.8,51.13,48.43,51.13Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M53,47.9h4.17c1.66,0,2.7.91,2.7,2.32a2.13,2.13,0,0,1-1.54,2.25v0c1,.2,1.24,1,1.33,1.83a4.54,4.54,0,0,0,.52,2.45H58.82c-.34-.36-.15-1.32-.32-2.19S58.16,53,57,53H54.13v3.79H53ZM56.59,52c1.11,0,2-.29,2-1.58a1.4,1.4,0,0,0-1.58-1.52H54.13V52Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M64.95,47.9h1.61l2.79,7.45,2.81-7.45h1.61v8.87H72.66V49.39h0l-2.77,7.38h-1l-2.77-7.38h0v7.38H64.95Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M77.48,51.74h.46a1.49,1.49,0,0,0,1.68-1.44,1.4,1.4,0,0,0-1.56-1.42c-1.16,0-1.65.88-1.66,1.91H75.34c.06-1.68,1-2.84,2.72-2.84,1.53,0,2.68.73,2.68,2.36a2,2,0,0,1-1.22,1.75v0a2,2,0,0,1,1.59,2.14c0,1.76-1.38,2.68-3,2.68A2.66,2.66,0,0,1,75.15,54h1.06A1.79,1.79,0,0,0,78.08,56,1.75,1.75,0,0,0,80,54.28a1.68,1.68,0,0,0-1.88-1.69,5.14,5.14,0,0,0-.63,0Z",
      fill: "#fff"
    }))))) // -- END of generated content.

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