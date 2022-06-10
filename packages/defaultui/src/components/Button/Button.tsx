import React from "react";

export interface ButtonProps {
  label: string;
}
const Button = ({ label }: ButtonProps) => {
  return <div>{label}</div>;
};

export default Button;
