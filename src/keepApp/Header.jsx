import React from "react";
import logo from "../images/img-28.jpg"
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" className="logo"/>
        <span>Keep App</span>
      </div>
    </>
  );
};

export default Header;
