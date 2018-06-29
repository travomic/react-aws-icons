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
    }), _react.default.createElement("title", null, "Glue"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      style: {
        "fill": "#F58536"
      },
      points: "32.1,45 22.7,44.5 22.7,28 32.1,29.8 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#6B3A19"
      },
      points: "84,45.2 75.2,45.5 67.8,45 77.1,44.5 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9D5025"
      },
      points: "67.8,34.9 77.3,33.5 77.3,44.5 67.8,45 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9D5025"
      },
      points: "15.9,62.2 50,70.9 50,50 15.9,50 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9D5025"
      },
      points: "39.8,75.8 50,79.5 50,91.2 39.8,86.1 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9D5025"
      },
      points: "39.8,13.9 50,8.8 50,41.8 39.8,42.8 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9D5025"
      },
      points: "15.9,45.2 22.7,44.5 22.7,28 15.9,30.7 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#F58536"
      },
      points: "84.1,50 50,50 50,70.9 84.1,62.2 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#F58536"
      },
      points: "60.2,13.9 50,8.8 50,41.8 60.2,42.8 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#F58536"
      },
      points: "84.1,35.5 77.3,33.5 77.3,44.5 84.1,45.2 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#F58536"
      },
      points: "60.2,75.8 50,79.5 50,91.2 60.2,86.1 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#FBBF93"
      },
      points: "60.2,75.8 50,73 39.8,75.8 50,79.5 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#6B3A19"
      },
      points: "39.8,42.8 50,41.8 60.2,42.8 50,43.6 \t"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#6B3A19"
      },
      points: "15.9,45.2 22.6,44.5 32.1,45 24.8,45.5 \t"
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