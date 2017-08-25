import React, { Component } from "react";

class Single extends Component {
  render() {
    const star = require("../../images/star.png");
    return (
      <section id="hero">
        <div className="title-holder">
          <img src={star} className="star" />
          <img src={star} className="star" />
          <img src={star} className="star" />
          <span className="title">Featured Video</span>
          <img src={star} className="star" />
          <img src={star} className="star" />
          <img src={star} className="star" />
        </div>
        <div className="container">
          <div className="laughin-clapin">Laughin and Clappin'</div>
          <div className="video-container">Video here</div>
        </div>
      </section>
    );
  }
}

module.exports = Single;
