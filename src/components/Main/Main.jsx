import React from "react";
import useStyles from "./Main.styles";
import Carousel from "../Carousel";
import Header from "../Header";
import IntroBlock from "../IntroBlock";

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.bodyContainer}>
        <IntroBlock />
        <Carousel />
      </div>
    </div>
  );
};

export default Main;
