import React, { Component } from "react";

class Referrals extends Component {
  render() {
    const referralBanner = require("../../images/badge_referral_250x100.png");
    return (
      <div id="referrals">
        <div className="programContainer">
          <img src={referralBanner} className="referallBanner" />
          <p className="font-fancy title">Sons of Vidya</p>
          <p className="font-primary program">Referral Program</p>
          <p className="font-primary description">Recommend Us To Everyone!</p>
        </div>
      </div>
    );
  }
}

class Rewards extends Component {
  render() {
    const rewardsBanner = require("../../images/badge_rewards_250x100.png");
    return (
      <div id="rewards">
        <div className="programContainer">
          <img src={rewardsBanner} className="rewardsBanner" />
          <p className="font-fancy title">Sons of Vidya</p>
          <p className="font-primary program">Rewards Program</p>
          <p className="font-primary description">Free Appreciation With Every View!</p>
        </div>
      </div>
    );
  }
}

class Programs extends Component {
  render() {
    return (
      <section id="programs">
        <Referrals />
        <Rewards />
      </section>
    );
  }
}

module.exports = Programs;
