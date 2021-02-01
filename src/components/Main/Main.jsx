import React from "react";
import Header from "../Header";
import "./main.css"
import ImageCarousel from "../ImageCarousel"
import Carousel from "../Carousel"

const Main = () => {
  return (
    <main className="main">
      <Header />
      {/* <ImageCarousel /> */}
      <Carousel />
    </main>
  );
};

export default Main;
