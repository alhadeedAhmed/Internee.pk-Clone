import React from "react";
import emailjs from "emailjs-com";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./contactform.css";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uwskhwq",
        "template_m3tyvxk",
        e.target,
        "oGzFvTYEaOWTTivir"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-container">
      <MapContainer center={[24.8607, 67.0011]} zoom={10} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[24.8607, 67.0011]}>
          <Popup>New Memon Masjid</Popup>
        </Marker>
      </MapContainer>
      <div className="form-container">
        <h3>Project in mind? Let’s Talk 🚀</h3>
        <form onSubmit={sendEmail}>
          <label>Name</label>
          <input type="name" name="name" required />
          <label>Email</label>
          <input type="email" name="email" required />
          <label>Phone Number</label>
          <input type="text" name="phone" required />
          <label>Message</label>
          <textarea name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
        <p>
          After your message submission, Our team will respond 1-2 business days
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
