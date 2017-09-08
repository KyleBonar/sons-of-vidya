import React, { Component } from "react";
import PropTypes from "prop-types";

class SectionTitles extends Component {
  render() {
    const star = require("../../images/star.png");
    return (
      <div className="title-holder">
        <img src={star} className="star" />
        <img src={star} className="star" />
        <img src={star} className="star" />
        <span className="title">{this.props.title}</span>
        <img src={star} className="star" />
        <img src={star} className="star" />
        <img src={star} className="star" />
      </div>
    );
  }
}
SectionTitles.propTypes = {
  title: PropTypes.string.isRequired
};

module.exports = SectionTitles;
