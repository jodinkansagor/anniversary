import React from "react";
import useStyles from "./Main.styles";
import Carousel from "../Carousel";
import Header from "../Header";

const Main = () => {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <Header />
      <Carousel />
    </main>
  );
};

export default Main;
