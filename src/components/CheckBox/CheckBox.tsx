import * as Svgs from "@root/assets/svgs/common";
import { FlexCenter } from "@root/constants/Common.style";
import { ReactElement } from "react";
import * as Styled from "./CheckBox.style";

export interface CheckBoxProps {
  active: boolean;
  setter: Function;
  children: ReactElement;
  title: string;
  betweenGap?: number;
  width: number;
  height: number;
  moWidth?: number;
  moHeight?: number;
}

const CheckBox = ({
  active,
  setter,
  children,
  title,
  width,
  height,
  moWidth,
  moHeight,
  betweenGap
}: CheckBoxProps) => {
  return (
    <FlexCenter gap={betweenGap || 10}>
      <Styled.SvgWrapper
        width={width}
        height={height}
        moWidth={moWidth}
        moHeight={moHeight}
        onClick={() => setter(!active)}
        title={title}
        as="button"
      >
        {active ? <Svgs.CheckBoxIcon /> : <Svgs.UnCheckBoxIcon />}
      </Styled.SvgWrapper>
      {children}
    </FlexCenter>
  );
};

export default CheckBox;
