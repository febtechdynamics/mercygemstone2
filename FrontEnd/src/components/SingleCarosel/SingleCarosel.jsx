import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SingleCarousel = ({ images }) => {
  console.log(images);
  return (
    <Carousel
      //   infiniteLoop={true}
      //   showIndicators={false}
      //   //   renderThumbs={false}
      //   showStatus={false}
      showThumbs={false}
    >
      {images?.map((image, index) => {
        return (
          <div key={image?.urls}>
            <img
              className="w-100 card-img-top "
              style={{
                height: "200px",
                objectFit: "cover",
              }}
              src={image?.urls}
            />
            {/* <p className="legend">Legend 1</p> */}
          </div>
        );
      })}
    </Carousel>
  );
};

export default SingleCarousel;
