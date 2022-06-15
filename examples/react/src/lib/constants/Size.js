import { ROOT_FONT_SIZE, XD_DESKTOP_WIDTH, XD_MOBILE_WIDTH } from "./Variables";
export var calculator = function (width, criteria, unit) {
    if (unit === void 0) { unit = "vw"; }
    var percentage = (width / criteria) * 100;
    return percentage + unit;
};
export var vw = function (width) {
    return calculator(width, XD_DESKTOP_WIDTH);
};
export var vwMobile = function (width) {
    return calculator(width, XD_MOBILE_WIDTH);
};
export var pxToRem = function (px) {
    return px / ROOT_FONT_SIZE + "rem";
};
//# sourceMappingURL=Size.js.map