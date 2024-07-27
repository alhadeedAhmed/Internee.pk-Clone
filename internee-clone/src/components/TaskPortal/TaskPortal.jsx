import React, { useEffect } from "react";
import "./taskportal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProjectDiagram,
  faUser,
  faClipboardList,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const TaskPortal = () => {
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

      const imageElement = document.querySelector(".task-portal-image img");
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
    <section className="task-portal">
      <div className="task-portal-container">
        <div className="task-portal-image">
          <img src=".\src\assets\images\task portal.webp" alt="Task Portal" />
        </div>
        <div className="task-portal-content">
          <h3>Our Own Task Portal</h3>
          <h2>
            Manage Project Via Own <br />
            Task Portal
          </h2>
          <p>
            Welcome to internee.pk task portal. Where Tasks Transform Into
            Skills.
          </p>
          <div className="task-portal-sections">
            <div className="task-section">
              <FontAwesomeIcon icon={faProjectDiagram} className="icon" />
              <div className="content">
                <p>
                  <span>Hands on Projects</span> We believe in learning by
                  doing. Dive into hands-on projects that simulate real-world
                  scenarios. From coding challenges to creative projects, every
                  task is crafted to impart practical skills that resonate in
                  professional environments.
                </p>
              </div>
            </div>
            <div className="task-section">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <div className="content">
                <p>
                  <span>How to represent yourself</span> More than just
                  completing tasks, it empowers you to showcase your journey.
                  Every completed task contributes to your digital portfolio, a
                  dynamic representation of your skills and accomplishments. Let
                  your work speak volumes about your capabilities.
                </p>
              </div>
            </div>
            <div className="task-section">
              <FontAwesomeIcon icon={faClipboardList} className="icon" />
              <div className="content">
                <p>
                  <span>SDLC Techniques</span> Understanding the Software
                  Development Life Cycle (SDLC) is pivotal in the tech world.
                  Acquire skills that align with industry standards and boost
                  your project management proficiency.
                </p>
              </div>
            </div>
            <div className="task-section">
              <FontAwesomeIcon icon={faLightbulb} className="icon" />
              <div className="content">
                <p>
                  <span>Easy to understand</span> Learning shouldn't be
                  complicated. Our tasks are designed to be easily
                  comprehensible, ensuring a smooth learning experience for
                  everyone. Whether you're a seasoned professional or a
                  beginner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskPortal;
