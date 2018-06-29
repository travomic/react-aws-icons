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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Cloud Front"), _react.default.createElement("polygon", {
      style: {
        "fill": "#fbbf93"
      },
      points: "39.74 56.97 24.12 77.94 15.94 57.01 30.86 56.1 39.74 56.97"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fbbf93"
      },
      points: "60.1 56.97 75.88 78.06 83.9 57.03 69.14 56.1 60.1 56.97"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#6b3a19"
      },
      points: "39.74 42.97 24.12 21.94 15.94 42.99 30.99 43.89 39.74 42.97"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#6b3a19"
      },
      points: "60.1 42.97 75.88 21.94 84.06 42.99 69.14 43.9 60.1 42.97"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "60.1 42.97 75.88 41.8 75.88 21.94 60.1 26.02 60.1 42.97"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "84.06 42.99 75.88 41.8 75.88 21.94 84.06 26.03 84.06 42.99"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "60.1 56.97 75.88 58.2 75.88 78.06 60.1 73.92 60.1 56.97"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "83.9 57.03 75.88 58.2 75.88 78.06 83.9 74.05 83.9 57.03"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "39.74 42.97 24.12 41.8 24.12 21.94 39.74 26.02 39.74 42.97"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "15.94 42.99 24.12 41.8 24.12 21.94 15.94 26.03 15.94 42.99"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "39.74 56.97 24.12 58.2 24.12 78.06 39.74 73.92 39.74 56.97"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "15.94 57.01 24.12 58.2 24.12 78.06 15.94 73.97 15.94 57.01"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fbbf93"
      },
      points: "66.26 59.59 50 57.98 33.58 59.57 50 91 66.26 59.59"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#6b3a19"
      },
      points: "66.26 40.41 50 42.02 33.58 40.43 50 9 66.26 40.41"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "66.26 40.41 50 38.05 50 9 66.26 17.13 66.26 40.41"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "33.58 40.43 50 38.05 50 9 33.58 17.21 33.58 40.43"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "66.26 59.59 50 61.95 50 91 66.26 82.87 66.26 59.59"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "33.58 59.57 50 61.95 50 91 33.58 82.79 33.58 59.57"
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