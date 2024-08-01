import React, { useState, useEffect } from "react";
import "./TestimonialCarousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    quote:
      "internee.pk is the best, most comprehensive 21st-century innovation for those student who's looking for internship and upgrade thier skillsets. Their projects are tough but market valued.",
    author: "Rabia Javed",
    location: "Karachi, Pakistan",
  },
  {
    quote:
      "internee.pk is all about helping us grow our careers. May ALLAH give them more achivements and success on their journey.",
    author: "Hadeed Sudheer",
    location: "Muridke, Pakistan",
  },
  {
    quote:
      "Thanks to internee.pk, I got an internship here and now i am working as a Developer in a US company.",
    author: "Razaullah Sami",
    location: "KPK, Pakistan",
  },
  {
    quote:
      "I find internee.pk to be an outstanding tool for getting hands on experience. Sometimes you have to spend a little to make a lot to develop projects.",
    author: "Kashan Soomro",
    location: "Multan, Pakistan",
  },
  {
    quote:
      "Amazing! internee.pk is a gamechanger! The way their team is working is so crazy. Thank you for giving me this opportunity.",
    author: "Naila Rozi",
    location: "Karachi, Lahore",
  },
  {
    quote:
      "After getting this internship, my skill got enhance more than my expectation. JazakALLAH for this.",
    author: "Mohammad Rafiq",
    location: "Sindh Division, Pakistan",
  },
  {
    quote:
      "Been using internee.pk for internship is amazing experience. I do some other virtual internship as well but thier task portal and presentation is amazing.",
    author: "Sidra",
    location: "Bahawalnagar, Pakistan",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0));
    }
  };

  const handleNextClick = () => {
    if (currentIndex < testimonials.length - 3) {
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + 3, testimonials.length - 3)
      );
    }
  };

  return (
    <div className="testimonial">
      <div className="testimonial-carousel">
        <h2>
          What Students are saying <br /> about internee.pk
        </h2>
        <div className="testimonial-container">
          <div
            className="testimonial-slider"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p>" {testimonial.quote} "</p>
                <h4>{testimonial.author}</h4>
                <h5>{testimonial.location}</h5>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-controls">
          <button
            onClick={handlePrevClick}
            className="carousel-button"
            disabled={currentIndex === 0}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={handleNextClick}
            className="carousel-button"
            disabled={currentIndex >= testimonials.length - 3}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
