import React, { Component } from "react";

import Header from "../header/Header";
import Banner from "../banner/Banner";
import Single from "../single/Single";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Single />
      </div>
    );
  }
}

module.exports = Main;
