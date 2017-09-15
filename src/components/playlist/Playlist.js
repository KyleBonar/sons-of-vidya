import React, { Component } from "react";
import PropType from "prop-types";

import SectionTitles from "../sectionTitles/SectionTitles";
import PlaylistItems from "./PlaylistItems";
import Button from "../button/Button";

const Item = ({ link, img, title }) => {
  return (
    <div className="playlist-item">
      <a href={link} target="_blank">
        <img src={img} className="playlist-img" />
        <span className="font-primary video-title">{title}</span>
      </a>
    </div>
  );
};

Item.propTypes = {
  link: PropType.string.isRequired,
  img: PropType.string.isRequired,
  title: PropType.string.isRequired
};

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
        <div className="extra">
          <Button
            link="https://www.youtube.com/user/SonsOfVidya/playlists"
            text="See All Playlists"
          />
        </div>
      </section>
    );
  }
}

module.exports = Playlist;
