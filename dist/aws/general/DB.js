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
      d: "M71.92,26.66v2.79c0,1.28-3.62,3.38-10.42,4.58A66.67,66.67,0,0,1,50,35c-14.2,0-22-3.65-22-5.52V26.66c0,1.87,7.75,5.52,22,5.52a66.7,66.7,0,0,0,11.55-.93C68.3,30,71.92,27.94,71.92,26.66Z",
      fill: "#4f4f4f"
    }))), _react.default.createElement("title", null, "DB"), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M71.92,26.66v2.79c0,1.28-3.62,3.38-10.42,4.58A66.67,66.67,0,0,1,50,35c-14.2,0-22-3.65-22-5.52V26.66c0,1.87,7.75,5.52,22,5.52a66.7,66.7,0,0,0,11.55-.93C68.3,30,71.92,27.94,71.92,26.66Z",
      fill: "#4f4f4f"
    }), _react.default.createElement("g", {
      "clip-path": "url(#clip-path)"
    }, _react.default.createElement("path", {
      d: "M71.92,26.66v2.79a.77.77,0,0,1,0,.12V26.78a.78.78,0,0,0,0-.12",
      fill: "#4f4f4f"
    }), _react.default.createElement("path", {
      d: "M71.91,26.78v2.79a1,1,0,0,1,0,.16V26.93a.9.9,0,0,0,0-.15",
      fill: "#4f4f4f"
    }), _react.default.createElement("path", {
      d: "M71.87,26.93v2.79a1.27,1.27,0,0,1-.11.23V27.16a1.28,1.28,0,0,0,.11-.23",
      fill: "#4f4f4f"
    }), _react.default.createElement("path", {
      d: "M71.76,27.16V30C71,31.23,67.46,33,61.5,34A66.67,66.67,0,0,1,50,35c-14.2,0-22-3.65-22-5.52V26.66c0,1.87,7.75,5.52,22,5.52a66.7,66.7,0,0,0,11.55-.93c6-1.06,9.48-2.8,10.26-4.08",
      fill: "#4f4f4f"
    }))), _react.default.createElement("path", {
      d: "M71.89,68.62a1.1,1.1,0,0,0,.07-.37v4.51a.89.89,0,0,1,0,.15,1.54,1.54,0,0,1-.05.21h0v0a1.59,1.59,0,0,1-.12.25l0,.07-.13.18-.19.23-.19.19-.27.23-.26.2-.35.24-.32.2-.45.24-.36.19-.61.27-.35.15c-.34.14-.7.27-1.09.4l-.41.13-.86.26-.57.15-.86.22-.66.14-.93.19-.75.13-1,.16-.81.11-1.14.13-.86.09L57,78l-.87.06-1.55.07-.79,0c-.81,0-1.64,0-2.51,0-8,0-14-1-18-2.27-2.92-1-5-2.17-5.25-3V68.4c.22.82,2.06,1.85,4.66,2.83L32.65,71a63.14,63.14,0,0,0,18.61,2.76c.87,0,1.71,0,2.52,0l.77,0,1.57-.07.85-.06,1.32-.11.82-.09,1.19-.14.76-.11,1.09-.17,5-1.2q.61-.21,1.14-.42l1-.43.23-.12.58-.32.23-.14.44-.29.2-.15.33-.28.15-.15a3.06,3.06,0,0,0,.23-.27L71.7,69Z",
      fill: "#4f4f4f"
    }), _react.default.createElement("path", {
      d: "M50,21.46a65.18,65.18,0,0,1,11.55.94C68.3,23.6,71.92,25.69,71.92,27S68.3,30.34,61.5,31.55A66.7,66.7,0,0,1,50,32.49c-14.2,0-22-3.65-22-5.52S35.76,21.46,50,21.46Z",
      fill: "#7d7c7c"
    }), _react.default.createElement("path", {
      d: "M61.24,36c-.61.12-1.21.2-1.81.29-.31,0-.62.1-.95.13-.56.07-1.13.13-1.71.19-.37,0-.75.07-1.12.09-.73.06-1.47.1-2.22.13h-.37c-.87,0-1.75.06-2.67.07h-.57c-8.72,0-17.51-1.5-21.78-4.35V70.43c.23.88,2.31,2,5.21,3,3.93,1.25,10,2.27,18,2.27C65.88,75.75,72,72.18,72,70.27l0-38C69.71,33.84,66,35.2,61.24,36Z",
      fill: "#7d7c7c"
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