import styled from "styled-components";
import Colors from "./Colors";
import { pxToRem } from "./Size";
import { BOLD_WEIGHT } from "./Variables";

export const Text = styled.span<{
  color?: string;
  lineHeight?: number;
  size?: number;
  whiteSpace?: "pre" | "pre-line" | "pre-wrap";
  alignCenter?: boolean;
  ellipsis?: boolean;
  maxWidth?: number;
  weight?: number;
}>`
  color: ${({ color }) => (color ? color : Colors.black)};
  display: inline-block;
  ${({ lineHeight }) => lineHeight && `line-height: ${pxToRem(lineHeight)};`}
  ${({ size }) => size && `font-size: ${pxToRem(size)};`};
  ${({ weight }) => weight && `font-weight: ${weight};`};
  ${({ alignCenter }) => alignCenter && "text-align: center;"}
  ${({ ellipsis, maxWidth }) =>
    ellipsis &&
    maxWidth &&
    `text-overflow: ellipsis; overflow: hidden; max-width: ${pxToRem(
      maxWidth
    )}; white-space: nowrap;`}
    ${({ whiteSpace }) => whiteSpace && `white-space: ${whiteSpace};`};
`;

export const Robo = styled(Text)`
  font-family: "Roboto";
`;

export const Noto = styled(Text)<{
  fontFamily?: "Roboto" | "NanumSquareRound" | "SCDream";
}>`
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "NotoSansKR")};
`;

// Body 1 ~ 7

/**
 * 바디 7
 * @size 14px
 * @height 24px;
 */
export const Body7 = styled(Noto)`
  font-size: ${pxToRem(12)};
  line-height: 110%;
`;

/**
 * 바디 6
 * @size 14px
 * @height 15.4px;
 */
export const Body6 = styled(Noto)`
  font-size: ${pxToRem(14)};
  line-height: 110%;
`;

/**
 * 바디 5
 * @weight Bold
 * @size 14px
 * @height 15.4px
 */
export const Body5 = styled(Body6)`
  font-weight: 500;
`;

/**
 * 바디 4
 * @size 16px
 * @height 17.6px
 */
export const Body4 = styled(Noto)`
  font-size: ${pxToRem(16)};
  line-height: 110%;
`;

/**
 * 바디 3
 * @weight Bold
 * @size 16px
 * @height 17.6px
 */
export const Body3 = styled(Body4)`
  font-weight: ${BOLD_WEIGHT};
`;

/**
 * 바디 2
 * @size 18px
 * @height 19.8px
 */
export const Body2 = styled(Noto)`
  font-size: ${pxToRem(18)};
  line-height: 110%;
`;

/**
 * 바디 1
 * @weight Bold
 * @size 18px
 * @height 19.8px
 */
export const Body1 = styled(Body2)`
  font-weight: ${BOLD_WEIGHT};
`;

// Subtitle 1 ~ 6

/**
 * 서브타이틀 6
 * @size 20px
 * @height 12px
 */
export const SubTitle6 = styled(Noto)`
  font-size: ${pxToRem(20)};
  line-height: 110%;
`;

/**
 * 서브타이틀 5
 * @size 20px
 * @height 12px
 */
export const SubTitle5 = styled(SubTitle6)`
  font-weight: ${BOLD_WEIGHT};
`;

/**
 * 서브타이틀 4
 * @size 22px
 * @height 24.2px
 */
export const SubTitle4 = styled(Noto)`
  font-size: ${pxToRem(22)};
  line-height: 110%;
`;

/**
 * 서브타이틀 3
 * @weight Bold
 * @size 22px
 * @height 24.2px
 */
export const SubTitle3 = styled(SubTitle4)`
  font-weight: ${BOLD_WEIGHT};
`;

/**
 * 서브타이틀 2
 * @size 24px
 * @height 36px
 */
export const SubTitle2 = styled(Noto)`
  font-size: ${pxToRem(24)};
  line-height: 110%;
`;

/**
 * 서브타이틀 1
 * @weight Bold
 * @size 24px
 * @height 36px
 */
export const SubTitle1 = styled(SubTitle2)`
  font-weight: ${BOLD_WEIGHT};
`;

// Title 1 ~ 3

/**
 * 타이틀 3
 * @weight Bold
 * @size 28px
 * @height 30.8px
 */
export const Title3 = styled(Noto)`
  font-size: ${pxToRem(28)};
  line-height: 110%;
  font-weight: ${BOLD_WEIGHT};
`;

/**
 * 타이틀 2
 * @weight Bold
 * @size 30px
 * @height 33px
 */
export const Title2 = styled(Noto)`
  font-size: ${pxToRem(30)};
  line-height: 110%;
  font-weight: ${BOLD_WEIGHT};
`;

/**
 * 타이틀 1
 * @weight Bold
 * @size 40px
 * @height 44px
 */
export const Title1 = styled(Noto)`
  font-size: ${pxToRem(40)};
  line-height: 110%;
  font-weight: ${BOLD_WEIGHT};
`;
