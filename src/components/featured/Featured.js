import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import SectionTitles from "../sectionTitles/SectionTitles";

const GetVideo = ({ title, videoID }) => {
  return (
    <div className="latest-holder">
      <span>{title}</span>
      <div className="video-holder">
        <iframe
          type="text/html"
          src={`https://www.youtube.com/embed/${videoID}?autoplay=0`}
          frameBorder="0"
        />
      </div>
    </div>
  );
};

GetVideo.propTypes = {
  title: PropTypes.string.isRequired,
  videoID: PropTypes.string.isRequired
};

class Featured extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "AIzaSyALj1_1OHf-JhgtvZhl4xbKaY0A7GcjNd4",
      channelID: "UC7Lef3r2J8uA5PidtcOC3fQ",
      latestVideoID: "",
      sonsPickVideoID: "",
      defaultVideoID: "u2lMI37CIk0"
    };

    this.getLatestYoutube = this.getLatestYoutube.bind(this);
  }

  componentDidMount() {
    this.getLatestYoutube();
  }

  render() {
    return (
      <section id="featured">
        <SectionTitles title="Featured Videos" />
        <div className="content container">
          <GetVideo
            title="Sons Pick"
            videoID={this.state.sonsPickVideoID || this.state.defaultVideoID}
          />
          <GetVideo
            title="Latest Video"
            videoID={this.state.latestVideoID || this.state.defaultVideoID}
          />
        </div>
      </section>
    );
  }

  getLatestYoutube() {
    axios({
      method: "get",
      url: `https://www.googleapis.com/youtube/v3/search?key=${this.state
        .key}&part=snippet&channelId=${this.state
        .channelID}&order=date&maxResults=5`
    })
      .then(response => {
        this.setState({
          latestVideoID: response.data.items[0].id.videoId
        });
      })
      .catch(err => console.log(err));
  }
}

module.exports = Featured;
