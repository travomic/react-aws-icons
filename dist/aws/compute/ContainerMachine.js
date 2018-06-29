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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Container Machine"), _react.default.createElement("rect", {
      style: {
        "fill": "#9d5025"
      },
      x: "23.5",
      y: "37.61",
      width: "53",
      height: "27.25"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#f58536"
      },
      x: "23.5",
      y: "35.13",
      width: "53",
      height: "27.25"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fbbf93"
      },
      x: "34.95",
      y: "36.76",
      width: "2.5",
      height: "24"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fbbf93"
      },
      x: "25.75",
      y: "36.76",
      width: "2.5",
      height: "24"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fbbf93"
      },
      x: "30.35",
      y: "36.76",
      width: "2.5",
      height: "24"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fbbf93"
      },
      x: "62.55",
      y: "36.76",
      width: "2.5",
      height: "24"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fbbf93"
      },
      x: "67.15",
      y: "36.76",
      width: "2.5",
      height: "24"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fbbf93"
      },
      x: "71.75",
      y: "36.76",
      width: "2.5",
      height: "24"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "26.4",
      y: "37.41",
      width: "1.85",
      height: "23.35"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "31",
      y: "37.41",
      width: "1.85",
      height: "23.35"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "35.6",
      y: "37.41",
      width: "1.85",
      height: "23.35"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "63.2",
      y: "37.41",
      width: "1.85",
      height: "23.35"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "67.8",
      y: "37.41",
      width: "1.85",
      height: "23.35"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#fff"
      },
      x: "72.4",
      y: "37.41",
      width: "1.85",
      height: "23.35"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M57.15,53.12a1.28,1.28,0,0,1,1.29,1.28v1a1.29,1.29,0,0,1-1.29,1.28H42.85a1.29,1.29,0,0,1-1.29-1.28v-1a1.28,1.28,0,0,1,1.29-1.28Zm-.57,2.31a.51.51,0,1,0,0-1H51.23a.51.51,0,1,0,0,1h5.35"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M56.46,40.53a2,2,0,0,1,2,1.94v7.24a2,2,0,0,1-2,1.94H43.52a2,2,0,0,1-1.95-1.94V42.47a2,2,0,0,1,1.95-1.94ZM57,49.72V42.47a.58.58,0,0,0-.59-.58H43.52a.58.58,0,0,0-.58.58v7.24a.58.58,0,0,0,.58.58H56.46a.59.59,0,0,0,.59-.58"
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