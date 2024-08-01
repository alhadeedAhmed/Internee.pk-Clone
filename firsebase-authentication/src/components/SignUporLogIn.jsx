import React, { useState } from "react";
import { auth } from "./Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./SignUporLogIn.css";

function SignUporLogIn() {
  const [login, setLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const name = e.target.name?.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      if (type === "signup") {
        await createUserWithEmailAndPassword(auth, email, password);

        localStorage.setItem("userName", name);

        alert("You are successfully registered, Click OK to Login.");
        setLogin(true);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        const userName = localStorage.getItem("userName");

        navigate("/welcome", { state: { name: userName } });
      }
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  const handleReset = () => {
    navigate("/resetpassword");
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="auth-container">
      <div className="row">
        <div
          className={!login ? "activeColor" : "pointer"}
          onClick={() => setLogin(false)}
        >
          <i className="fas fa-user-plus"></i> SignUp
        </div>
        <div
          className={login ? "activeColor" : "pointer"}
          onClick={() => setLogin(true)}
        >
          <i className="fas fa-sign-in-alt"></i> Login
        </div>
      </div>
      <h1>{login ? "Login" : "SignUp"}</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
        {!login && (
          <div className="form-group">
            <input name="name" type="text" placeholder="Your Name" required />
          </div>
        )}
        <div className="form-group">
          <input name="email" type="email" placeholder="Email" required />
        </div>
        <div className="form-group password-container">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />
          <i
            className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
            onClick={toggleShowPassword}
          ></i>
        </div>
        {login && (
          <p className="forgot-password" onClick={handleReset}>
            Forgot Password?
          </p>
        )}
        <button className="auth-button" type="submit">
          {login ? "Login" : "SignUp"}
        </button>
      </form>
      <p className="toggle-text">
        {login ? (
          <span>
            Don't have an account?{" "}
            <span className="toggle-link" onClick={() => setLogin(false)}>
              Sign Up
            </span>
          </span>
        ) : (
          <span>
            Already have an account?{" "}
            <span className="toggle-link" onClick={() => setLogin(true)}>
              Login
            </span>
          </span>
        )}
      </p>
    </div>
  );
}

export default SignUporLogIn;
