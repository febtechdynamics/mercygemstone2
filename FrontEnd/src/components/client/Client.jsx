import React, { useState } from 'react';
import './client.css'; // Assuming you have a CSS file named 'client.css'

const Client = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleNext = () => {
    const totalItems = 3;
    setActiveItem((prevItem) => Math.ceil((prevItem + 1) % totalItems));
  };

  const handlePrev = () => {
    const totalItems = 3;
    setActiveItem((prevItem) => Math.ceil((prevItem - 1) % totalItems));
  };

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'Web Developer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    },
    {
      name: 'Jane Smith',
      designation: 'Designer',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    },
    {
      name: 'Alice Johnson',
      designation: 'Marketing Specialist',
      content: 'In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.',
    },
  ];

  return (
    <>
      <section className="client_section">
        <div className="container">
          <div className="heading_container">
            <h2>Testimonial</h2>
          </div>
          <h4 className="secondary_heading">What our customers say</h4>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`carousel-item ${index === activeItem ? 'active' : ''}`}>
                  <div className="client_container">
                    <div className="client-id">
                      <div className="img-box">
                        <img src="images/client.png" alt={`Client ${index + 1}`} />
                      </div>
                      <div className="name">
                        <h5>{testimonial.name}</h5>
                        <h6>{testimonial.designation}</h6>
                      </div>
                    </div>
                    <div className="detail-box">
                      <p>{testimonial.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" onClick={handlePrev}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" onClick={handleNext}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
