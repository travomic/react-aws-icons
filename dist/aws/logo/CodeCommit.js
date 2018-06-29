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
    }), _react.default.createElement("title", null, "Code Commit"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "25.5,78.7 16,74 16,25.9 25.5,21.2 38.5,50.7 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "56.8,29.6 25.5,21.2 25.5,78.7 56.8,70 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "71.2,65.7 78.5,68.1 83.1,52.3 78.5,36.5 71.2,37.5 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#3C4929"
      },
      points: "78.5,36.9 71.2,37.8 66.9,36.9 74.4,21.3 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "66.9,36.9 74.4,35.9 74.4,21.2 66.9,23.2 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#3C4929"
      },
      points: "43.1,31.6 50,24.4 68,34.3 61.4,35.4 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#B7CA9D"
      },
      points: "78.5,63.1 71.2,62.3 66.9,63.1 74.4,78.8 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "66.9,63.1 74.4,64.1 74.4,78.8 66.9,76.8 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "68,34.3 50,29.9 50,9 68,18.1 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "84,26 74.4,21.2 74.4,35.9 84,38.2 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#B7CA9D"
      },
      points: "43.1,68.4 50,82.1 68,65.7 61.4,64.6 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "68,65.7 50,70.1 50,91 68,82 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "84,74.1 74.4,78.8 74.4,64.1 84,61.8 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "31.9,81.9 50,91 58.3,50.1 50,9 31.9,18 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "60.2,85.9 50,91 50,9.3 60.2,14.4 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "78.5,76.8 84,74.1 84,26 78.5,24.8 \t"
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