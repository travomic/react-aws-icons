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
    }), _react.default.createElement("title", null, "Code Deploy"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "60.8,69 25.6,78.7 25.6,21.2 60.8,30.7 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "25.6,78.7 16.1,74 16.1,26 25.6,21.2 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "31.9,41.9 50,39.7 50,60.2 31.9,57.9 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#3C4929"
      },
      points: "83.9,38 67.5,39.7 31.9,34 50,9 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "31.9,18 50,9 50,29.5 31.9,34 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#B7CA9D"
      },
      points: "83.9,62 67.5,60.3 31.9,65.9 50,90.8 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "31.9,81.9 50,91 50,70.5 31.9,65.9 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "83.9,38 50,29.5 50,9 83.9,26 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "83.9,55.9 50,60.2 50,39.6 83.9,43.9 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "83.9,74 50,91 50,70.5 83.9,62 \t"
    }))) // -- END of generated content.

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