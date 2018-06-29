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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Hosted Zone"), _react.default.createElement("path", {
      style: {
        "fill": "#9d5025"
      },
      d: "M50.51,24a1.13,1.13,0,0,1,.69.22c3,3.34,5.92,4.45,8.57,4.45,5.32,0,17.24,3.75,17.44,3.52V34.7c-.21.25-4.28,5-4.05,10.6.13,3.33,1.78,5.58,3.17,8,.55.95,2,3.68,2,3.68V59.4a11.39,11.39,0,0,1-.24,2.29c-2.73,13.42-15.84,8-26.46,16.72a.82.82,0,0,1-.51.22.47.47,0,0,1-.39-.22c-6.44-7.77-26.3-1.29-28.76-16.72A16.86,16.86,0,0,1,21.71,59V56.54s1.44-3.23,1.89-4c1.08-1.93,2.25-3.73,2.38-6.67.22-4.9-3.83-10-4-10.25V33.11c.21.21,13.56-4.76,19.08-4.76,2.76,0,5.87-1,9-4.14A.72.72,0,0,1,50.51,24Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M50.51,21.54a1.13,1.13,0,0,1,.69.22c3,3.34,5.92,4.45,8.57,4.45,5.32,0,9.14-4.26,9.34-4.49l8.1,10.49c-.21.25-4.28,5-4.05,10.6.27,6.57,6.4,8.95,4.89,16.39-2.73,13.42-15.84,8-26.46,16.72a.82.82,0,0,1-.51.22.47.47,0,0,1-.39-.22c-6.44-7.77-26.3-1.29-28.76-16.72-1.36-8.46,3.75-9.49,4-15.84.22-4.9-3.83-10-4-10.25l9.43-11.38A14.74,14.74,0,0,0,41,25.86c2.76,0,5.87-1,9-4.14A.72.72,0,0,1,50.51,21.54Z"
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