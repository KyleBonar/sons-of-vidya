import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logo extends Component {
  render() {
    const Logo = require("../../images/badge_240x150.png");
    return (
      <div id="nav-logo">
        <img src={Logo} />
      </div>
    );
  }
}

class NavCenter extends Component {
  render() {
    return (
      <div id="nav-center">
        <span className="top text-center">The Sons of Vidya Official Website</span>
        <span className="bottom text-center">New Video Everyday, Monday - Friday</span>
      </div>
    );
  }
}

class NavSocial extends Component {
  render() {
    const Youtube = require("../../images/social_youtube_90x90.png");
    const Patreon = require("../../images/social_patreon_90x90.png");
    const Twitter = require("../../images/social_twitter_90x90.png");
    const Facebook = require("../../images/social_facebook_90x90.png");
    return (
      <div id="nav-social">
        <a href="https://www.youtube.com/user/SonsOfVidya" target="_blank">
          <img src={Youtube} className="social-link" />
        </a>

        <a href="https://www.patreon.com/sonsofvidya" target="_blank">
          <img src={Patreon} className="social-link" />
        </a>

        <a href="https://twitter.com/sonsofvidya" target="_blank">
          <img src={Twitter} className="social-link" />
        </a>

        <a href="https://www.facebook.com/Sons-Of-Vidya-256576031127242/" target="_blank">
          <img src={Facebook} className="social-link" />
        </a>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <Logo />

          <NavCenter />

          <NavSocial />
        </div>
      </header>
    );
  }
}

module.exports = Header;
