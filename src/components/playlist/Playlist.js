import React, { Component } from "react";

import SectionTitles from "../sectionTitles/SectionTitles";

class Playlist extends Component {
  render() {
    return (
      <section id="playlists">
        <SectionTitles title="Playlists" />
      </section>
    );
  }
}

module.exports = Playlist;
