import styled from "styled-components";
import Colors from "@root/constants/Colors";
import { media } from "@root/constants/Media";
import { pxToRem } from "@root/constants/Size";

export const FlexBox = styled.div<{
  direction?: string;
  alignItems?: string;
  gap?: number;
  bgColor?: string;
  position?: "relative" | "absolute" | "fixed";
  moGap?: number;
}>`
  position: ${({ position }) => (position ? position : "static")};
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-start")};
  ${({ gap }) => gap && `gap: ${pxToRem(gap)};`}

  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}

  ${media.tablet} {
    ${({ moGap }) => moGap && `gap: ${pxToRem(moGap)};`}
  }
`;

export const FlexCenter = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;

// 대체텍스트
export const BlindText = styled.h2`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  margin: -1px;
  width: 1px;
  height: 1px;
`;
