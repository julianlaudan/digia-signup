import React from "react";
import Logo from "./../../02-molecules/logo/logo";

const Header = () => {
  return (
    <header role="banner" className="digi-header">
      <div className="digi-header__container">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
