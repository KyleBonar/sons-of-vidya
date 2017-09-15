import React, { Component } from "react";

import SocialButtons from "../socialButtons/SocialButtons";

const Logo = () => {
  const Logo = require("../../images/badge_240x150.png");
  return (
    <div id="nav-logo">
      <img src={Logo} />
    </div>
  );
};

const NavCenter = () => {
  return (
    <div id="nav-center">
      <span className="top text-center">
        The Sons of Vidya Official Website
      </span>
      <span className="bottom text-center">
        New Video Everyday, Monday - Friday
      </span>
    </div>
  );
};

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header container">
          <Logo />
          <NavCenter />
          <SocialButtons id="nav-social" />
        </div>
      </header>
    );
  }
}

module.exports = Header;
