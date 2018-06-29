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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Inventory"), _react.default.createElement("path", {
      style: {
        "fill": "#4b612c"
      },
      d: "M78.52,35.05,50,18.61,21.48,35.05A2.88,2.88,0,0,0,20,37.55v47a1.83,1.83,0,0,0,1.83,1.83H78.13A1.83,1.83,0,0,0,80,84.53v-47A2.88,2.88,0,0,0,78.52,35.05Zm-49,44.53V41.68H70.43V79.59Z"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "26.86",
      y: "36.57",
      width: "46.15",
      height: "43.57"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#759c3e"
      },
      x: "29.44",
      y: "67.25",
      width: "8.31",
      height: "8.31"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#759c3e"
      },
      x: "40.33",
      y: "67.25",
      width: "8.31",
      height: "8.31"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#759c3e"
      },
      x: "51.22",
      y: "67.25",
      width: "8.31",
      height: "8.31"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#759c3e"
      },
      x: "29.44",
      y: "56.36",
      width: "8.31",
      height: "8.31"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#759c3e"
      },
      x: "40.33",
      y: "56.36",
      width: "8.31",
      height: "8.31"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#759c3e"
      },
      x: "51.22",
      y: "56.36",
      width: "8.31",
      height: "8.31"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#759c3e"
      },
      x: "29.44",
      y: "45.47",
      width: "8.31",
      height: "8.31"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#759c3e"
      },
      x: "40.33",
      y: "45.47",
      width: "8.31",
      height: "8.31"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#759c3e"
      },
      x: "62.11",
      y: "67.25",
      width: "8.31",
      height: "8.31"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#759c3e"
      },
      d: "M78.52,32.57,50,16.13,21.48,32.57A2.88,2.88,0,0,0,20,35.07V82a1.83,1.83,0,0,0,1.83,1.83H78.13A1.83,1.83,0,0,0,80,82v-47A2.88,2.88,0,0,0,78.52,32.57ZM27,77.95V38.35H73v39.6Z"
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