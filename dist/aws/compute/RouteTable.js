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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Route Table"), _react.default.createElement("rect", {
      style: {
        "fill": "#9d5025"
      },
      x: "16.53",
      y: "21.14",
      width: "66.94",
      height: "16.44"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#f58536"
      },
      x: "16.53",
      y: "19.11",
      width: "66.94",
      height: "16"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#9d5025"
      },
      x: "16.53",
      y: "42.48",
      width: "66.94",
      height: "17.16"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#f58536"
      },
      x: "16.53",
      y: "41.17",
      width: "66.94",
      height: "16"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#9d5025"
      },
      x: "16.53",
      y: "64.14",
      width: "66.94",
      height: "16.62"
    }), _react.default.createElement("rect", {
      style: {
        "fill": "#f58536"
      },
      x: "16.53",
      y: "62.28",
      width: "66.94",
      height: "16"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M24.78,31.89H23.25V24.81h-2v-1h.15c.92,0,2-.22,2.25-1.46v-.19h1.12Zm8.62-8.32a17.36,17.36,0,0,0-3,8.32H28.78a16.72,16.72,0,0,1,3.14-8.15H27.74V22.33H33.4Zm6.84,8.32H34.66c0-4.24,4-4.14,4-7.17,0-.8-.34-1.47-1.19-1.47-1.15,0-1.33,1-1.33,2H34.68c0-1.94.78-3.14,2.82-3.14a2.41,2.41,0,0,1,2.7,2.6c0,3.24-3.11,3.44-3.83,5.83h3.87Zm3.23,0H41.94V30.08h1.54Zm5.58,0H47.52V24.81h-2v-1h.15c.92,0,2-.22,2.25-1.46v-.19h1.12Zm5.76.19c-2.42,0-2.87-1.87-2.87-4.67s.53-5.28,3-5.28c1.68,0,2.58.77,2.58,2.37H56c0-.56-.26-1.27-1-1.27-1.44,0-1.52,1.94-1.52,3.36l0,0a2,2,0,0,1,1.86-1c1.31,0,2.36,1,2.36,2.91C57.74,30.75,56.84,32.09,54.81,32.09Zm6.06-.19H59.33V30.08h1.54Zm4.49.19c-1.84,0-2.86-1.18-2.86-5s1-5,2.86-5,2.86,1.19,2.86,5S67.19,32.09,65.36,32.09Zm6-.19H69.85V30.08h1.54Zm4.49.19c-1.84,0-2.86-1.18-2.86-5s1-5,2.86-5,2.86,1.19,2.86,5S77.71,32.09,75.88,32.09Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M75.88,44.22c1.83,0,2.86,1.18,2.86,5s-1,5-2.86,5S73,53,73,49.19,74,44.22,75.88,44.22Zm-6,7.93h1.54V54H69.85Zm-6.92-6.28h.15c.92,0,2-.22,2.25-1.46v-.19h1.12V54H64.91V46.89h-2Zm-3.6,6.28h1.54V54H59.33ZM55,44.22c1.68,0,2.58.77,2.58,2.37H56c0-.56-.26-1.27-1-1.27-1.44,0-1.52,1.94-1.52,3.36l0,0a2,2,0,0,1,1.86-1c1.31,0,2.36,1,2.36,2.91,0,2.25-.9,3.58-2.93,3.58-2.42,0-2.87-1.87-2.87-4.67S52.47,44.22,55,44.22Zm-9.45,1.65h.15c.92,0,2-.22,2.25-1.46v-.19h1.12V54H47.52V46.89h-2Zm-3.6,6.28h1.54V54H41.94Zm-4.46-6.83c-1.15,0-1.33,1-1.33,2H34.68c0-1.94.78-3.14,2.82-3.14a2.41,2.41,0,0,1,2.7,2.6c0,3.24-3.11,3.44-3.83,5.82h3.87V54H34.66c0-4.24,4-4.14,4-7.18C38.66,46,38.32,45.32,37.47,45.32Zm-9.74-.91H33.4v1.24a17.38,17.38,0,0,0-3,8.32H28.78a16.73,16.73,0,0,1,3.14-8.15H27.74Zm-6.47,1.46h.15c.92,0,2-.22,2.25-1.46v-.19h1.12V54H23.25V46.89h-2Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M75.88,65.35c1.83,0,2.86,1.18,2.86,5s-1,5-2.86,5S73,74.1,73,70.32,74,65.35,75.88,65.35Zm-6,7.93h1.54V75.1H69.85Zm-4.46-6.83c-1.15,0-1.33,1-1.33,2H62.59c0-1.94.78-3.14,2.82-3.14a2.41,2.41,0,0,1,2.7,2.6c0,3.23-3.1,3.44-3.83,5.82h3.87V75.1H62.57c0-4.24,4-4.15,4-7.18C66.57,67.12,66.24,66.45,65.39,66.45Zm-6.05,6.83h1.54V75.1H59.33ZM55,65.35c1.68,0,2.58.77,2.58,2.37H56c0-.57-.26-1.27-1-1.27-1.44,0-1.52,1.94-1.52,3.36l0,0a2,2,0,0,1,1.86-1c1.31,0,2.36,1,2.36,2.91,0,2.25-.9,3.58-2.93,3.58-2.42,0-2.87-1.87-2.87-4.67S52.47,65.35,55,65.35ZM45.54,67h.15c.92,0,2-.22,2.25-1.46v-.19h1.12V75.1H47.52V68h-2Zm-3.6,6.28h1.54V75.1H41.94Zm-4.46-6.83c-1.15,0-1.33,1-1.33,2H34.68c0-1.94.78-3.14,2.82-3.14a2.41,2.41,0,0,1,2.7,2.6c0,3.23-3.11,3.44-3.83,5.82h3.87V75.1H34.66c0-4.24,4-4.15,4-7.18C38.66,67.12,38.32,66.45,37.47,66.45Zm-9.74-.91H33.4v1.24a17.37,17.37,0,0,0-3,8.32H28.78a16.73,16.73,0,0,1,3.14-8.15H27.74ZM21.26,67h.15c.92,0,2-.22,2.25-1.46v-.19h1.12V75.1H23.25V68h-2Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M65.36,23.39c-1.05,0-1.32,1-1.32,3.87s.27,3.87,1.32,3.87,1.32-1,1.32-3.87S66.41,23.39,65.36,23.39Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M75.88,23.39c-1.05,0-1.32,1-1.32,3.87s.27,3.87,1.32,3.87,1.32-1,1.32-3.87S76.93,23.39,75.88,23.39Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M75.88,53.2c1.05,0,1.32-1,1.32-3.87s-.27-3.87-1.32-3.87-1.32,1-1.32,3.87S74.82,53.2,75.88,53.2Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M54.94,53.2c.94,0,1.27-1,1.27-2.09,0-1.35-.39-2.11-1.27-2.11-1.12,0-1.32,1-1.32,2.18S54,53.2,54.94,53.2Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M75.88,74.33c1.05,0,1.32-1,1.32-3.87s-.27-3.87-1.32-3.87-1.32,1-1.32,3.87S74.82,74.33,75.88,74.33Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M54.94,74.33c.94,0,1.27-1,1.27-2.09,0-1.35-.39-2.11-1.27-2.11-1.12,0-1.32,1-1.32,2.18S54,74.33,54.94,74.33Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#f58536"
      },
      d: "M54.94,31.13c.94,0,1.27-1,1.27-2.09,0-1.35-.39-2.11-1.27-2.11-1.12,0-1.32,1-1.32,2.18S54,31.13,54.94,31.13Z"
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