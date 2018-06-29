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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Instances"), _react.default.createElement("rect", {
      style: {
        "fill": "#9d5025"
      },
      x: "46.54",
      y: "47.72",
      width: "30.02",
      height: "30.02",
      rx: "3",
      ry: "3"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#9d5025"
      },
      d: "M50.46,24.74h-24a3,3,0,0,0-3,3v24a3,3,0,0,0,3,3H32V39.23a6,6,0,0,1,6-6H53.46V27.74A3,3,0,0,0,50.46,24.74Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#9d5025"
      },
      d: "M62,36.23H38a3,3,0,0,0-3,3v24a3,3,0,0,0,3,3h5.55V50.72a6,6,0,0,1,6-6H65V39.23A3,3,0,0,0,62,36.23Z"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#f58536"
      },
      x: "46.54",
      y: "45.24",
      width: "30.02",
      height: "30.02",
      rx: "3",
      ry: "3"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M50.46,22.26h-24a3,3,0,0,0-3,3v24a3,3,0,0,0,3,3H32V36.75a6,6,0,0,1,6-6H53.46V25.26A3,3,0,0,0,50.46,22.26Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M62,33.75H38a3,3,0,0,0-3,3v24a3,3,0,0,0,3,3h5.55V48.24a6,6,0,0,1,6-6H65V36.75A3,3,0,0,0,62,33.75Z"
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