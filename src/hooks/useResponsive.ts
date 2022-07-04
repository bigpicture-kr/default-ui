import { vw, vwMobile } from "@root/constants/Size";
import {
  DEFAULT_ROOT_FONT_SIZE,
  DEFAULT_DESKTOP_HEIGHT,
  DEFAULT_MOBILE_WIDTH,
  DEFAULT_TABLET_WIDTH
} from "@root/constants/Variables";
import { debounce } from "lodash";
import { useEffect } from "react";

const useResponsive = (
  rootFontSize: number = DEFAULT_ROOT_FONT_SIZE,
  criteria: {
    pc: number;
    break: number;
    mobile: number;
  } = {
    pc: DEFAULT_DESKTOP_HEIGHT,
    break: DEFAULT_TABLET_WIDTH,
    mobile: DEFAULT_MOBILE_WIDTH
  }
) => {
  useEffect(() => {
    const handler = debounce(() => {
      // for nextjs
      if (typeof window == "undefined") return;

      const currentWidth = document.body.clientWidth;

      // set global variables
      global.ROOT_FONT_SIZE = rootFontSize;
      global.sizeCriteria = criteria;

      document.documentElement.style.willChange = "font-size";
      document.documentElement.style.height = "100%";

      if (currentWidth <= sizeCriteria.break) {
        document.documentElement.style.fontSize = vwMobile(
          global.ROOT_FONT_SIZE,
          global.sizeCriteria.break
        );
      } else {
        document.documentElement.style.fontSize = vw(
          global.ROOT_FONT_SIZE,
          global.sizeCriteria.pc
        );
      }
    }, 200);
    handler();
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);
};

export default useResponsive;
