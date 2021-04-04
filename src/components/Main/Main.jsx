import React from "react";
import useStyles from "./Main.styles";
import Carousel from "../Carousel";
import Header from "../Header";
import IntroBlock from "../IntroBlock";
import VideoPlayer from "../VideoPlayer";
import VideoText from "../VideoText";
import { Typography } from "@material-ui/core";

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
        <div className={classes.videoContainer}>
          <VideoPlayer />
          <VideoText />
        </div>
        <Typography variant="h6" className={classes.footer}>
          ♥ Made with love by your children with the help of all of your amazing
          friends. ♥
        </Typography>
      </div>
    </main>
  );
};

export default Main;
