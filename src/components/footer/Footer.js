import React, {Component} from "react";

import {SocialButtons} from '../socialButtons/SocialButtons'

class Rights extends Component {
  render() {
    return(
      <div className="rights">
        2017, All Rights Reserved
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return( <section id="footer">
      <div className="container">
        <Rights />
        <SocialButtons id="footer-social"/>
      </div>
    </section>)
  }
}

module.exports = Footer;