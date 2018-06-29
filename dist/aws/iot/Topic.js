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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Topic"), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M71.33,28.77c-1.28,1.2-4.62,2.65-9.83,3.58A66.7,66.7,0,0,1,50,33.28c-11.94,0-19.3-2.58-21.35-4.51H28v1.78c0,1.87,7.75,5.52,22,5.52a66.67,66.67,0,0,0,11.54-.94c6.8-1.21,10.42-3.3,10.42-4.58V28.77Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M71.95,71.22a1.13,1.13,0,0,1-.05.21,1.69,1.69,0,0,1-.14.3c-1.17,2-7.42,4.82-20.5,4.82a63.16,63.16,0,0,1-18.61-2.76l.05.27c-2.61-1-4.44-2-4.66-2.83V74c.23.88,2.33,2,5.25,3,3.92,1.25,10,2.27,18,2.27,13.08,0,19.32-2.85,20.5-4.82a1.54,1.54,0,0,0,.14-.29,1.29,1.29,0,0,0,.05-.21.9.9,0,0,0,0-.15V71.07A1,1,0,0,1,71.95,71.22Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M61.24,37.83c-.6.12-1.21.2-1.81.29-.31,0-.62.1-.95.13-.56.07-1.13.13-1.71.19-.37,0-.74.07-1.12.09-.73.06-1.47.1-2.22.13h-.37c-.87,0-1.75.06-2.67.07h-.57c-8.72,0-17.51-1.5-21.78-4.35V72.23c.23.88,2.31,2,5.21,3,3.93,1.25,10,2.27,18,2.27C65.88,77.54,72,74,72,72.07l0-38C69.71,35.63,66,37,61.24,37.83Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M28,28.76c0,1.2,3.21,3.13,9.26,4.36V24.41C31.22,25.64,28,27.56,28,28.76Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M71.92,28.76c0-1.2-3.18-3.1-9.16-4.33v8.67C68.75,31.88,71.92,30,71.92,28.76Z"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "37.27 20.67 41.56 23.74 50.02 29.79 58.47 23.74 62.77 20.67 37.27 20.67"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M61.15,24.14,50,32.11l-11.16-8L37.27,23V33.13A64.12,64.12,0,0,0,50,34.28a66.7,66.7,0,0,0,11.54-.93l1.26-.24V23Z"
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