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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Macie"), _react.default.createElement("path", {
      style: {
        "fill": "#34bbc9"
      },
      d: "M50.11,63.62a4.06,4.06,0,0,1-3.5-2l-2.27-3.93-3.17,5.1a1.92,1.92,0,0,1-1.58.87,1.94,1.94,0,0,1-1.7-1.08L32.23,52.36a.64.64,0,0,0-.53-.31h-.08a.91.91,0,0,0-.4.22l-12.65,11a1.59,1.59,0,0,1-2.1,0,1.61,1.61,0,0,1-.34-1.88l0,0L29.82,37.62a2.61,2.61,0,0,1,4.43,0L44.38,55.14l5.62-9a5.66,5.66,0,0,1,4.84-2.77,5.73,5.73,0,0,1,3.32,1.09l2.7,2,5-8.72a2.76,2.76,0,0,1,2.28-1.34,2.7,2.7,0,0,1,2.33,1.43l13.3,23A1.86,1.86,0,0,1,83.59,63a1.9,1.9,0,0,1-2.51.32l0,0L61.25,48.35,53.6,61.6A4.06,4.06,0,0,1,50.11,63.62Zm-32.83-1.7a.33.33,0,0,0,.07.34.28.28,0,0,0,.38,0l12.65-11a1.9,1.9,0,0,1,3,.45L39,61.94l0,.1a.7.7,0,0,0,.52.29.63.63,0,0,0,.49-.27l3.53-5.68L33.14,38.26a1.32,1.32,0,0,0-2.22,0Zm27.83-5.51L47.74,61a2.74,2.74,0,0,0,4.74,0l7.74-13.4-2.84-2.13a4.48,4.48,0,0,0-2.53-.82,4.4,4.4,0,0,0-3.73,2.12ZM81.78,62.2a.6.6,0,0,0,.83-.08.59.59,0,0,0,.07-.64L69.36,38.41a1.43,1.43,0,0,0-1.19-.74,1.46,1.46,0,0,0-1.16.69l-5.12,8.86Z"
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