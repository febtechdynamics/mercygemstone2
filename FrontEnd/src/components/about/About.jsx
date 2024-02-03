import React from 'react'
import { Link } from 'react-router-dom';
import aboutImg from "../../../public/images/about-img.png"

const About = () => {
  return (
    <>
        <section className="about_section layout_padding2-top layout_padding-bottom">
    <div className="design-box">
      <img src="images/design-2.png" alt=""/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                About Us
              </h2>
            </div>
            <p>Mercy Gem is one of known gemstone and industrial minerals exporter company in Ethiopia.
                Our company is involved in gemstone cutting and processing focused mainly in Wello opal 
                cutting and processing.
            </p>
            <div>
              <Link to="/about">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-box">
            <img src={aboutImg} alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default About