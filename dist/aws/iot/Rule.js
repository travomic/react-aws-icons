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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Rule"), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M71.35,43.69c-1.28,1.2-4.62,2.65-9.83,3.58A66.7,66.7,0,0,1,50,48.21c-11.94,0-19.3-2.58-21.35-4.51H28v1.78C28,47.34,35.78,51,50,51a66.67,66.67,0,0,0,11.54-.94c6.8-1.21,10.42-3.3,10.42-4.58V43.69Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M72,86.15a1.13,1.13,0,0,1-.05.21,1.69,1.69,0,0,1-.14.3c-1.17,2-7.42,4.82-20.5,4.82A63.16,63.16,0,0,1,32.67,88.7l.05.27c-2.61-1-4.44-2-4.66-2.83v2.79c.23.88,2.33,2,5.25,3,3.92,1.25,10,2.27,18,2.27,13.08,0,19.32-2.85,20.5-4.82a1.54,1.54,0,0,0,.14-.29,1.29,1.29,0,0,0,.05-.21.9.9,0,0,0,0-.15V86A1,1,0,0,1,72,86.15Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M61.25,52.76c-.6.12-1.21.2-1.81.29-.31,0-.62.1-.95.13-.56.07-1.13.13-1.71.19-.37,0-.74.07-1.12.09-.73.06-1.47.1-2.22.13h-.37c-.87,0-1.75.06-2.67.07h-.57c-8.72,0-17.51-1.5-21.78-4.35V87.15c.23.88,2.31,2,5.21,3,3.93,1.25,10,2.27,18,2.27C65.9,92.47,72,88.9,72,87l0-38C69.73,50.56,66,51.92,61.25,52.76Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M28,43.69c0,1.2,3.21,3.13,9.26,4.36V39.34C31.24,40.56,28,42.49,28,43.69Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M71.94,43.69c0-1.2-3.18-3.1-9.16-4.33V48C68.76,46.8,71.94,44.88,71.94,43.69Z"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "37.28 35.59 41.58 38.66 50.03 44.71 58.48 38.67 62.78 35.59 37.28 35.59"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M61.17,39.06,50,47,38.87,39,37.29,37.9V48A64.12,64.12,0,0,0,50,49.21a66.7,66.7,0,0,0,11.54-.93L62.79,48V37.9Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M50,33.74a1.5,1.5,0,0,1-1.5-1.5V28.36L34.94,14.82a1.5,1.5,0,0,1,2.12-2.12l14,14a1.5,1.5,0,0,1,.44,1.06v4.5A1.5,1.5,0,0,1,50,33.74Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M50,29.24a1.5,1.5,0,0,1-1.06-2.56l14-14A1.5,1.5,0,0,1,65,14.82l-14,14A1.5,1.5,0,0,1,50,29.24Z"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#2e73b8"
      },
      x: "30.33",
      y: "8.09",
      width: "11.33",
      height: "11.33",
      transform: "translate(20.27 -21.43) rotate(45)"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#2e73b8"
      },
      cx: "63.97",
      cy: "13.76",
      r: "6.52"
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