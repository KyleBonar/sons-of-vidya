import React, { Component } from "react";
import PropTypes from "prop-types";

const SocialButtons = ({ id }) => {
  const Youtube = require("../../images/social_youtube_90x90.png");
  const Patreon = require("../../images/social_patreon_90x90.png");
  const Twitter = require("../../images/social_twitter_90x90.png");
  const Facebook = require("../../images/social_facebook_90x90.png");
  return (
    <div id={id}>
      <a
        href="https://www.youtube.com/user/SonsOfVidya"
        target="_blank"
        className="social-item"
      >
        <img src={Youtube} className="social-img" />
      </a>

      <a
        href="https://www.patreon.com/sonsofvidya"
        target="_blank"
        className="social-item"
      >
        <img src={Patreon} className="social-img" />
      </a>

      <a
        href="https://twitter.com/sonsofvidya"
        target="_blank"
        className="social-item"
      >
        <img src={Twitter} className="social-img" />
      </a>

      <a
        href="https://www.facebook.com/Sons-Of-Vidya-256576031127242/"
        target="_blank"
        className="social-item"
      >
        <img src={Facebook} className="social-img" />
      </a>
    </div>
  );
};

SocialButtons.propTypes = {
  id: PropTypes.string
};

export default SocialButtons;
