import React from "react";
import Slider from "react-slick";
import "./carousel.css";
import andrew from "../../assets/andrewAndKansagors.png";
import steveWedding from "../../assets/1971.png";
import dave from "../../assets/daveAndKansagors.png";
import neighburgs from "../../assets/neightburgsAndKansagors.png";
import sharonAlan from "../../assets/sharonAlanArtToby.png";
import voodoo from "../../assets/voodooDonuts.png";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Carousel = () => {
  const imageArray = [
    dave,
    neighburgs,
    sharonAlan,
    voodoo,
    andrew,
    steveWedding,
  ];

  // const sliderImages = imageArray.map((image, i) => (
  //   <img key={i} src={image} alt={image} className="carouselImage" />
  // ));

  const image = {
    accessibility: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  return (
    <div className="imageSliderAndLabel">
      <Slider {...image}>
        {imageArray.map((image, i) => (
          <img key={i} src={image} alt={image} className="carouselImage" />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
