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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Download"), _react.default.createElement("circle", {
      style: {
        "fill": "#9d5025"
      },
      cx: "50",
      cy: "51.25",
      r: "30.43"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#f58536"
      },
      cx: "50",
      cy: "48.75",
      r: "30.43"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M60.68,54.19H63v2H60.68ZM55,27h3V29.9h-2v-1H55Zm1,16.54V39.62h2V43.5Zm2,2.92V50.3h-2V46.41Zm-2-9.72V32.81h2V36.7ZM48,27h4v2H48ZM42.1,27h3v2h-1v1h-2Zm0,5.87h2v3.9h-2Zm0,6.82h2v3.9h-2Zm0,6.82h2v3.9h-2ZM37,54.27h2.37v2H37Zm-1.78,1.79v.18H35l-1.08,1.1-3.13-3.06h4.39v1.54l.12.12ZM39.68,63l-3.29-3.21,1.38-1.4,3.29,3.21Zm1.43-8.68h1v-1h2v2.95h-3Zm4.32,14.31-3.29-3.21L43.53,64l3.29,3.21ZM50,73,47.9,71l1.39-1.4.71.7.71-.7L52.1,71Zm4.57-4.48-1.39-1.4,3.29-3.23,1.39,1.4ZM58.9,56.16h-3V53.21h2v1h1Zm1.43,6.75-1.39-1.39,3.29-3.23,1.39,1.4Zm5.76-5.65L65,56.16h-.17V56l-.12-.12.13-.12V54.19h4.38Z"
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