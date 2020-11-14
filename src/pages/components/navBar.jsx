import React from "react";
import { Nav, LinkContainer } from "../../styledComponents/components/navBar";
import { Font20, Font16 } from "../../styledComponents/fonts";
const NavBar = () => {
  return (
    <Nav>
      <Font20>LOGO</Font20>
      <LinkContainer>
        <Font16>Home</Font16>
        <Font16>My Portfolio</Font16>
        <Font16>Client</Font16>
      </LinkContainer>
    </Nav>
  );
};

export default NavBar;
