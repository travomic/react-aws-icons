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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Fire TVStick"), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M16.25,39.27H76.2a0,0,0,0,1,0,0V65.52a0,0,0,0,1,0,0H16.25a2,2,0,0,1-2-2V41.27A2,2,0,0,1,16.25,39.27Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M16.25,36.88H76.2a0,0,0,0,1,0,0V63.13a0,0,0,0,1,0,0H16.25a2,2,0,0,1-2-2V38.88A2,2,0,0,1,16.25,36.88Z"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "87.67 43.45 87.64 43.45 76.2 43.45 76.2 61.35 87.64 61.35 87.67 61.35 90.03 57.85 90.03 46.95 87.67 43.45"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#99bce3"
      },
      x: "76.2",
      y: "41.05",
      width: "11.44",
      height: "17.89"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "87.67 41.05 85.97 41.05 85.97 58.95 87.67 58.95 90.03 55.45 90.03 44.55 87.67 41.05"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M60.22,48.56a.77.77,0,0,0-1-.29c-.37.15-.78.34-1.26.5a34.21,34.21,0,0,1-8.17,1.86,45,45,0,0,1-5.54.24,41,41,0,0,1-6.14-.53,40.11,40.11,0,0,1-6.42-1.51c-1.07-.36-2.13-.75-3.17-1.2-.52-.23-1-.45-1.55-.72l-.82-.41a1.12,1.12,0,0,0-1.12.08,1,1,0,0,0-.34,1.23,1.42,1.42,0,0,0,.49.57l.35.28c.24.18.46.38.71.55.48.35,1,.7,1.47,1A26.94,26.94,0,0,0,30.78,52a27.89,27.89,0,0,0,6.49,2.25,27.36,27.36,0,0,0,12-.06,31.35,31.35,0,0,0,7.94-3,21.72,21.72,0,0,0,2-1.26l.68-.5a.92.92,0,0,0,.17-.16A.62.62,0,0,0,60.22,48.56Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M63.63,45.73a1.32,1.32,0,0,0-.74-.41,4.71,4.71,0,0,0-.64-.12A8,8,0,0,0,61,45.14a9.6,9.6,0,0,0-2.39.35,6.26,6.26,0,0,0-2,1,.87.87,0,0,0-.41.5.38.38,0,0,0,.16.41.53.53,0,0,0,.35.06l.94-.17A12.16,12.16,0,0,1,60.53,47a2.27,2.27,0,0,1,.78.17.74.74,0,0,1,.23.16.73.73,0,0,1,.1.25,2.07,2.07,0,0,1,0,.8,13.1,13.1,0,0,1-1,2.74l-.39.87a.72.72,0,0,0,0,.49.6.6,0,0,0,.55.4,1,1,0,0,0,.73-.34,6.3,6.3,0,0,0,1.42-1.86,9.22,9.22,0,0,0,.79-2.32,8.06,8.06,0,0,0,.16-1.26A2.58,2.58,0,0,0,63.63,45.73Z"
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