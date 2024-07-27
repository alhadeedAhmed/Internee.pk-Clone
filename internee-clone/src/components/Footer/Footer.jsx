import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-logo">
        <Link to="/">
          <img src=".\src\assets\images\logo.webp" alt="Internee.pk Logo" />
        </Link>
      </div>
      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Get help</h3>
        <ul>
          <li>
            <a href="#">Training Videos</a>
          </li>
          <li>
            <a href="#">Request Help</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Socialize with us</h3>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p>+923453191638</p>
        <p>info@internee.pk</p>
        <p>Copyright &copy;2024 internee.pk Pvt Ltd.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
