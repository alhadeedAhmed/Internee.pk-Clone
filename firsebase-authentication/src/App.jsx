import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUporLogIn from "./components/SignUporLogIn";
import MainScreen from "./components/MainScreen";
import ForgotPassword from "./components/ForgotPassword";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUporLogIn />} />
        <Route path="/welcome" element={<MainScreen />} />
        <Route path="/resetpassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
