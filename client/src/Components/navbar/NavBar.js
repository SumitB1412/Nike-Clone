import React from "react";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";
import UpperBar from "./UpperBar";

const NavBar = () => {
  return (
    <>
    <UpperBar/>
    <NavBarDesktop/>
    <NavBarMobile/>
    </>
  );
};

export default NavBar;
