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
    }), _react.default.createElement("title", null, "XRay"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "16,74.1 22.8,77.5 64.8,50.2 22.8,22.5 16,25.9 25.6,50 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#B7CA9D"
      },
      points: "45.8,50 70.1,54 77.2,22.5 45.8,30.4 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#3C4929"
      },
      points: "47.3,50 70.4,50.1 77.2,77.5 47.3,70 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#B7CA9D"
      },
      points: "52.8,30.1 22.8,22.5 35.7,50 57.2,58.4 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "55.5,21.3 50,23.1 50,14.1 55.5,11.7 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "55.5,88.3 50,85.9 50,72.9 55.5,74.4 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "44.5,21.3 50,23.1 50,14.1 44.5,11.7 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "44.5,88.3 50,85.9 50,68.7 44.5,70 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "77.2,77.5 84,74 74.4,50 84,26 77.2,22.5 64.4,50 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "44.5,11.7 31.9,18 40.3,32.9 50,49.8 59.1,27.2 50,19.2 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "55.5,11.7 50,19.3 50,19.4 50,49.8 50.1,50 59.8,32.8 68.2,18 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#3C4929"
      },
      points: "61.5,50 35.7,50 22.8,77.5 61.5,67.8 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "40.3,67.1 31.9,82 44.5,88.3 50,80.8 50,80.6 60.6,73.8 50,50.2 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "59.8,67.2 50.1,50 50,50.2 50,80.6 50,80.7 55.5,88.3 68.2,82 \t"
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