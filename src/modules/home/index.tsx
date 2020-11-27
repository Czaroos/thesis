import React from "react";

import { Navbar } from "@components";

import { Image, Logo, Rectangle, Wave, WaveBackground } from "@assets";

import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <div className="content">
          <h1>Algorithms and data structures</h1>
          <h4>
            Use <span>this website</span> for the best algorithms and data
            structures resource on the internet where people from all around the
            world contribute to build the most reliable data.
          </h4>
        </div>
      </div>
      <Navbar className="col" />
      <Image />
      <Wave />
      <Wave />
      <Wave />
      <Wave />
      <Rectangle />
      <Logo />
      <Logo />
      <WaveBackground />
    </div>
  );
};

export default Home;
