import React from "react";
import Slider from "react-slick";
import useStyles from "./Carousel.styles";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import imageArray from "./imageArray";

const Carousel = () => {
  const classes = useStyles();

  const image = {
    accessibility: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    lazyLoad: "onDemand",
  };

  return (
    <div className={classes.imageSliderAndLabel}>
      <Slider {...image}>
        {imageArray.map((image, i) => (
          <img key={i} src={image} alt={image} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
