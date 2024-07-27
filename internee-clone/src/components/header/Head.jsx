import React from "react";
import { Link } from "react-router-dom";
import "./head.css";

const Head = () => {
  return (
    <header className="head">
      <div className="container flexAdjust">
        <div className="logo">
          <Link to="/">
            <img src=".\src\assets\images\logo.webp" alt="logo-image" />
          </Link>
        </div>
        <div className="navLinks">
          <nav>
            <ul className="flexSet">
              <li>
                <Link to="/internship">Internship</Link>
              </li>
              <li>
                <Link to="/companycollaboration">Company Collaborations</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navBtn">
          <button className="navbtn">Job Portal</button>
          <button className="navbtn nocolorbtn">Internee's Login</button>
        </div>
      </div>
    </header>
  );
};

export default Head;
