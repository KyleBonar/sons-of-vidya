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
          <span className="title">Featured Video</span>
          <img src={star} className="star" />
          <img src={star} className="star" />
          <img src={star} className="star" />
        </div>
        <div className="content">
          <div className="description-holder">
            <div className="video-title">Laughin' and Clappin'</div>
            <a href="https://www.youtube.com/user/SonsOfVidya" target="_blank">
              Subscribe on Youtube
            </a>
            <a href="https://www.patreon.com/sonsofvidya" target="_blank">
              Become A Patron
            </a>
          </div>
          <div className="latest-holder">
            <span>Latest Video</span>
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
