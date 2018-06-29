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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Dynamo DB"), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "82.42 37.44 82.42 29.8 74.38 21 61.22 50 74.38 78.99 82.42 70.18 82.42 62.54 79.74 64.36 79.74 60.69 82.42 59.3 82.42 51.61 79.74 51.68 79.74 48.24 82.42 48.37 82.42 40.88 79.74 39.48 79.74 36.9 82.42 37.44"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#5294cf"
      },
      points: "60.05 86.17 74.38 78.99 74.38 20.99 60.05 13.83 43.8 50.61 60.05 86.17"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "39.95 86.17 60.05 86.17 60.05 13.83 39.95 13.83 29.57 50.61 39.95 86.17"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#205b99"
      },
      points: "39.95 86.17 25.49 78.99 20.94 50.61 25.49 20.99 39.91 13.83 39.95 86.17"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "79.74 60.69 74.37 63.31 60.05 66.4 50.27 66.4 39.95 66.4 25.89 63.31 25.64 63.26 25.48 63.22 25.48 52.3 39.93 53.34 50.27 53.34 60.05 53.34 74.38 52.3 82.43 51.63 79.74 51.61 79.74 48.39 82.39 48.36 74.38 47.77 60.05 47.31 50.27 47.31 40.06 47.31 25.48 47.66 25.48 36.66 25.64 36.63 40.06 33.24 50.27 33.24 60.05 33.24 74.38 36.63 79.74 39.49 79.74 37.68 82.42 37.46 74.38 31.84 60.05 27.21 50.27 27.21 40.06 27.21 25.48 32 25.48 20.99 18.45 29.8 18.45 37.45 20.46 37.68 20.46 39.52 18.45 40.72 18.45 48.37 20.46 48.39 20.46 51.61 18.45 51.64 18.45 59.25 20.46 60.45 20.46 62.32 18.43 62.55 18.45 70.17 25.48 78.98 25.48 67.97 39.94 72.43 50.27 72.43 60.05 72.43 74.38 67.99 82.42 62.54 79.74 62.32 79.74 60.69"
    }), _react.default.createElement("text", {
      style: {
        "font-size": "21px",
        "font-family": "HelveticaNeue-CondensedBold, Helvetica Neue",
        "font-weight": "700"
      },
      transform: "translate(-31.93 -6.33)"
    }, "Amazon DynamoDB")) // -- END of generated content.

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