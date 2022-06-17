import React from "react";
import * as Styled from "./Button.style";
export interface ButtonPropsType {
  children: React.ReactElement;
  width: number;
  height: number;
  filled: boolean;
  onClickHandler: Function;
  bgColor: string;
  title: string;
  disable?: boolean;
  borderRadius?: number;
  relative?: boolean;
  shadow?: string;
  moWidth?: number;
  moHeight?: number;
}
const Button = ({
  children,
  width,
  height,
  filled,
  onClickHandler,
  bgColor,
  title,
  disable,
  borderRadius,
  relative,
  shadow,
  moWidth,
  moHeight
}: ButtonPropsType) => {
  return (
    <Styled.Container
      width={width}
      height={height}
      filled={filled}
      bgColor={bgColor}
      onClick={() => {
        onClickHandler();
      }}
      title={title}
      disabled={disable}
      borderRadius={borderRadius}
      relative={relative}
      shadow={shadow}
      moWidth={moWidth}
      moHeight={moHeight}
    >
      {children}
    </Styled.Container>
  );
};

export default Button;
