import React from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
      id="navbar"
    >
      <div className="container">
        <NavbarBrand />
        <NavbarMenu />
      </div>
    </nav>
  );
};
export default Navbar;
