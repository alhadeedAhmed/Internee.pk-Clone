import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Check your email for the password reset link.");
      navigate("/");
    } catch (err) {
      console.error("Error sending password reset email:", err);
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <div className="forgot-password-container">
      <h1>Reset Password</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className="reset-button">
          Send reset link
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
