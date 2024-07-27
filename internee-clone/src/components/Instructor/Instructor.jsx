import React, { useEffect } from "react";
import "./instructor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProjectDiagram,
  faUser,
  faClipboardList,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const Instructor = () => {
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

      const imageElement = document.querySelector(".instructor-image img");
      const imageRect = imageElement.getBoundingClientRect();
      if (imageRect.top < window.innerHeight) {
        imageElement.classList.add("in-view");
      } else {
        imageElement.classList.remove("in-view");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="instructor">
      <div className="instructor-container">
        <div className="instructor-image">
          <img src=".\src\assets\images\instructor.png" alt="Instructor" />
        </div>
        <div className="instructor-content">
          <h3>Are you Tech Instructor or Content Creator?</h3>
          <h2>Create Courses In Local Language & Generate Income</h2>
          <p>
            Are you a professional want to start your journey as a tech
            instructor and content creator to make some revenue? Just visit Our
            LMS Intructor Portal
          </p>
          <div className="instructor-sections">
            <div className="instructor-section">
              <FontAwesomeIcon icon={faProjectDiagram} className="icon" />
              <div className="content">
                <p>
                  <span>Upload Tutorials & Excersice</span> Transform your
                  expertise into impactful learning materials. As an instructor
                  on Internee.pk LMS, you can effortlessly upload tutorials and
                  exercises, shaping the educational experience for countless
                  learners.
                </p>
              </div>
            </div>
            <div className="instructor-section">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <div className="content">
                <p>
                  <span>Generate Revenue</span> Teach what you love and earn
                  what you deserve. Internee.pk LMS offers instructors the
                  opportunity to generate revenue. Monetize your expertise,
                  reach a global audience, and make a meaningful income from
                  your passion.
                </p>
              </div>
            </div>
            <div className="instructor-section">
              <FontAwesomeIcon icon={faClipboardList} className="icon" />
              <div className="content">
                <p>
                  <span>Instructor Identity</span> Internee.pk LMS provides a
                  platform for instructors to build their brand. Showcase your
                  skills, experience, and teaching style, creating a unique and
                  recognizable identity in the world of online education.
                </p>
              </div>
            </div>
            <div className="instructor-section">
              <FontAwesomeIcon icon={faLightbulb} className="icon" />
              <div className="content">
                <p>
                  <span>Perfact Share Ratio</span> We believe in fair
                  partnerships. we enjoy a perfect share ratio that ensures
                  transparency and fairness. Your hard work deserves to be
                  rewarded, and we make sure you get your share
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
