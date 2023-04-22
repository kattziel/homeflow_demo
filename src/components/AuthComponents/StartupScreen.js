import React from "react";
import styles from "../AuthComponents/StartupScreen.css";

import StartScreenButton from "../UI/StartScreenButton";

const StartupScreen = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Welcome to HomeFlow</h1>
      </div>
      <div className={styles.buttonsContainer}>
        <StartScreenButton color="#91bfdb" borderColor="#91bfdb">
          Log in
        </StartScreenButton>
        <StartScreenButton color="#d391b3" borderColor="#d391b3">Create a new family</StartScreenButton>
      </div>
    </div>
  );
};

export default StartupScreen;
