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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      width: size,
      size: size
    }, otherProps, {
      height: size,
      viewBox: "0 0 100 100"
    }), _react.default.createElement("title", null, "Migration Hub"), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("path", {
      style: {
        "fill": "#ABABAB"
      },
      d: "M73.3,64.6c-3.4,0-6.1,2.7-6.1,6.1c0,0.7,0.1,1.4,0.3,2l-13.1,7.5c-1.1-1.2-2.7-1.9-4.5-1.9 c-1.8,0-3.4,0.8-4.5,1.9l-13.4-7.7c0.2-0.6,0.3-1.2,0.3-1.8c0-3.4-2.7-6.1-6.1-6.1s-6.1,2.7-6.1,6.1c0,3.4,2.7,6.1,6.1,6.1 c1.8,0,3.4-0.8,4.5-1.9l13.4,7.7c-0.2,0.6-0.3,1.2-0.3,1.8c0,3.4,2.7,6.1,6.1,6.1s6.1-2.7,6.1-6.1c0-0.6-0.1-1.2-0.3-1.8L69,75 c1.1,1.1,2.6,1.8,4.3,1.8c3.4,0,6.1-2.7,6.1-6.1C79.4,67.4,76.6,64.6,73.3,64.6z"
    }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("path", {
      style: {
        "fill": "#ABABAB"
      },
      d: "M41.8,9.5c-3.4,0-6.1,2.7-6.1,6.1c0,0.6,0.1,1.2,0.3,1.8l-13.4,7.7c-1.1-1.2-2.7-1.9-4.5-1.9 c-3.4,0-6.1,2.7-6.1,6.1c0,2.9,2,5.3,4.7,5.9v15.4c-2.7,0.6-4.7,3-4.7,5.9c0,3.4,2.7,6.1,6.1,6.1s6.1-2.7,6.1-6.1 c0-2.9-2-5.3-4.7-5.9V35.2c2.7-0.6,4.7-3,4.7-5.9c0-0.6-0.1-1.2-0.3-1.8l13.4-7.7c1.1,1.2,2.7,1.9,4.5,1.9c3.4,0,6.1-2.7,6.1-6.1 C47.9,12.2,45.2,9.5,41.8,9.5z"
    }))), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("path", {
      style: {
        "fill": "#ABABAB"
      },
      d: "M83.2,50.5V35.2c2.7-0.6,4.7-3,4.7-5.9c0-3.4-2.7-6.1-6.1-6.1c-1.8,0-3.3,0.8-4.5,1.9L64,17.4 c0.2-0.6,0.3-1.2,0.3-1.8c0-3.4-2.7-6.1-6.1-6.1c-3.4,0-6.1,2.7-6.1,6.1c0,3.4,2.7,6.1,6.1,6.1c1.8,0,3.4-0.8,4.5-1.9L76,27.4 c-0.2,0.6-0.3,1.2-0.3,1.8c0,2.9,2,5.3,4.7,5.9v15.4c-2.7,0.6-4.7,3-4.7,5.9c0,3.4,2.7,6.1,6.1,6.1s6.1-2.7,6.1-6.1 C87.9,53.6,85.9,51.1,83.2,50.5z"
    }))), _react.default.createElement("polygon", {
      style: {
        "fill": "#FEB72F"
      },
      points: "50,35.1 66.4,51.5 71.7,46.1 50,24.4 28.3,46.1 33.6,51.5 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#A2D8F2"
      },
      points: "50,37.2 31.5,55.7 36.8,61.1 50,47.9 63.2,61.1 68.5,55.7 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#59BAE1"
      },
      points: "50,50 35.4,64.6 40.7,69.9 50,60.7 59.3,69.9 64.6,64.6 "
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