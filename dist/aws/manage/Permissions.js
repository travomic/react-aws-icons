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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Permissions"), _react.default.createElement("path", {
      style: {
        "fill": "#4b612c"
      },
      d: "M71.43,46.18V29A12.86,12.86,0,0,0,58.57,16.18H41.43A12.86,12.86,0,0,0,28.57,29V46.18H20V84.75H80V46.18Zm-8.57,0H37.14V32.47a7.72,7.72,0,0,1,7.72-7.72H55.14a7.72,7.72,0,0,1,7.72,7.72V46.18Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#759c3e"
      },
      d: "M71.43,43.7V26.55A12.86,12.86,0,0,0,58.57,13.7H41.43A12.86,12.86,0,0,0,28.57,26.55V43.7H20V82.27H80V43.7Zm-8.57,0H37.14V30a7.72,7.72,0,0,1,7.72-7.72H55.14A7.72,7.72,0,0,1,62.86,30V43.7Z"
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