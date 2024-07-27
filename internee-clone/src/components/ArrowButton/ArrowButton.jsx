// ArrowButton.jsx
import React from "react";
import "./ArrowButton.css";

const ArrowButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div className="arrow-button" onClick={scrollToTop}>
      <i className="fa fa-arrow-up" aria-hidden="true"></i>{" "}
    </div>
  );
};

export default ArrowButton;
