import React from "react";

export interface CheckBoxProps {
  label: string;
}
const CheckBox = ({ label }: CheckBoxProps) => {
  return <div>{label}</div>;
};

export default CheckBox;
