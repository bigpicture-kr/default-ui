import { DEFAULT_ROOT_FONT_SIZE } from "./Variables";

export const calculator = (
  rootFontSize: number,
  criteria: number,
  unit: string = "vw"
) => {
  const percentage = (rootFontSize / criteria) * 100;

  return percentage + unit;
};

export const vw = (rootFontSize: number, pcWidth: number) => {
  return calculator(rootFontSize, pcWidth);
};

export const vwMobile = (rootFontSize: number, moWidth: number) => {
  return calculator(rootFontSize, moWidth);
};

export const pxToRem = (px: number): string => {
  return px / (global.ROOT_FONT_SIZE || DEFAULT_ROOT_FONT_SIZE) + "rem";
};
