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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Elastic Cache"), _react.default.createElement("polygon", {
      style: {
        "fill": "#99bce3"
      },
      points: "83.95 64.42 50 60.19 16.05 64.42 50 91 83.95 64.42"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "84.17 35.59 49.78 39.8 15.83 35.58 50 9 84.17 35.59"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#205b99"
      },
      points: "50 9 15.83 25.97 15.83 35.59 50 25.4 50 9"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#205b99"
      },
      points: "50 74.6 15.83 64.42 15.83 74.03 50 91 50 74.6"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#205b99"
      },
      points: "50 62.4 35.19 60.23 35.19 39.94 50 37.8 63.95 50.1 50 62.4"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#5294cf"
      },
      points: "50 9 84.17 25.97 84.17 35.59 50 25.4 50 9"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#5294cf"
      },
      points: "50 74.6 84.17 64.42 84.17 74.03 50 91 50 74.6"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#5294cf"
      },
      points: "50 62.4 64.81 60.23 64.81 39.94 50 37.8 50 62.4"
    }), _react.default.createElement("text", {
      style: {
        "font-size": "21px",
        "font-family": "HelveticaNeue-CondensedBold, Helvetica Neue",
        "font-weight": "700"
      },
      transform: "translate(-34.65 -6.33)"
    }, "Amazon ElastiCache")) // -- END of generated content.

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