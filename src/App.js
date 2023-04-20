import "./App.css";

import StartupScreen from "./components/StartupScreen";
import SignupScreen from "./components/SignupScreen";
import LoginScreen from "./components/LoginScreen";
import ResetPasswordScreen from "./components/ResetPasswordScreen";

function App() {
  return (
    <div>
      <h2>Let's get started</h2>
      <StartupScreen />
      <SignupScreen />
      <LoginScreen />
      <ResetPasswordScreen />
    </div>
  );
}

export default App;
