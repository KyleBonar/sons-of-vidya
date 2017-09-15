import React, { Component } from "react";
import PropTypes from "prop-types";

const Button = ({ link, text }) => {
  return (
    <a href={link} target="_blank" className="button">
      {text}
    </a>
  );
};

Button.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
export default Button;
