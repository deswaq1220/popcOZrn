import { useState } from "react";
import Login from "./components/Login/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav/Nav";

import { Routes, Route, Link, Outlet } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// console.log(auth);
const App: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState("");

  const Layout = () => {
    return (
      <>
        <Nav />
        <Outlet />
      </>
    );
  };
  return (
    <div>
      {/* <Signup
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      /> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/login"
            element={
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                errorMsg={errorMsg}
                setErrorMsg={setErrorMsg}
              />
            }
          />

          <Route
            path="/sign-up"
            element={
              <Signup
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                errorMsg={errorMsg}
                setErrorMsg={setErrorMsg}
              />
            }
          />
        </Route>
      </Routes>

      {/* <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      /> */}
    </div>
  );
};

export default App;
