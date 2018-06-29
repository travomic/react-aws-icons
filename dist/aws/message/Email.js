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
      d: "M86,58.68V77.07H22.87V58.68Z",
      fill: "#876929"
    })), _react.default.createElement("clipPath", {
      id: "clip-path-2"
    }, _react.default.createElement("path", {
      d: "M29.9,33.41c0,.21,0,.43,0,.65v2.36c0-.22,0-.44,0-.65Z",
      fill: "#d9a741"
    }))), _react.default.createElement("title", null, "Email"), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M86,58.68V77.07H22.87V58.68Z",
      fill: "#876929"
    }), _react.default.createElement("g", {
      "clip-path": "url(#clip-path)"
    }, _react.default.createElement("g", {
      style: {
        "isolation": " isolate"
      }
    }, _react.default.createElement("path", {
      d: "M86,58.68V77.07H22.87V58.68H86",
      fill: "#876929"
    })))), _react.default.createElement("path", {
      d: "M86,34.84V74.71H22.87V50.21a15.35,15.35,0,0,0,3,.29,15.08,15.08,0,0,0,11.52-5.32L54,56Z",
      fill: "#d9a741"
    }), _react.default.createElement("path", {
      d: "M38.52,40.94v2.36L54,53.2,83.54,33.67V31.31Z",
      fill: "#876929"
    }), _react.default.createElement("path", {
      d: "M40.84,31.31h42.7L54,50.83l-15.5-9.89a14.86,14.86,0,0,0,2.41-8.09A12.9,12.9,0,0,0,40.84,31.31Z",
      fill: "#d9a741"
    }), _react.default.createElement("g", {
      style: {
        "isolation": " isolate"
      }
    }, _react.default.createElement("g", {
      style: {
        "isolation": " isolate"
      }
    }, _react.default.createElement("path", {
      d: "M29.9,33.41c0,.21,0,.43,0,.65v2.36c0-.22,0-.44,0-.65Z",
      fill: "#d9a741"
    }), _react.default.createElement("g", {
      "clip-path": "url(#clip-path-2)"
    }, _react.default.createElement("g", {
      style: {
        "isolation": " isolate"
      }
    }, _react.default.createElement("path", {
      d: "M29.9,33.41v2.36c0,.21,0,.43,0,.65V34.06c0-.22,0-.44,0-.65",
      fill: "#d9a741"
    })))), _react.default.createElement("path", {
      d: "M36.49,28.38A11.92,11.92,0,0,1,37,38a7.19,7.19,0,0,1-3.53,4.07,3.59,3.59,0,0,1-1.78.44,4.78,4.78,0,0,1-3.94-2.06c-.12-.18-.23-.35-.39-.57a4.23,4.23,0,0,1-3.51,1.54,3,3,0,0,1-3.19-3.3,3.6,3.6,0,0,1,2.27-3.45,15,15,0,0,1,4-.73v-.28a2.73,2.73,0,0,0-.26-1.53,1.45,1.45,0,0,0-1.21-.55,1.62,1.62,0,0,0-1.71,1.27.44.44,0,0,1-.37.38L21.31,33a.38.38,0,0,1-.32-.44c.48-2.49,2.73-3.24,4.77-3.24A4.85,4.85,0,0,1,29,30.43c1,.95.93,2.24.93,3.63v3.3a2.83,2.83,0,0,0,.78,1.93,1.35,1.35,0,0,0,.82.28c1,0,2.14-1,2.76-2.58a9.27,9.27,0,0,0-.18-7.31c-1.45-2.7-4.88-4.22-8.24-4.22a9.12,9.12,0,0,0-5.37,1.6,10.43,10.43,0,0,0-2.53,14.07,10.27,10.27,0,0,0,8.75,4.54,10.94,10.94,0,0,0,5.6-1.52.89.89,0,0,1,.47-.13.91.91,0,0,1,.79.46.89.89,0,0,1-.36,1.22,12.48,12.48,0,0,1-6.69,1.87,12.23,12.23,0,0,1-10.32-5.26,12.64,12.64,0,0,1,2.86-17.2A11.34,11.34,0,0,1,26,22.93a13,13,0,0,1,2.43.23A11,11,0,0,1,36.49,28.38Zm-10,10a4.13,4.13,0,0,0,.4-2.24v-.45c-1.54,0-3.17.32-3.17,2.12,0,.92.47,1.54,1.29,1.54a1.71,1.71,0,0,0,1.47-1",
      fill: "#d9a741"
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