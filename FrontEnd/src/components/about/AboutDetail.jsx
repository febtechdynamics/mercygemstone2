import React from "react";
import { Link } from "react-router-dom";
import whatsapp from "../../../public/images/whatsapp.png";

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
                  MercyGem is a renowned exporter of gemstones and industrial
                  minerals in Ethiopia, specializing in the cutting and
                  processing of Wello opals. With precision and expertise, we
                  bring out the captivating beauty of these opals, ensuring they
                  shine with unparalleled brilliance. Our commitment to quality
                  and ethical practices distinguishes us as leaders in the
                  industry, delivering exquisite gems to our discerning client
                  worldwide.
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
            <div className="col-md-12">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Mission</h2>
                </div>
                <p>
                  Our mission at Mercy Gem is centered around the provision of
                  superior quality gemstones and industrial minerals to our
                  esteemed customers. We are committed to ensuring their success
                  and satisfaction by offering products of exceptional value and
                  beauty. With a focus on precision and excellence, we strive to
                  exceed expectations in every facet of our operations. Our
                  dedication to craftsmanship and ethical practices underscores
                  our commitment to delivering excellence, enriching the lives
                  of our customers worldwide.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box"></div>
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
            <div className="col-md-12">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Vision</h2>
                </div>
                <p>
                  Our aspiration at Mercy Gem is to establish ourselves as a
                  foremost leader in the exportation of gemstones and industrial
                  minerals. We strive to be distinguished for our commitment to
                  integrity, continuous innovation, and a customer-centric
                  ethos. Through our relentless pursuit of excellence, we aim to
                  set new standards within the industry, earning the trust and
                  admiration of our global clientele.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutDetail;
