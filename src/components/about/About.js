import React, { Component } from "react";

import Button from "../button/Button";
import SectionTitles from "../sectionTitles/SectionTitles";

class About extends Component {
  render() {
    return (
      <section id="about">
        <SectionTitles title="About" />
        <div className="container">
          <p className="description text-center font-primary">
            The Sons of Vidya are the foremost video game podcasteers of the
            internet, pioneers in the field of combining moderate amounts of
            humor and insight into your favorite video games into delicious,
            bite-size morsels. Tune in to our fantastic videos, groundbreaking
            podcasts, and Pulitzer-prize winning blog posts. Be a part of the
            Sons Sensation!
          </p>
          <div className="button-holder">
            <Button
              link="https://www.youtube.com/user/SonsOfVidya"
              text="Subscribe on Youtube"
            />
            <Button
              href="https://www.patreon.com/sonsofvidya"
              text="Become a Patron"
            />
          </div>
        </div>
      </section>
    );
  }
}

module.exports = About;
