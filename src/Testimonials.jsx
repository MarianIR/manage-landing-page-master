import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialData from "./testimonialData";

const Testimonials = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change testimonials every 5 seconds
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 2 testimonials at once
          slidesToScroll: 1, // Scroll 2 testimonials at once
          dots: true,
        },
      },
      {
        breakpoint: 1368,
        settings: {
          slidesToShow: 2, // Show 2 testimonials at once
          slidesToScroll: 1, // Scroll 2 testimonials at once
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="testimonials">
      <h2 className="testimonials-heading">What they've said</h2>
      <Slider {...settings}>
        {" "}
        {/* Use Slider component with settings */}
        {testimonialData.map((testimonial) => (
          <div key={testimonial.id} className="testimonials-container">
            <img
              src={testimonial.img}
              alt="This is the review"
              className="portret"
            />
            <h4 className="name">{testimonial.name}</h4>
            <p className="paragraph">"{testimonial.review}"</p>
          </div>
        ))}
      </Slider>
      <button className="get-started-btn">Get Started</button>
    </section>
  );
};

export default Testimonials;
