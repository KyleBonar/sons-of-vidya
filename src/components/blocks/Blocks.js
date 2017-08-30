import React, { Component } from "react";

class Row1 extends Component {
  render() {
    return (
      <div className="block-row-teal">
        <div className="container">
          <div className="block">
            <img src="http://localhost:8080/src/images/badge_quality_250x250.png" />
          </div>
          <div className="block middle">
            <img src="http://localhost:8080/src/images/badge_quality_250x250.png" />
          </div>
          <div className="block">
            <img src="http://localhost:8080/src/images/badge_quality_250x250.png" />
          </div>
        </div>
      </div>
    );
  }
}

class Row2 extends Component {
  render() {
    return (
      <div className="block-row-orange">
        <div className="container">
          <div className="block">
            <img src="http://localhost:8080/src/images/badge_quality_250x250.png" />
          </div>
          <div className="block middle">
            <img src="http://localhost:8080/src/images/badge_quality_250x250.png" />
          </div>
          <div className="block">
            <img src="http://localhost:8080/src/images/badge_quality_250x250.png" />
          </div>
        </div>
      </div>
    );
  }
}

class Blocks extends Component {
  render() {
    return (
      <section id="blocks">
        <Row1 />
        <Row2 />
      </section>
    );
  }
}

module.exports = Blocks;
