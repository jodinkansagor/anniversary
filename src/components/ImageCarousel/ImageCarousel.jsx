import React from "react";
import "./imageCarousel.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import andrew from "../../assets/andrewAndKansagors.png";
import steveWedding from "../../assets/1971.png";
import dave from "../../assets/daveAndKansagors.png";
import neighburgs from "../../assets/neightburgsAndKansagors.png";
import sharonAlan from "../../assets/sharonAlanArtToby.png";
import voodoo from "../../assets/voodooDonuts.png";

const imageArray = [dave, neighburgs, sharonAlan, voodoo, andrew, steveWedding];

const sliderImages = imageArray.map((image, i) => (
  <div key={i}>
    <img src={image} alt={image} className="carouselImage" />
  </div>
));

const responsive = {
  0: { items: 1 },
  800: {items: 2 },
  1200: { items: 3 },
};

const ImageCarousel = () => {
  return (
    <AliceCarousel
      items={sliderImages}
      infinite
      animationDuration={800}
      // paddingLeft={25}
      // paddingRight={25}
      responsive={responsive}
      disableDotsControls
    />
  );
};
export default ImageCarousel;
