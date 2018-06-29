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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      width: size,
      size: size
    }, otherProps, {
      height: size,
      viewBox: "0 0 100 100"
    }), _react.default.createElement("title", null, "State Manager"), _react.default.createElement("g", null, _react.default.createElement("path", {
      style: {
        "fill": "#4B612C"
      },
      d: "M32.6,26h34.8c5,0,9.1,4.1,9.1,9.1v34.8c0,5-4.1,9.1-9.1,9.1H32.6c-5,0-9.1-4.1-9.1-9.1V35.1 C23.5,30.1,27.6,26,32.6,26z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#759C3E"
      },
      d: "M32.6,23.5h34.8c5,0,9.1,4.1,9.1,9.1v34.8c0,5-4.1,9.1-9.1,9.1H32.6c-5,0-9.1-4.1-9.1-9.1V32.6 C23.5,27.6,27.6,23.5,32.6,23.5z"
    }), _react.default.createElement("g", null, _react.default.createElement("rect", {
      x: "28.8",
      y: "30.5",
      style: {
        "fill": "#FFFFFF"
      },
      width: "23.7",
      height: "6"
    })), _react.default.createElement("circle", {
      style: {
        "fill": "#B7CA9D"
      },
      cx: "67.2",
      cy: "33.5",
      r: "3.3"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#B7CA9D"
      },
      cx: "58",
      cy: "33.5",
      r: "3.3"
    }), _react.default.createElement("rect", {
      x: "58.1",
      y: "54.4",
      style: {
        "fill": "#759C3E"
      },
      width: "10",
      height: "3.7"
    }), _react.default.createElement("g", null, _react.default.createElement("rect", {
      x: "30",
      y: "56.2",
      style: {
        "fill": "#FFFFFF"
      },
      width: "12.5",
      height: "13.5"
    }), _react.default.createElement("rect", {
      x: "43.7",
      y: "42.7",
      style: {
        "fill": "#FFFFFF"
      },
      width: "12.5",
      height: "27"
    }), _react.default.createElement("rect", {
      x: "57.5",
      y: "49.5",
      style: {
        "fill": "#FFFFFF"
      },
      width: "12.5",
      height: "20.3"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#759C3E"
      },
      d: "M36.2,67.5L36.2,67.5c-2.5,0-4.5-2-4.5-4.5v0c0-2.5,2-4.5,4.5-4.5h0c2.5,0,4.5,2,4.5,4.5v0 C40.7,65.5,38.7,67.5,36.2,67.5z"
    }), _react.default.createElement("rect", {
      x: "59.2",
      y: "58.5",
      style: {
        "fill": "#759C3E"
      },
      width: "9",
      height: "9"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#759C3E"
      },
      points: "54.5,67.5 45.5,67.5 50,58.5 \t\t"
    })))) // -- END of generated content.

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