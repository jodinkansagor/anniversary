import React from "react";
import useStyles from "./Main.styles";
import Carousel from "../Carousel";
import Header from "../Header";
import IntroBlock from "../IntroBlock";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const Main = () => {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <Header />
      <div className={classes.bodyContainer}>
        <div className={classes.introAndImages}>
          <IntroBlock />
          <Carousel />
        </div>
        <VideoPlayer />
      </div>
    </main>
  );
};

export default Main;
