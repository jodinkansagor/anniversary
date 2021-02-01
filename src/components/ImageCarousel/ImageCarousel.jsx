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
  900: { items: 2 },
  1400: { items: 3 },
};

const renderPrevButton = ({ isDisabled }) => {
  return <span style={{ opacity: isDisabled ? "0.5" : 1 }}>Previous</span>;
};

const renderNextButton = ({ isDisabled }) => {
  return <span style={{ opacity: isDisabled ? "0.5" : 1 }}>Next</span>;
};

const ImageCarousel = () => {
  return (
    <AliceCarousel
      items={sliderImages}
      // paddingLeft={20}
      // paddingRight={20}
      responsive={responsive}
      infinite
      animationDuration={800}
      mousetracking
      disableDotsControls
      renderPrevButton={renderPrevButton}
      renderNextButton={renderNextButton}
    />
  );
};
export default ImageCarousel;
