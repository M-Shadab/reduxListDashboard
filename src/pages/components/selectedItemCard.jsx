import React from "react";
import { SelectItemCardWrapper } from "../../styledComponents/components/card";
import { Font16 } from "../../styledComponents/fonts";

const SelectedItemCard = ({ label, onDelete }) => {
  return (
    <SelectItemCardWrapper>
      <Font16>{label}</Font16>
      <Font16 onClick={onDelete}>X</Font16>
    </SelectItemCardWrapper>
  );
};

export default SelectedItemCard;
