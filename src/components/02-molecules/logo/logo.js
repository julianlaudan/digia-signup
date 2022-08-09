import React, { Fragment } from "react";
import LogoImage from "./logo-nord-software.png";

const Logo = () => {
  return (
    <div className="digi-logo">
      <Fragment>
        <a href="/" rel="home" title="Back home" className="digi-logo__link">
          <img
            className="digi-image digi-image--logo"
            src={LogoImage}
            alt="Nord Software"
          />
        </a>
      </Fragment>
      <Fragment>
        <p className="digi-heading digi-heading--logo">Nord Software</p>
      </Fragment>
    </div>
  );
};

export default Logo;
