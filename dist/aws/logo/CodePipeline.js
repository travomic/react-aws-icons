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
    }), _react.default.createElement("title", null, "Code Pipeline"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      style: {
        "fill": "#B7CA9D"
      },
      points: "49.3,60.6 15.4,64.9 24.9,79.2 60.2,62 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#3C4929"
      },
      points: "49.3,40.3 83.3,36 73.8,21.7 38.4,38.9 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "38.4,38.9 73.8,33.2 73.8,21.7 38.4,31.2 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "15.4,55.3 49.3,58.7 82.6,50.5 49.3,42.3 15.4,45.7 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "83.3,55.3 49.3,58.7 49.3,42.3 83.3,45.7 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#3C4929"
      },
      points: "15.4,36 49.3,9.5 67.4,31.3 31.8,38.1 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "15.4,26.4 49.3,9.5 49.3,25.9 15.4,36 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "73.8,21.7 83.3,26.4 83.3,36 73.8,33.2 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "60.2,62 24.9,67.7 24.9,79.2 60.2,69.7 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "67.4,31.3 49.3,25.9 49.3,9.5 67.4,18.5 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#B7CA9D"
      },
      points: "83.3,64.9 49.3,91.5 31.2,69.6 66.8,62.8 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "83.3,74.5 49.3,91.5 49.3,75.1 83.3,64.9 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "31.2,69.6 49.3,75.1 49.3,91.5 31.2,82.4 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "24.9,79.2 15.4,74.5 15.4,64.9 24.9,67.7 \t"
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