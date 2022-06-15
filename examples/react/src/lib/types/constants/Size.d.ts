import { XD_DESKTOP_HEIGHT, XD_DESKTOP_WIDTH, XD_MOBILE_WIDTH } from "./Variables";
export declare const calculator: (width: number, criteria: typeof XD_DESKTOP_WIDTH | typeof XD_DESKTOP_HEIGHT | typeof XD_MOBILE_WIDTH, unit?: string) => string;
export declare const vw: (width: number) => string;
export declare const vwMobile: (width: number) => string;
export declare const pxToRem: (px: number) => string;
