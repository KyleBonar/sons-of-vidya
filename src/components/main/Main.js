import React, { Component } from "react";

import About from "../about/About";
import Banner from "../banner/Banner";
import Blocks from "../blocks/Blocks";
import Header from "../header/Header";
import Featured from "../featured/Featured";
import Programs from "../programs/Programs"
import Playlist from "../playlist/Playlist";
import Footer from "../footer/Footer";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <About />
        <Blocks />
        <Featured />
        <Programs />
        <Playlist />
        <Footer />
      </div>
    );
  }
}

module.exports = Main;
