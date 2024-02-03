import React, { useRef } from "react";
import { Link } from "react-router-dom";
import whatsapp from "../../../public/images/whatsapp.png";
import forContact from "../../../public/images/for_contact.png";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eidoz4j",
        "template_yc6l6on",
        form.current,
        "wlgzkitoPbCq2GDCW"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Sent");
        },
        (error) => {
          console.log(error.text);
          alert(
            "An error occurred while sending the Message. Please try again later."
          );
        }
      );

    e.target.reset();
  };
  return (
    <>
      <section className="contact_section layout_padding">
        <div className="design-box">
          <img src="images/design-2.png" alt="" />
        </div>
        <div className="container ">
          <div className="">
            <h2 className="">Contact Us</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <form action="#" ref={form} onSubmit={sendEmail}>
                <div>
                  <input type="text" placeholder="Name" name="Name" />
                </div>
                <div>
                  <input type="email" placeholder="Email" name="email" />
                </div>
                <div>
                  <input type="text" placeholder="Phone" name="phone" />
                </div>
                <div>
                  <input
                    type="text"
                    className="message-box"
                    placeholder="Message"
                    name="Message"
                  />
                </div>
                <div className="d-flex ">
                  <button type="submit" className="contact_button">
                    SEND
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <img src={forContact} alt="" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <div className="heading_container">
                      <h2>Workplace and Weekly Time</h2>
                    </div>
                    <p>
                      Our workplace is equipped with state-of-the-art facilities
                      to ensure a conducive environment for gemstone cutting and
                      processing.
                    </p>
                    <p>
                      Weekly Time Schedule:
                      <ul>
                        <li>Monday to Friday: 9:00 AM - 5:00 PM</li>
                        <li>Saturday: 10:00 AM - 3:00 PM</li>
                        <li>Sunday: Closed</li>
                      </ul>
                    </p>
                    <div className="email_box">
                      <Link to="https://wa.me/+251967272727" target="_blank">
                        <button>
                          <span>
                            <img src={whatsapp} alt="WhatsApp" />
                          </span>
                          Message us on WhatsApp
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="map_container">
                    <div className="map-responsive iframe-container">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d246.29623444589228!2d38.78560017093671!3d8.996077962584172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSA%20Building!5e0!3m2!1sen!2set!4v1706382772823!5m2!1sen!2set"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
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

export default Contact;
