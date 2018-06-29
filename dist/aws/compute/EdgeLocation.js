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
    }), _react.default.createElement("defs", null, _react.default.createElement("clipPath", {
      id: "clip-path"
    }, _react.default.createElement("path", {
      style: {
        "fill": "#9d5025"
      },
      d: "M76.1,32.91V51.43a56.69,56.69,0,0,0-18.73-4.75V28.16A56.73,56.73,0,0,1,76.1,32.91Z"
    })), _react.default.createElement("clipPath", {
      id: "clip-path-2"
    }, _react.default.createElement("path", {
      style: {
        "fill": "#9d5025"
      },
      d: "M41.9,33.41V47.19a59.66,59.66,0,0,0-18,6V29.79C28.29,27.48,34.42,34.64,41.9,33.41Z"
    }))), _react.default.createElement("title", null, "Edge Location"), _react.default.createElement("rect", {
      style: {
        "fill": "#9d5025"
      },
      x: "23.9",
      y: "60.04",
      width: "52.2",
      height: "18.37"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#9d5025"
      },
      x: "36.21",
      y: "28.72",
      width: "26.85",
      height: "12.87"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#9d5025"
      },
      d: "M76.1,32.91V51.43a56.69,56.69,0,0,0-18.73-4.75V28.16A56.73,56.73,0,0,1,76.1,32.91Z"
    }), _react.default.createElement("g", {
      style: {
        "clip-path": "url(#clip-path)"
      }
    }, _react.default.createElement("g", {
      style: {
        "isolation": "isolate"
      }
    }, _react.default.createElement("path", {
      style: {
        "fill": "#9d5025"
      },
      d: "M76.1,48.25v3.18a56.69,56.69,0,0,0-18.73-4.75V43.51A56.73,56.73,0,0,1,76.1,48.25"
    }))), _react.default.createElement("path", {
      style: {
        "fill": "#9d5025"
      },
      d: "M41.9,33.41V47.19a59.66,59.66,0,0,0-18,6V29.79C28.29,27.48,34.42,34.64,41.9,33.41Z"
    }), _react.default.createElement("g", {
      style: {
        "clip-path": "url(#clip-path-2)"
      }
    }, _react.default.createElement("g", {
      style: {
        "isolation": "isolate"
      }
    }, _react.default.createElement("path", {
      style: {
        "fill": "#9d5025"
      },
      d: "M41.9,44v3.18a59.66,59.66,0,0,0-18,6V50a59.76,59.76,0,0,1,18-6"
    }))), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M76.1,21.59V48.25a56.73,56.73,0,0,0-18.73-4.75V38.41H41.9V44a59.76,59.76,0,0,0-18,6V21.59Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M57.37,48.88a57.19,57.19,0,0,1,18.73,4.8V75.23H23.9v-20a58.28,58.28,0,0,1,18-5.91v6.29H57.37Z"
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