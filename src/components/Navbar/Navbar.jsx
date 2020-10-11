import React from "react";
import "./Navbar.scss";
import Logo from "../../images/logo.svg";

const Navbar = () => (
  <div className="navbar">
    <img src={Logo} alt="spacemen head" />
  </div>
);

export default Navbar;