import React, { useEffect, useRef } from "react";
import "./whyinternee.css";

const WhyInternee = () => {
  const iconRefs = useRef([]);
  const imageRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      iconRefs.current.forEach((icon) => {
        const position = icon.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
          icon.classList.add("animate");
        } else {
          icon.classList.remove("animate");
        }
      });

      const imagePosition = imageRef.current.getBoundingClientRect().top;
      if (imagePosition < window.innerHeight - 100) {
        imageRef.current.classList.add("animate");
      } else {
        imageRef.current.classList.remove("animate");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="why-section container">
      <div className="why-content">
        <h2>Why internee.pk?</h2>
        <ul className="list">
          {[
            "5500+ Students already registered",
            "Task based projects that based on hands on experience",
            "Massive Courses with high-quality videos on LMS",
            "Empowering youth towards IT revolution & technology",
            "Hands on Experience via Virtual internship",
            "Complete your task and get market competent job",
            "Direct Collaboration with companies for direct hiring",
          ].map((item, index) => (
            <li key={index}>
              <div
                className="icon-box"
                ref={(el) => (iconRefs.current[index] = el)}
              >
                <span className="icon">
                  <img
                    src=".\src\assets\images\Icon-flow-v2.svg"
                    alt="smallbox"
                  />
                </span>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="why-img" ref={imageRef}>
        <img src="./src/assets/images/programing.jpg" alt="Programming" />
      </div>
    </div>
  );
};

export default WhyInternee;
