// ArrowButton.jsx
import React from "react";
import "./ArrowButton.css";

const ArrowButton = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div className="arrow-button" onClick={scrollToTop}>
      <i className="fa fa-arrow-up" aria-hidden="true"></i>{" "}
      {/* Up arrow icon */}
    </div>
  );
};

export default ArrowButton;
