import React, { Component } from "react";
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <a href={this.props.link} target="_blank" className="button">
        {this.props.text}
      </a>
    );
  }
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
export default Button;
