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
// Tablet
var XD_TABLET_WIDTH = 768;
// Mobile
var XD_MOBILE_WIDTH = 384;
var ROOT_FONT_SIZE = 10;

var calculator = function (width, criteria, unit) {
    if (unit === void 0) { unit = "vw"; }
    var percentage = (width / criteria) * 100;
    return percentage + unit;
};
var vw = function (width) {
    return calculator(width, XD_DESKTOP_WIDTH);
};
var vwMobile = function (width) {
    return calculator(width, XD_MOBILE_WIDTH);
};

var useResponsive = function (rootFontSize, criteria) {
    React.useEffect(function () {
        var handler = function () {
            if (typeof window == "undefined")
                return;
            var currentWidth = document.body.clientWidth;
            if (currentWidth < ((criteria === null || criteria === void 0 ? void 0 : criteria.break) || XD_TABLET_WIDTH)) {
                document.documentElement.style.fontSize = vwMobile(rootFontSize || ROOT_FONT_SIZE);
            }
            else {
                document.documentElement.style.willChange = "font-size";
                document.documentElement.style.height = "100%";
                document.documentElement.style.fontSize = vw(rootFontSize || ROOT_FONT_SIZE);
            }
        };
        window.addEventListener("resize", handler);
        return function () {
            window.removeEventListener("resize", handler);
        };
    }, []);
};

exports.Button = Button;
exports.CheckBox = CheckBox;
exports.useResponsive = useResponsive;
//# sourceMappingURL=index.js.map
