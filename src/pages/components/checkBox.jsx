import React from "react";
import { Label } from "../../styledComponents/components/checkBox";

const CheckBox = ({ id, label, checked, onChange }) => {
  return (
    <Label htmlFor={id}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <span>{label}</span>
    </Label>
  );
};

export default CheckBox;
