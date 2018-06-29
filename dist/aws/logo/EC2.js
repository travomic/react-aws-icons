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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "EC2"), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "19.33 24.17 15.91 25.88 15.91 74.12 19.33 75.83 33.17 51.25 19.33 24.17"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "27.3 73.96 19.33 75.83 19.33 24.17 27.3 25.99 27.3 73.96"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "23.1 22.28 27.3 20.19 47.25 52.17 27.3 79.81 23.1 77.72 23.1 22.28"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "37.24 77 27.3 79.81 27.3 20.19 37.24 23.01 37.24 77"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "31.98 17.84 37.24 15.21 66.67 55.67 37.24 84.79 31.98 82.16 31.98 17.84"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "49.99 80.13 37.24 84.79 37.24 15.21 49.99 19.88 49.99 80.13"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#9d5025"
      },
      points: "43.19 12.24 49.99 8.84 81.83 52.33 49.99 91.16 43.19 87.76 43.19 12.24"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#f58536"
      },
      points: "84.09 74.11 49.99 91.16 49.99 8.84 84.09 25.89 84.09 74.11"
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