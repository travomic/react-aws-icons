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
      d: "M39.27,19.87v.56a1.6,1.6,0,0,1-1.6,1.6v-.56A1.6,1.6,0,0,0,39.27,19.87Z"
    })), _react.default.createElement("clipPath", {
      id: "clip-path-2"
    }, _react.default.createElement("path", {
      style: {
        "fill": "#9d5025"
      },
      d: "M31.53,21.46V22a1.6,1.6,0,0,1-1.61-1.6v-.56A1.6,1.6,0,0,0,31.53,21.46Z"
    }))), _react.default.createElement("title", null, "Spot Fleet"), _react.default.createElement("rect", {
      style: {
        "fill": "none",
        "stroke": "#7d7d7d",
        "stroke-miterlimit": "10",
        "stroke-dasharray": "2.12"
      },
      x: "16.45",
      y: "16.45",
      width: "67.1",
      height: "67.1",
      rx: "7.7",
      ry: "7.7"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M37.67,12a1.6,1.6,0,0,1,1.6,1.6v6.28a1.6,1.6,0,0,1-1.6,1.6H31.53a1.6,1.6,0,0,1-1.61-1.6V13.59A1.6,1.6,0,0,1,31.53,12Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#9d5025"
      },
      d: "M39.27,19.87v.56a1.6,1.6,0,0,1-1.6,1.6v-.56A1.6,1.6,0,0,0,39.27,19.87Z"
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
      d: "M39.27,19.87v.56a1.66,1.66,0,0,1,0,.23V20.1a1.66,1.66,0,0,0,0-.23"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#9d5025"
      },
      d: "M39.26,20.1v.56a1.66,1.66,0,0,1-.06.26v-.56a1.66,1.66,0,0,0,.06-.26"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#9d5025"
      },
      d: "M39.2,20.36v.56a1.57,1.57,0,0,1-.12.28v-.56a1.56,1.56,0,0,0,.12-.28"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#9d5025"
      },
      d: "M39.08,20.64v.56a1.6,1.6,0,0,1-1.41.83v-.56a1.6,1.6,0,0,0,1.41-.83"
    }))), _react.default.createElement("rect", {
      style: {
        "fill": "#9d5025"
      },
      x: "31.46",
      y: "21.46",
      width: "6.22",
      height: "0.56"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#9d5025"
      },
      d: "M31.53,21.46V22a1.6,1.6,0,0,1-1.61-1.6v-.56A1.6,1.6,0,0,0,31.53,21.46Z"
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
      d: "M31.59,21.46V22a1.66,1.66,0,0,1-1.67-1.6v-.56a1.6,1.6,0,0,0,1.61,1.6"
    }))), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M34.5,19.37a2.24,2.24,0,0,1-2.14-2.47c0-1.56.89-2.57,2.14-2.57v-.83h.4v.83a1.87,1.87,0,0,1,2,1.73H35.82a.94.94,0,0,0-.92-.9v3.38a1.12,1.12,0,0,0,1-1.09h1.06c-.21,1.17-.86,1.93-2,1.93v.83h-.4Zm0-4.21c-.82.07-1.08,1-1.08,1.74s.31,1.52,1.08,1.64Z"
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