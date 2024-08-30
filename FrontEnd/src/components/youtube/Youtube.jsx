import React from "react";
import { FaPlay } from "react-icons/fa";

const Youtube = () => {
  return (
    <>
      <section className="ring_section py-5 rounded-lg">
        {/* <div className="design-box">
          <img src="images/design-1.png" alt="" />
        </div> */}
        <div className=" md:ml-11 flex gap-3 items-center p-3">
          <h2 className=" text-gray-500 text-xl">See It Yourself </h2>
          <FaPlay color="orange" />
        </div>
        <div className="container ">
          <div className="ring_container rounded-xl layout_padding2">
            <div className="rounded-xl">
              <iframe
                width="100%"
                height="400"
                className="rounded-xl"
                src="https://www.youtube.com/embed/spT3gL0O7P4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Youtube;
