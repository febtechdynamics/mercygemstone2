import React from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <>
      <section className="slider_section position-relative">
        {/* <div className="design-box">
          <img src="images/design-1.png" alt="" />
        </div> */}
        {/* <div className="slider_number-container d-none d-md-block">
          <div className="number-box"></div>
        </div> */}
        <div className="container">
          <div
          // id="carouselExampleIndicators"
          // className="carousel slide"
          // data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail_box">
                      <h2>
                        <span>Ethiopian</span>
                      </h2>
                      <h1>Gemstone</h1>
                      <p>
                        Welcome to Mercy Gem, where quality meets excellence in
                        the world of gemstones and minerals. As a leading
                        exporter, we take pride in delivering top-notch products
                        to our valued customers worldwide.
                      </p>
                      <p className="pt-4">
                        Our specialty lies in Ethiopian Opals, where nature's
                        artistry comes alive with a mesmerizing play of colors.
                        As you browse through our collection, you'll discover
                        the captivating allure of Ethiopian Opals, renowned for
                        their uniqueness and brilliance. Each opal is carefully
                        sourced from the rich mines of Ethiopia, ensuring that
                        you receive only the finest quality stones.
                      </p>

                      <div>
                        <Link to="/contact">Contact Us</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="">
                      <img src="images/opal.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
