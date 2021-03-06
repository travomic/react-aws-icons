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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Fire TV"), _react.default.createElement("path", {
      style: {
        "fill": "#19486f"
      },
      d: "M83.25,29.36H16.75v39.9H44.83l-.25.74A3.8,3.8,0,0,1,41,72.59H28.74v2.85H71.26V72.59H59A3.8,3.8,0,0,1,55.42,70l-.25-.74H83.25ZM79.18,65.2H20.82V33.43H79.18Z"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#99bce3"
      },
      x: "19.33",
      y: "29.36",
      width: "61",
      height: "35.83"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M83.25,27H16.75v39.9H44.83l-.25.74A3.8,3.8,0,0,1,41,70.19H28.74V73H71.26V70.19H59a3.8,3.8,0,0,1-3.6-2.58l-.25-.74H83.25ZM79.18,62.8H20.82V31H79.18Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M66,46.47a.77.77,0,0,0-1-.29c-.37.15-.78.34-1.26.5a34.21,34.21,0,0,1-8.17,1.86,45,45,0,0,1-5.54.24,41,41,0,0,1-6.14-.53,40.11,40.11,0,0,1-6.42-1.51c-1.07-.36-2.13-.75-3.17-1.2-.52-.23-1-.45-1.55-.72l-.82-.41a1.12,1.12,0,0,0-1.12.08,1,1,0,0,0-.34,1.23,1.42,1.42,0,0,0,.49.57l.35.28c.24.18.46.38.71.55.48.35,1,.7,1.47,1a26.94,26.94,0,0,0,3.08,1.75A27.89,27.89,0,0,0,43,52.14a27.36,27.36,0,0,0,12-.06,31.35,31.35,0,0,0,7.94-3,21.72,21.72,0,0,0,2-1.26l.68-.5a.92.92,0,0,0,.17-.16A.62.62,0,0,0,66,46.47Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#2e73b8"
      },
      d: "M69.4,43.65a1.32,1.32,0,0,0-.74-.41,4.71,4.71,0,0,0-.64-.12,8,8,0,0,0-1.25-.06,9.6,9.6,0,0,0-2.39.35,6.26,6.26,0,0,0-2,1,.87.87,0,0,0-.41.5.38.38,0,0,0,.16.41.53.53,0,0,0,.35.06l.94-.17a12.16,12.16,0,0,1,2.91-.25,2.27,2.27,0,0,1,.78.17.74.74,0,0,1,.23.16.73.73,0,0,1,.1.25,2.07,2.07,0,0,1,0,.8,13.1,13.1,0,0,1-1,2.74l-.39.87a.72.72,0,0,0,0,.49.6.6,0,0,0,.55.4,1,1,0,0,0,.73-.34,6.3,6.3,0,0,0,1.42-1.86,9.22,9.22,0,0,0,.79-2.32A8.06,8.06,0,0,0,69.63,45,2.58,2.58,0,0,0,69.4,43.65Z"
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