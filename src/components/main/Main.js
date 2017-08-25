import React, { Component } from "react";

import Header from "../header/Header";
import Banner from "../banner/Banner";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
      </div>
    );
  }
}

module.exports = Main;
