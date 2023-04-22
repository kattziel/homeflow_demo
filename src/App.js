import React from "react";
import styles from "./App.module.css";

import StartupScreen from "./components/AuthComponents/StartupScreen";
import SignupScreen from "./components/AuthComponents/SignupScreen";
import LoginScreen from "./components/AuthComponents/LoginScreen";
import ResetPasswordScreen from "./components/AuthComponents/ResetPasswordScreen";
import Wrapper from "./components/UI/Wrapper";

import TasksCategories from "./components/Tasks/TasksCategories";

function App() {
  return (
    <Wrapper>
      <StartupScreen />
      <TasksCategories/>
      {/* <SignupScreen />
      <LoginScreen />
      <ResetPasswordScreen /> */}
    </Wrapper>
  );
}

export default App;
