import React, { Component } from "react";

import SectionTitles from "../sectionTitles/SectionTitles";
import PlaylistItems from "./PlaylistItems";

class Item extends Component {
  render() {
    return (
      <div>
        <a href={this.props.link} target="_blank">
          <img src={this.props.img} />
          <span className="font-primary video-title">{this.props.title}</span>
        </a>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <section id="playlists">
        <SectionTitles title="Playlists" />
        <div className="container">
          {PlaylistItems.map((item, index) => (
            <Item
              title={item.title}
              img={item.img}
              link={item.link}
              key={index}
            />
          ))}
        </div>
      </section>
    );
  }
}

module.exports = Playlist;
