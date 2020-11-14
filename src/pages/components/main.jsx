import React from "react";
import Card from "./card";
import { Main as MainWrapper } from "../../styledComponents/components/main";

const Main = () => {
  return (
    <MainWrapper>
      <Card showType="all" />
      <Card showType="onlyChecked" />
    </MainWrapper>
  );
};

export default Main;
