import styled from "styled-components";
import { FlexBox, FlexCenter } from "@root/constants/Common.style";
import { media } from "@root/constants/Media";
import { pxToRem } from "@root/constants/Size";

export const SvgWrapper = styled(FlexCenter)<{
  width: number;
  height: number;
  moWidth?: number;
  moHeight?: number;
}>`
  width: ${({ width }) => pxToRem(width)};
  height: ${({ height }) => pxToRem(height)};
  ${media.tablet} {
    ${({ moWidth }) => moWidth && `width: ${pxToRem(moWidth)};`}
    ${({ moHeight }) => moHeight && `height: ${pxToRem(moHeight)};`}
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`;
