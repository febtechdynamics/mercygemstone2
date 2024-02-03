import React from 'react';
import { Link } from 'react-router-dom';
import whatsapp from "../../../public/images/whatsapp.png"

const AboutDetail = () => {
  return (
    <>
      {/* About Section */}
      <section className="about_section layout_padding2-top layout_padding-bottom">
        {/* Design Box */}
        <div className="design-box">
          <img src="images/design-2.png" alt="" />
        </div>

        <div className="container">
          <div className="row">
            {/* About Detail Box */}
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>
                  Mercy Gem is one of the well-known gemstone and industrial minerals exporter companies in Ethiopia.
                  Our company is involved in gemstone cutting and processing, focusing mainly on Wello opal cutting and processing.
                </p>
              </div>
            </div>

            {/* About Image Box */}
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about_section layout_padding2-top layout_padding-bottom">
        {/* Design Box */}
        <div className="design-box">
          <img src="images/design-2.png" alt="" />
        </div>

        <div className="container">
          <div className="row">
            {/* Mission Detail Box */}
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Mission</h2>
                </div>
                <p>
                  Our mission is to provide high-quality gemstones and industrial minerals to our customers, contributing to their success and satisfaction.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_section layout_padding2-top layout_padding-bottom">
        <div className="design-box">
          <img src="images/design-2.png" alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Vision</h2>
                </div>
                <p>
                  Our vision is to be a leading exporter in the gemstone and industrial minerals industry, recognized for our integrity, innovation, and customer-centric approach.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutDetail;
