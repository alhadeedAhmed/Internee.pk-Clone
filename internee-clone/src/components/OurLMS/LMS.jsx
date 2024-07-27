import React, { useEffect } from "react";
import "./lms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckDollar,
  faCertificate,
  faLightbulb,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const LMS = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".icon");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      });

      const imageElement = document.querySelector(".lms-image img");
      const imageRect = imageElement.getBoundingClientRect();
      if (imageRect.top >= 0 && imageRect.bottom <= window.innerHeight) {
        imageElement.classList.add("in-view");
      } else {
        imageElement.classList.remove("in-view");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="lms">
      <div className="lms-container">
        <div className="lms-content">
          <h3>Our LMS</h3>
          <h2>Guided Tutorials in Learning Management System</h2>
          <p>
            Want to learn something but don't know what's the roadmap or your
            english is not too good? That's why we launch LMS for you.
          </p>
          <div className="lms-sections">
            <div className="lms-section">
              <FontAwesomeIcon icon={faMoneyCheckDollar} className="icon" />

              <div className="content">
                <p>
                  <span>Sell Courses and Earn</span> Are you an expert in your
                  field? Share your knowledge on our LMS. Create and sell
                  courses, or contribute as an instructor. Empower others on
                  their learning journey while earning rewards for your
                  expertise.
                </p>
              </div>
            </div>
            <div className="lms-section">
              <FontAwesomeIcon icon={faCertificate} className="icon" />
              <div className="content">
                <p>
                  <span>Certification</span> Complete courses on our LMS and
                  earn certifications that validate your expertise. Showcase
                  your accomplishments to potential employers and stand out in a
                  competitive landscape.
                </p>
              </div>
            </div>
            <div className="lms-section">
              <FontAwesomeIcon icon={faBook} className="icon" />
              <div className="content">
                <p>
                  <span>Courses in Urdu</span> <br />
                  Dive into the world of knowledge with our courses in Urdu.
                  Breaking language barriers, Our LMS ensures that education is
                  accessible and relatable for everyone. Learn, grow, and excel
                  in a language that feels like home.
                </p>
              </div>
            </div>
            <div className="lms-section">
              <FontAwesomeIcon icon={faLightbulb} className="icon" />
              <div className="content">
                <p>
                  <span>Practice Exercises</span> Theory is just the beginning.
                  Our LMS goes beyond by offering practical exercises that
                  challenge and refine your skills. Apply your knowledge in
                  real-world scenarios, solidifying your understanding and
                  boosting your confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lms-image">
          <img src=".\src\assets\images\lms.png" alt="LMS Portal" />
        </div>
      </div>
    </section>
  );
};

export default LMS;
