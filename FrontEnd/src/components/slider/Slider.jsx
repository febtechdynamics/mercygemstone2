import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <>
      <section className="slider_section position-relative">
        <div className="design-box">
          <img src="images/design-1.png" alt=""/>
        </div>
        <div className="slider_number-container d-none d-md-block">
          <div className="number-box"></div>
        </div>
        <div className="container">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail_box">
                      <h2>
                        <span>Ethiopian</span>
                      </h2>
                      <h1>
                        Gemstone
                      </h1>
                      <p>
                        Get all kinds of Gemstone and Industrial material in Ethiopia.
                      </p>
                      <div>
                        <Link to="/contact">Contact Us</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/opal.png" alt=""/>
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
