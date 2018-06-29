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
    }), _react.default.createElement("title", null, "Run Command"), _react.default.createElement("g", null, _react.default.createElement("path", {
      style: {
        "fill": "#4B612C"
      },
      d: "M61.3,79H28.7c-5,0-8.5-5-6.7-9.7l12.8-33.9c2.1-5.6,7.5-9.4,13.6-9.4h32.6c5,0,8.5,5,6.7,9.7L74.8,69.7 C72.7,75.3,67.3,79,61.3,79z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#759C3E"
      },
      d: "M61.3,76.5H28.7c-5,0-8.5-5-6.7-9.7l12.8-33.9c2.1-5.6,7.5-9.4,13.6-9.4h32.6c5,0,8.5,5,6.7,9.7L74.8,67.2 C72.7,72.8,67.3,76.5,61.3,76.5z"
    }), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      style: {
        "fill": "#FFFFFF"
      },
      points: "85,40.3 32,40.3 34.2,34.3 87.2,34.3 \t\t"
    })), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      style: {
        "fill": "#FFFFFF"
      },
      points: "69.4,59.7 32.1,59.7 37.1,47.5 74.4,47.5 \t\t"
    })), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "18.7,64.7 11.9,64.7 11.9,60.7 20.2,60.7 \t\t"
    })), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "23.5,52 11.9,52 11.9,48 25,48 \t\t"
    })), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "28.3,39.3 11.9,39.3 11.9,35.3 29.9,35.3 \t\t"
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