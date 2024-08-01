import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
import "./MainScreen.css";

function MainScreen() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem("userName");
    setUserName(name || "User");
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  return (
    <div className="main-container">
      <h1>Hey {userName}, Welcome to the dashboard!</h1>
      <button className="signout-button" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}

export default MainScreen;
