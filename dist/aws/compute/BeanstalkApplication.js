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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Beanstalk Application"), _react.default.createElement("path", {
      style: {
        "fill": "#6b3a19"
      },
      d: "M39.3,48a54.32,54.32,0,0,0,20.87-14.1c1.46-1.6,5.13-9.28,5.13-9.28v2.48c-.6,6-1.9,14.5-4.8,17.3-2.7,2.6-9.7,4.1-17.3,4.7v29.3H34.7V49.18c.6-6.7,1.1-12.1,6.9-17.3C45.1,28.72,63.9,21.5,63.9,21.5V24c-8.8,14.2-25.4,20.2-25.6,20.3-.5.2-1,2.1-.8,2.6a2.36,2.36,0,0,0,1.4,1.2A.76.76,0,0,1,39.3,48Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M39.3,45.5c.7-.2,16.7-5.8,26-20.9-.6,6-1.9,14.5-4.8,17.3-2.7,2.6-9.7,4.1-17.3,4.7V75.9H34.7V46.7c.6-6.7,1.1-12.1,6.9-17.3,4.1-3.7,15.3-7,22.3-7.9C55.1,35.7,38.5,41.7,38.3,41.8c-.5.2-1,2.1-.8,2.6a2.36,2.36,0,0,0,1.4,1.2A.76.76,0,0,1,39.3,45.5Z"
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