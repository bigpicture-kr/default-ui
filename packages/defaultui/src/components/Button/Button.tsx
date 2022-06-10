import React from "react";
import * as Styled from "./Button.style";

export interface ButtonProps {
  label: string;
}
const Button = ({ label }: ButtonProps) => {
  return <Styled.Container>{label}</Styled.Container>;
};

export default Button;
