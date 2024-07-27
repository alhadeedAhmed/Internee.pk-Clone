import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="hero">
          <div className="herocontent">
            <h1>Looking for dream internship?</h1>
            <span className="animated-text">
              <TypeAnimation
                sequence={[
                  "On your desire domain",
                  2000,
                  "Gives hands on experience",
                  2000,
                  "Get a competitive job",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{
                  fontSize: "55px",
                  display: "inline-block",
                  color: "#43a724",
                  fontWeight: "bolder",
                  height: "130px",
                }}
              />
            </span>
            <p className="heropara">
              Internee.pk kickstarts students' tech careers with first <br />
              internships, providing industry exposure, practical <br /> skills,
              and networking opportunities, paving the way for <br />
              their success in the tech industry.
            </p>
            <div className="companyimg">
              <div className="incubation">
                <img
                  src=".\src\assets\images\incubation.jpg"
                  alt="incubation"
                />
              </div>
              <div className="nep">
                <img src=".\src\assets\images\nep.png" alt="nep" />
              </div>
              <div className="nic">
                <img src=".\src\assets\images\nic.png" alt="nic" />
              </div>
            </div>
            <div className="herobtn">
              <div className="jobbtn">
                <button>Job Portal</button>
              </div>
              <div className="lmsbtn">
                <button>Our LMS</button>
              </div>
            </div>
          </div>
          <div className="heroimage">
            <img
              src=".\src\assets\images\hero.webp"
              alt="heroimage"
              className="hero-img-animated"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
