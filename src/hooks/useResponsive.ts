import { vw, vwMobile } from "@root/constants/Size";
import { ROOT_FONT_SIZE, XD_TABLET_WIDTH } from "@root/constants/Variables";
import { debounce } from "lodash";
import { useEffect, useState } from "react";

const useResponsive = (
  rootFontSize?: number,
  criteria?: {
    pc: number;
    break: number;
    mo: number;
  }
) => {
  useEffect(() => {
    const handler = debounce(() => {
      // for nextjs
      if (typeof window == "undefined") return;

      const currentWidth = document.body.clientWidth;

      if (currentWidth < (criteria?.break || XD_TABLET_WIDTH)) {
        document.documentElement.style.fontSize = vwMobile(
          rootFontSize || ROOT_FONT_SIZE
        );
      } else {
        document.documentElement.style.willChange = "font-size";
        document.documentElement.style.height = "100%";
        document.documentElement.style.fontSize = vw(
          rootFontSize || ROOT_FONT_SIZE
        );
      }
    }, 200);

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);
};

export default useResponsive;
