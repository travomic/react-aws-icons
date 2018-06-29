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
    }), _react.default.createElement("title", null, "Connect"), _react.default.createElement("polygon", {
      style: {
        "fill": "#4C622C"
      },
      points: "20.2,71.1 24,73 30.6,47.1 24,27 20.2,28.9 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3F"
      },
      points: "24,73 31.9,71.1 31.9,28.9 24,27 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4C622C"
      },
      points: "28.6,65.2 34.1,66.8 39.9,47.4 34.1,33.2 28.6,34.8 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3F"
      },
      points: "34.1,66.8 42.9,65.2 42.9,34.8 34.1,33.2 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4C622C"
      },
      points: "50,57.2 41.1,56.3 41.1,43.7 50,42.8 57.1,50 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4C622C"
      },
      points: "76,73 67.9,71.1 67.9,28.9 76,27 79,50 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4C622C"
      },
      points: "65.9,66.8 57.1,65.2 57.1,34.8 65.9,33.2 70,50 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3F"
      },
      points: "76,27 79.8,28.9 79.8,71.1 76,73 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3F"
      },
      points: "65.9,66.8 71.4,65.2 71.4,34.8 65.9,33.2 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3F"
      },
      points: "50,57.2 58.9,56.3 58.9,43.7 50,42.8 "
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