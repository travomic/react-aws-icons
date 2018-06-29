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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "X1"), _react.default.createElement("rect", {
      style: {
        "fill": "#9d5025"
      },
      x: "23.5",
      y: "24.74",
      width: "53",
      height: "53",
      rx: "9.12",
      ry: "9.12"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#f58536"
      },
      x: "23.5",
      y: "22.26",
      width: "53",
      height: "53",
      rx: "9.12",
      ry: "9.12"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "none",
        "stroke": "#fff",
        "stroke-miterlimit": "10",
        "stroke-width": "3px"
      },
      x: "36.25",
      y: "35.01",
      width: "27.5",
      height: "27.5"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M40.56,40.9H44l2,5.06,2-5.06h3.44l-3.63,7.73,3.9,7.9H48.2l-2.25-5.3-2.23,5.3H40.26l3.9-7.9Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M55.87,56.53V45.58H52.78V43.53h.28c2.06,0,3.33-.79,3.63-2.5H59v15.5Z"
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