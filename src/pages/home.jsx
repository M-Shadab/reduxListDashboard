import React from "react";
import NavBar from "./components/navBar";
import Main from "./components/main";
import { Wrapper } from "../styledComponents/home";

const Home = () => {
  return (
    <Wrapper>
      <NavBar />
      <Main />
    </Wrapper>
  );
};

export default Home;
