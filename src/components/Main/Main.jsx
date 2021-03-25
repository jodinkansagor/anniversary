import React from "react";
import useStyles from "./Main.styles";
import Carousel from "../Carousel";
import Header from "../Header";
import IntroBlock from "../IntroBlock";

const Main = () => {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <Header />
      <div className={classes.bodyContainer}>
        <IntroBlock />
        <Carousel />
      </div>
    </main>
  );
};

export default Main;
