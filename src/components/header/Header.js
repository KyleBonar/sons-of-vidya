import React, { Component } from "react";
import { Link } from "react-router-dom";

const Logo = require("../../images/badge_240x150.png");
const Youtube = require("../../images/social_youtube_90x90.png");
const Patreon = require("../../images/social_patreon_90x90.png");
const Twitter = require("../../images/social_twitter_90x90.png");
const Facebook = require("../../images/social_facebook_90x90.png");

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <div id="nav-logo">
            <img src={Logo} />
          </div>

          <div id="nav-center">
            <span className="top">The Sons of Vidya Official Website</span>
            <span className="bottom">New Video Everyday, Monday - Friday</span>
          </div>

          <div id="nav-social">
            <a href="https://www.youtube.com/user/SonsOfVidya">
              <img src={Youtube} className="social-link"/>
            </a>

            <a href="https://www.patreon.com/sonsofvidya">
              <img src={Patreon} className="social-link"/>
            </a>

            <a href="https://twitter.com/sonsofvidya">
              <img src={Twitter} className="social-link"/>
            </a>

            <a href="https://www.facebook.com/Sons-Of-Vidya-256576031127242/">
              <img src={Facebook} className="social-link"/>
            </a>
          </div>
        </div>
      </header>
    );
  }
}

module.exports = Header;
