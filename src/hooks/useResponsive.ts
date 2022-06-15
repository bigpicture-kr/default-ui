import { vw } from "@root/constants/Size";
import { ROOT_FONT_SIZE } from "@root/constants/Variables";

const useResponsive = (
  rootFontSize?: number,
  criteria?: {
    pc: number;
    mo: number;
  }
) => {
  if (typeof window !== "undefined") {
    document.documentElement.style.willChange = "font-size";
    document.documentElement.style.height = "100%";
    document.documentElement.style.fontSize = vw(
      rootFontSize || ROOT_FONT_SIZE
    );
  }
};

export default useResponsive;
