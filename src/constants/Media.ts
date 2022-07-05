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
  tablet: customMediaQuery(DEFAULT_TABLET_WIDTH),
  mobile: customMediaQuery(DEFAULT_MOBILE_WIDTH)
};
