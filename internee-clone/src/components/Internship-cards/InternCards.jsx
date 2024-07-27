import React from "react";
import "./intern.css";

const InternCards = () => {
  return (
    <>
      <div className="container">
        <div className="internship-Text">
          <div className="intern-text">
            <p>
              <span>Internships every month:</span> Introducing Internee.pk, the
              ultimate <br />
              platform designed to turbocharge the IT sector in Pakistan! We{" "}
              <br />
              recognize the immense potential of talented individuals in the{" "}
              <br />
              country and aim to bridge the gap between them and the thriving{" "}
              <br /> IT industry. Internee.pk offers a comprehensive range of
              virtual <br />
              internship opportunities exclusively in the IT field.
            </p>
          </div>
          <div className="browsebtn">
            <button>Browse Internship</button>
          </div>
        </div>
      </div>
      <div className="card-grid">
        <div className="card">
          <img
            src=".\src\assets\images\BackendDevelopment.webp"
            alt="Backend Development"
            className="card-image"
          />
          <h3>Backend Development</h3>
          <div className="line"></div>
          <button className="apply-button">Apply now</button>
        </div>
        <div className="card">
          <img
            src=".\src\assets\images\Mobile App Developer.webp"
            alt="App Development Internship"
            className="card-image"
          />
          <h3>App Development Internship</h3>
          <div className="line"></div>
          <button className="apply-button">Apply now</button>
        </div>
        <div className="card">
          <img
            src=".\src\assets\images\logo-designer-working-computer-desktop.webp"
            alt="Graphic Design"
            className="card-image"
          />
          <h3>Graphic Design</h3>
          <div className="line"></div>
          <button className="apply-button">Apply now</button>
        </div>
        <div className="card">
          <img
            src=".\src\assets\images\chatbotDevelopment.webp"
            alt="Chatbot Development"
            className="card-image"
          />
          <h3>Chatbot Development</h3>
          <div className="line"></div>
          <button className="apply-button">Apply now</button>
        </div>
        <div className="card">
          <img
            src=".\src\assets\images\analysis.webp"
            alt="Data Analytics Internship"
            className="card-image"
          />
          <h3>Data Analytics</h3>
          <div className="line"></div>
          <button className="apply-button">Apply now</button>
        </div>
        <div className="card">
          <img
            src=".\src\assets\images\figma.png"
            alt="Figma Internship"
            className="card-image"
          />
          <h3>Figma Internship</h3>
          <div className="line"></div>
          <button className="apply-button">Apply now</button>
        </div>
      </div>
    </>
  );
};

export default InternCards;
