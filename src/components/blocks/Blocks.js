import React, { Component } from "react";

class Row1 extends Component {
  render() {
    return <div className="container">yo</div>;
  }
}

class Blocks extends Component {
  render() {
    return (
      <section id="blocks">
        <Row1 />
        {/* <Row2 /> */}
      </section>
    );
  }
}

module.exports = Blocks;
