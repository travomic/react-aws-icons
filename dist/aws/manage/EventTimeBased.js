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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Event Time Based"), _react.default.createElement("circle", {
      style: {
        "fill": "#4b612c"
      },
      cx: "66.9",
      cy: "30.64",
      r: "13"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#4b612c"
      },
      d: "M66.9,45.14a14.5,14.5,0,1,1,14.5-14.5A14.52,14.52,0,0,1,66.9,45.14Zm0-26a11.5,11.5,0,1,0,11.5,11.5A11.51,11.51,0,0,0,66.9,19.14Z"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#fff"
      },
      cx: "66.9",
      cy: "28.16",
      r: "13"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#4f4f4f"
      },
      d: "M66.9,42.66a14.5,14.5,0,1,1,14.5-14.5A14.52,14.52,0,0,1,66.9,42.66Zm0-26a11.5,11.5,0,1,0,11.5,11.5A11.51,11.51,0,0,0,66.9,16.66Z"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4f4f4f"
      },
      x: "60.88",
      y: "27.66",
      width: "7.01",
      height: "3"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4f4f4f"
      },
      x: "66.4",
      y: "19.1",
      width: "3",
      height: "11.56"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "27.7",
      y: "50.04",
      width: "10.71",
      height: "26.44"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "44.62",
      y: "55.19",
      width: "10.71",
      height: "21.29"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#4b612c"
      },
      x: "47.14",
      y: "59.28",
      width: "5.66",
      height: "48.45",
      transform: "translate(133.48 33.53) rotate(90)"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#4b612c"
      },
      d: "M61.54,46.86V76.48H72.25V46.86a11.2,11.2,0,0,1-10.71,0Z"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#759c3e"
      },
      x: "27.7",
      y: "47.56",
      width: "10.71",
      height: "26.44"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#759c3e"
      },
      x: "44.62",
      y: "52.71",
      width: "10.71",
      height: "21.29"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#759c3e"
      },
      x: "47.14",
      y: "56.8",
      width: "5.66",
      height: "48.45",
      transform: "translate(131 31.05) rotate(90)"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#759c3e"
      },
      d: "M61.54,44.38V74H72.25V44.38a11.2,11.2,0,0,1-10.71,0Z"
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