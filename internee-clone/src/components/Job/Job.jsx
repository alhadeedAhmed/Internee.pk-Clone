import React, { useEffect } from "react";
import "./job.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faLightbulb,
  faUserPlus,
  faLaptop,
  faCheckToSlot,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";

const Job = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".icon, .job-image img");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="job">
      <div className="job-container">
        <div className="job-content">
          <h3>Already have a good skill but looking for job?</h3>
          <h2>Job Portal, Ultimate Place To Find The Best Job</h2>
          <p>
            Streamline the approval process with your customer to quickly close
            the deal, get the sale, and start production.
          </p>
          <div className="job-sections">
            <div className="job-section">
              <FontAwesomeIcon icon={faLaptop} className="icon" />
              <div className="content">
                <p>
                  <span>100% Mobile friendly</span> online art approvals
                </p>
              </div>
            </div>
            <div className="job-section">
              <FontAwesomeIcon icon={faCheckToSlot} className="icon" />
              <div className="content">
                <p>
                  <span>Speed up the design process</span> Everything is done
                  online, from mockup to final design.
                </p>
              </div>
            </div>
            <div className="job-section">
              <FontAwesomeIcon icon={faUserPlus} className="icon" />
              <div className="content">
                <p>
                  <span>Communicate easier</span> <br />
                  Add multiple recipients to an Art Approval to reduce
                  traditional email clutter.
                </p>
              </div>
            </div>
            <div className="job-section">
              <FontAwesomeIcon icon={faRectangleList} className="icon" />
              <div className="content">
                <p>
                  <span>Add changes faster</span> Students can add comments to
                  approvals for changes, saving you both time on finalizing
                  designs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="job-image">
          <img src=".\src\assets\images\job.png" alt="Job Portal" />
        </div>
      </div>
    </section>
  );
};

export default Job;
