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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "ELB"), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "19.33 24.17 15.91 25.88 15.91 74.12 19.33 75.83 32.88 50 19.33 24.17"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "27.3 73.96 19.33 75.83 19.33 24.17 27.3 25.99 27.3 73.96"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "23.1 22.28 27.3 20.19 37.24 50 27.3 79.81 23.1 77.72 23.1 22.28"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "37.24 77 27.3 79.81 27.3 20.19 37.24 23.01 37.24 77"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "31.98 17.84 37.24 15.21 70.08 50 37.24 84.78 31.98 82.16 31.98 17.84"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "72.75 71.64 37.24 84.78 37.24 15.21 72.75 28.19 72.75 71.64"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#6b3a19"
      },
      points: "68.15 43.51 61.52 43.94 43.19 42.39 49.99 8.84 68.15 43.51"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "49.99 41.7 49.99 8.84 43.19 12.24 43.19 42.39 49.99 41.7"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "68.15 43.51 68.15 17.92 49.99 8.84 49.99 41.7 68.15 43.51"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fbbf93"
      },
      points: "68.15 56.27 61.87 55.87 43.19 57.45 49.99 91.16 68.15 56.27"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "43.19 57.45 43.19 87.77 49.99 91.16 49.99 58.07 43.19 57.45"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "49.99 58.07 49.99 91.16 68.15 82.08 68.15 56.27 49.99 58.07"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#fbbf93"
      },
      points: "84.09 54.69 80.19 54.53 70.08 55.42 74.36 78.98 84.09 54.69"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "74.36 55.65 74.36 78.98 84.09 74.11 84.09 54.69 74.36 55.65"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#6b3a19"
      },
      points: "84.09 45.11 80.19 45.27 70.08 44.37 74.36 21.02 84.09 45.11"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "84.09 45.11 84.09 25.89 74.36 21.02 74.36 44.13 84.09 45.11"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "70.08 77.85 74.36 78.98 74.36 55.65 70.08 55.42 70.08 77.85"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "70.08 22.15 74.36 21.02 74.36 44.13 70.08 44.37 70.08 22.15"
    }), _react.default.createElement("text", {
      style: {
        "font-size": "21px",
        "font-family": "HelveticaNeue-CondensedBold, Helvetica Neue",
        "font-weight": "700"
      },
      transform: "translate(-0.49 -31.35)"
    }, "Elastic Load", _react.default.createElement("tspan", {
      x: "8.9",
      y: "25.2"
    }, "Balancing"))) // -- END of generated content.

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