import React from "react";
import "./App.css";

import StartupScreen from "./components/AuthComponents/StartupScreen";
import SignupScreen from "./components/AuthComponents/SignupScreen";
import LoginScreen from "./components/AuthComponents/LoginScreen";
import ResetPasswordScreen from "./components/AuthComponents/ResetPasswordScreen";
import Wrapper from "./components/UI/Wrapper";

function App() {
  return (
    <Wrapper>
      <StartupScreen />
      <SignupScreen />
      <LoginScreen />
      <ResetPasswordScreen />
    </Wrapper>
  );
}

export default App;
