import React from "react";
import "../AuthComponents/StartupScreen.css";

import StartScreenButton from "../UI/StartScreenButton";

const StartupScreen = () => {
  return (
    <div className="main-container">
      <div className="title-container">
        <h1 className="title">Welcome to HomeFlow</h1>
      </div>
      <div className="buttons-container">
        <StartScreenButton color="#91bfdb" borderColor="#91bfdb">
          Log in
        </StartScreenButton>
        <StartScreenButton color="#d391b3" borderColor="#d391b3">Create a new family</StartScreenButton>
      </div>
    </div>
  );
};

export default StartupScreen;
