import React, { Component } from "react";

import Header from "../header/Header";
import Banner from "../banner/Banner";
import Single from "../single/Single";
import Blocks from "../blocks/Blocks";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Single />
        <Blocks />
      </div>
    );
  }
}

module.exports = Main;
