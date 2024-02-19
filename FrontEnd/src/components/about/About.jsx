import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../../public/images/about-img.png";

const About = () => {
  return (
    <>
      <section className="about_section layout_padding2-top layout_padding-bottom">
        <div className="design-box">
          <img src="images/design-2.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>
                  MercyGem is a renowned exporter of gemstones and industrial
                  minerals in Ethiopia, specializing in the cutting and
                  processing of Wello opals. With precision and expertise, we
                  bring out the captivating beauty of these opals, ensuring they
                  shine with unparalleled brilliance. Our commitment to quality
                  and ethical practices distinguishes us as leaders in the
                  industry, delivering exquisite gems to our discerning client
                  worldwide.
                </p>
                <div>
                  <Link to="/about">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src={aboutImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
