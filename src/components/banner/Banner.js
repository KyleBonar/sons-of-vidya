import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <span className="banner-upper text-center text-upper">Modern Sons</span>
        <span className="banner-center text-center">for</span>
        <span className="banner-bottom text-center">Old Fashioned Funs</span>
      </div>
    );
  }
}

class Banner extends Component {
  render() {
    return (
      <div className="banner-home">
        <div className="banner-container">
          <Content />
        </div>
      </div>
    );
  }
}

module.exports = Banner;
