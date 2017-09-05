import React, { Component } from "react";

import SectionTitles from "../sectionTitles/SectionTitles";

class Featured extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "AIzaSyALj1_1OHf-JhgtvZhl4xbKaY0A7GcjNd4"
    };

    this.getLatestYoutube = this.getLatestYoutube.bind(this);
  }

  componentDidMount() {
    this.getLatestYoutube();
  }

  render() {
    return (
      <section id="single">
        <SectionTitles title="Featured Videos" />
        <div className="content container">
          <div className="latest-holder">
            <span>Sons' Pick</span>
            <div className="video-holder">
              <iframe
                id="ytplayer"
                type="text/html"
                src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0&origin=http://example.com"
                frameborder="0"
              />
            </div>
          </div>
          <div className="latest-holder">
            <span>Latest</span>
            <div className="video-holder">
              <iframe
                id="ytplayer"
                type="text/html"
                src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0&origin=http://example.com"
                frameborder="0"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  getLatestYoutube() {}
}

module.exports = Featured;
