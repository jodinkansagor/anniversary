import React, { useRef, useState } from "react";
import Slider from "react-slick";
import useStyles from "./Carousel.styles";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import imageArray from "./imageArray";
import { ReactComponent as PrevArrow } from "../../assets/arrow_back_ios-24px.svg";
import { ReactComponent as NextArrow } from "../../assets/arrow_forward_ios-24px.svg";
import { Button, useTheme, useMediaQuery, Typography } from "@material-ui/core";
import ImageModal from "../ImageModal";

const Carousel = () => {
  const classes = useStyles();
  const sliderRef = useRef();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));
  const [open, setOpen] = useState(false);

  const image = {
    accessibility: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
    lazyLoad: "onDemand",
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.imageSliderAndLabel}>
      {smUp && (
        <Button disableRipple onClick={handlePrev}>
          <PrevArrow />
        </Button>
      )}
      <Slider {...image} ref={sliderRef}>
        {imageArray.map((image, i) => (
          <div key={i} className={classes.imageContainer}>
            <img src={image} alt={image} className={classes.image} onClick={handleModal} />
            <ImageModal
              open={open}
              handeClose={handleModal}
              imageName={image}
            />
          </div>
        ))}
      </Slider>
      {smUp && (
        <Button disableRipple onClick={handleNext}>
          <NextArrow />
        </Button>
      )}
      {!smUp && <Typography>Swipe to see more pics!</Typography>}
    </div>
  );
};

export default Carousel;
