import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as types from "../../store/types";
import CheckBox from "./checkBox";
import SelectedItemCard from "./selectedItemCard";
import { Font20 } from "../../styledComponents/fonts";
import {
  Wrapper,
  CategoryWrapper,
} from "../../styledComponents/components/card";

const Card = ({ showType }) => {
  const dispatch = useDispatch();
  const data = useSelector(({ data }) => data);

  const handleChange = (optionId, categoryId) => {
    const selectedOption = data[categoryId].list[optionId];
    selectedOption.checked = !selectedOption.checked;

    selectedOption.checked
      ? data[categoryId].totalChecked++
      : data[categoryId].totalChecked > 0 && data[categoryId].totalChecked--;

    return dispatch({
      type: types.UPDATE_OPTION,
      payload: data,
    });
  };

  const renderOptionCard = () => {
    const categoryList = Object.values(data);

    return categoryList.map((category) => {
      const secondCard =
        category.totalChecked > 0 && showType === "onlyChecked";
      const firstCard = showType === "all";
      const optionList = Object.values(category.list);

      return (
        (firstCard || secondCard) && (
          <CategoryWrapper key={category.id}>
            <Font20>{category.category}</Font20>
            {optionList.map((option) =>
              firstCard ? (
                <CheckBox
                  key={option.id}
                  id={option.id}
                  label={option.label}
                  checked={option.checked}
                  onChange={(e) => handleChange(option.id, category.id)}
                />
              ) : (
                option.checked && (
                  <SelectedItemCard
                    key={option.id}
                    label={option.label}
                    onDelete={() => handleChange(option.id, category.id)}
                  />
                )
              )
            )}
          </CategoryWrapper>
        )
      );
    });
  };

  return <Wrapper>{renderOptionCard()}</Wrapper>;
};

export default Card;
