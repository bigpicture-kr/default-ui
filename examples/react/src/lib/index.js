'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Button = function (_a) {
    var label = _a.label;
    return React__default["default"].createElement("div", null, label);
};

var CheckBox = function (_a) {
    var label = _a.label;
    return React__default["default"].createElement("div", null, label);
};

// Desktop
var XD_DESKTOP_WIDTH = 1920;
var ROOT_FONT_SIZE = 10;

var calculator = function (width, criteria, unit) {
    if (unit === void 0) { unit = "vw"; }
    var percentage = (width / criteria) * 100;
    return percentage + unit;
};
var vw = function (width) {
    return calculator(width, XD_DESKTOP_WIDTH);
};

var useResponsive = function (rootFontSize, criteria) {
    if (typeof window !== "undefined") {
        document.documentElement.style.willChange = "font-size";
        document.documentElement.style.height = "100%";
        document.documentElement.style.fontSize = vw(rootFontSize || ROOT_FONT_SIZE);
    }
};

exports.Button = Button;
exports.CheckBox = CheckBox;
exports.useResponsive = useResponsive;
//# sourceMappingURL=index.js.map
