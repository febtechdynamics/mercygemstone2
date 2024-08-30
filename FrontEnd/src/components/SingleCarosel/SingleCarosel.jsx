import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SingleCarousel = ({ images, height, thumb }) => {
  // console.log(images);
  return (
    <Carousel
      //   infiniteLoop={true}
      // showIndicators={false}
      // renderThumbs={(itemList) => {
      //   return itemList?.map((item) => {
      //     console.log(item);
      //     return (
      //       <img
      //         className=""
      //         style={{
      //           height: "70px",
      //           width: "100px",
      //           objectFit: "cover",
      //         }}
      //         src={item?.key}
      //       />
      //     );
      //   });
      // }}
      //   showStatus={false}
      dynamicHeight={false}
      showThumbs={false}
    >
      {images?.map((image, index) => {
        return (
          <div key={image?.urls} className="h-full">
            <img
              className={`w-100 card-img-top md:h-[${height}] h-[200px]`}
              style={{
                // height: `${height || "200px"}`,
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
