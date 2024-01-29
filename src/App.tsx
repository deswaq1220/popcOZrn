import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SocialLoginPage from './Pages/SocialLoginPage'
import { Routes, Route } from 'react-router-dom'
// import { BrowserRouter as Router } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// console.log(auth);
const App: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <div>
      <Signup
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      />
      <Routes>
        <Route path='social-login' element={<SocialLoginPage />} />
      </Routes>

      <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      />
    </div>
  );
};

export default App;
