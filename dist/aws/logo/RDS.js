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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "RDS"), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "82 29.91 74 21.12 62.72 50 74 78.86 82 70.09 82 29.91"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#5294cf"
      },
      points: "60 86 74 78.86 74 21.12 60 14 43.38 50 60 86"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "40 86 60 86 60 14 40 14 28 50 40 86"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#205b99"
      },
      points: "26 78.85 40 86 40 14 26 21.12 19.81 50 26 78.85"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "18 70.09 26 78.85 26 21.12 18 29.91 18 70.09"
    }), _react.default.createElement("text", {
      style: {
        "font-size": "21px",
        "font-family": "HelveticaNeue-CondensedBold, Helvetica Neue",
        "font-weight": "700"
      },
      transform: "translate(-3.39 -6.33)"
    }, "Amazon RDS")) // -- END of generated content.

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