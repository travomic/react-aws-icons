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
    }), _react.default.createElement("title", null, "HDFSCluster"), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M75.27,47a2,2,0,0,0,2-2V37.72a2,2,0,0,0-2-2H68a2,2,0,0,0-1.23.44L62.25,32.8V26.5a2,2,0,0,0-2-2H53a2,2,0,0,0-2,2v7.29a2,2,0,0,0,.2.86L40.06,47.81V46.58c0,1.1-3.88,2-8.66,2s-8.66-.89-8.66-2h0V60.24h0c0,1.1,3.88,2,8.66,2s8.66-.89,8.66-2V56.82L51,68.24a2,2,0,0,0,0,.4v7.29a2,2,0,0,0,2,2h7.29a2,2,0,0,0,2-2V69.61l4.51-3.39a2,2,0,0,0,1.22.43h7.29a2,2,0,0,0,2-2V57.35a2,2,0,0,0-2-2h-2.4V47Zm-8.42,1.32-1.71-3.51.84-.28V45a2,2,0,0,0,1.54,1.94ZM61.47,67.07a2,2,0,0,0-.76-.37l3.09-6.37,2.18.54v2.8Zm-8-31.28H58l3.67,7.55L41.51,50ZM66,38.71v3.2L64,42.55l-3.32-6.82a2,2,0,0,0,.77-.38ZM58,66.64h-5L41.59,54.8l19.73,4.91Zm9.56-11.23A2,2,0,0,0,66,57.35v1L64.92,58l1.94-4Zm-5.08,2-20.24-5,20.54-6.77,2.72,5.58Zm7.94-2.07h-.11l-2-4.16,2-4.18h.1Z",
      fill: "#9d5025"
    }), _react.default.createElement("path", {
      d: "M31.41,43.84c4.78,0,8.66-.89,8.66-2V39.36s-6.32.48-8.66.48c-1.81,0-8.66-.48-8.66-.48v2.48C22.75,42.94,26.62,43.84,31.41,43.84Z",
      fill: "#9d5025"
    })), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M75.27,44.53a2,2,0,0,0,2-2V35.24a2,2,0,0,0-2-2H68a2,2,0,0,0-1.23.44l-4.49-3.36V24a2,2,0,0,0-2-2H53a2,2,0,0,0-2,2v7.29a2,2,0,0,0,.2.86L40.06,45.33V44.1c0,1.1-3.88,2-8.66,2s-8.66-.89-8.66-2h0V57.76h0c0,1.1,3.88,2,8.66,2s8.66-.89,8.66-2V54.34L51,65.76a2,2,0,0,0,0,.4v7.29a2,2,0,0,0,2,2h7.29a2,2,0,0,0,2-2V67.13l4.51-3.39a2,2,0,0,0,1.22.43h7.29a2,2,0,0,0,2-2V54.87a2,2,0,0,0-2-2h-2.4V44.53Zm-8.42,1.32-1.71-3.51.84-.28v.47a2,2,0,0,0,1.54,1.94ZM61.47,64.59a2,2,0,0,0-.76-.37l3.09-6.37L66,58.4v2.8Zm-8-31.28H58l3.67,7.55L41.51,47.5ZM66,36.23v3.2L64,40.07l-3.32-6.82a2,2,0,0,0,.77-.38ZM58,64.16h-5L41.59,52.32l19.73,4.91Zm9.56-11.23A2,2,0,0,0,66,54.87v1l-1.06-.26,1.94-4Zm-5.08,2-20.24-5,20.54-6.77,2.72,5.58Zm7.94-2.07h-.11l-2-4.16,2-4.18h.1Z",
      fill: "#f58534"
    }), _react.default.createElement("ellipse", {
      cx: "31.41",
      cy: "39.36",
      rx: "8.66",
      ry: "2",
      fill: "#f58534"
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