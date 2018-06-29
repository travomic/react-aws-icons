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
    }), _react.default.createElement("title", null, "Code Star"), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "21.8,77 16,74.1 16,25.9 21.8,23 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "56.8,68.5 21.8,77 21.8,23 56.8,31.6 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "35.5,83.8 26.6,79.4 26.6,20.6 35.5,16.2 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "84,74.1 78.2,77 78.2,23 84,25.9 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "43.2,68.5 78.2,77 78.2,23 43.2,31.6 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "71.1,71.4 35.5,83.9 35.5,16.2 71.1,28.6 "
    }), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "50,83.9 38.7,79.2 38.7,20.3 50,15.6 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "32.4,76.6 24.7,73.5 24.7,26.2 32.4,23 \t"
    })), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "73.4,79.4 64.5,83.8 64.5,16.2 73.4,20.6 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "49.9,78.7 64.5,83.7 64.5,16.2 49.9,21.3 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "50,83.9 61.4,79.2 61.4,20.3 50,15.6 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "68.6,76.3 75.4,73.4 75.4,26.2 68.6,23.3 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#4B612C"
      },
      points: "50,91.1 43.2,87.6 43.2,12.4 50,8.9 "
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "50,91.1 56.8,87.6 56.8,12.4 50,8.9 "
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