import {
  DEFAULT_DESKTOP_HEIGHT,
  DEFAULT_MOBILE_WIDTH,
  DEFAULT_TABLET_WIDTH
} from "@root/constants/Variables";

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(DEFAULT_DESKTOP_HEIGHT),
  tablet: customMediaQuery(global.sizeCriteria.break || DEFAULT_TABLET_WIDTH), // 768
  mobile: customMediaQuery(global.sizeCriteria.mobile || DEFAULT_MOBILE_WIDTH)
};
