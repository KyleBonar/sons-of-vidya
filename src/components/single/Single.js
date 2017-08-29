import React, { Component } from "react";

class Single extends Component {
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
    const star = require("../../images/star.png");
    return (
      <section id="single">
        <div className="title-holder">
          <img src={star} className="star" />
          <img src={star} className="star" />
          <img src={star} className="star" />
          <span className="title">Featured Videos</span>
          <img src={star} className="star" />
          <img src={star} className="star" />
          <img src={star} className="star" />
        </div>
        <div className="content">
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

module.exports = Single;

{
  /* 
  
        <div className="container">
          <div className="laughin-clapin">Laughin and Clappin'</div>
          <div className="video-container">
            
          </div>
        </div> */
}
