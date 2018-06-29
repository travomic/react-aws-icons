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
    }), _react.default.createElement("title", null, "Visual Studio"), _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "54.62 74.79 81.27 59.65 81.27 29.46 54.62 44.55 54.62 74.79",
      fill: "#53b1cb"
    }), _react.default.createElement("polygon", {
      points: "28 59.65 54.63 74.77 54.63 44.56 28 29.47 28 59.65",
      fill: "#53b1cb"
    }), _react.default.createElement("polygon", {
      points: "81.22 29.44 54.63 14.38 28.03 29.44 54.63 44.54 81.22 29.44",
      fill: "#53b1cb"
    }), _react.default.createElement("polygon", {
      points: "54.63 43.39 79.23 29.46 79.2 29.44 54.63 43.39 54.63 43.39",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "30.06 29.44 30.02 29.46 54.63 43.39 54.63 43.39 30.06 29.44",
      fill: "#fff"
    }), _react.default.createElement("circle", {
      cx: "54.63",
      cy: "43.39",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M81.22,28.29,54.63,13.23,28,28.29l-1,.59V60.25L53.63,75.37l1,.57,1-.57L82.26,60.25V28.88Zm-1,30.79-24.63,14V45.13l24.63-14Zm-26.63,14L29,59.08V31.17l24.63,14ZM30.06,29.44,54.63,15.52,79.2,29.44l0,0L54.63,43.39h0L30,29.46Z",
      fill: "#fff"
    })), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "33.86 84.22 49.17 75.53 49.17 58.19 33.86 66.86 33.86 84.22",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "18.48 75.54 33.85 84.27 33.85 66.84 18.48 58.13 18.48 75.54",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "49.08 58.13 33.84 49.5 18.6 58.13 33.84 66.78 49.08 58.13",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "33.84 65.97 47.66 58.14 47.65 58.13 33.84 65.97 33.84 65.97",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "20.03 58.13 20.01 58.14 33.84 65.97 33.84 65.97 20.03 58.13",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "33.84",
      y: "65.97",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M49.17,57.27,33.84,48.59,18.51,57.27l-.77.44V76L33.09,84.7l.75.43.75-.43L49.94,76V57.7Zm-.73,17.84L34.59,83V67.27l13.85-7.84ZM33.09,83,19.24,75.11V59.43l13.85,7.84ZM20,58.13l13.81-7.82,13.81,7.82h0L33.84,66h0L20,58.14Z",
      fill: "#444"
    })), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "50.22 85.66 59.02 80.66 59.02 70.7 50.22 75.69 50.22 85.66",
      fill: "#4f0f87"
    }), _react.default.createElement("polygon", {
      points: "41.14 80.66 49.94 85.66 49.94 75.69 41.14 70.7 41.14 80.66",
      fill: "#4f0f87"
    }), _react.default.createElement("polygon", {
      points: "58.82 70.45 50.08 65.5 41.34 70.45 50.08 75.41 58.82 70.45",
      fill: "#4f0f87"
    }), _react.default.createElement("polygon", {
      points: "50.08 74.74 57.64 70.46 57.63 70.45 50.08 74.74 50.08 74.74",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "42.53 70.45 42.52 70.46 50.08 74.74 50.08 74.74 42.53 70.45",
      fill: "#fff"
    }), _react.default.createElement("circle", {
      cx: "50.08",
      cy: "74.74",
      transform: "translate(-28.14 30.29) rotate(-26.57)",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M59.15,69.59l-9.07-5.14L41,69.59l-.76.43V81.19l9.08,5.16.75.43.75-.43,9.08-5.16V70Zm-.74,10.73-7.58,4.3V76l7.58-4.29ZM41.75,71.74,49.33,76v8.59l-7.58-4.3Zm.78-1.29,7.55-4.28,7.55,4.28h0l-7.56,4.28h0l-7.56-4.28Z",
      fill: "#fff"
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