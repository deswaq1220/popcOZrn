import { useState } from "react";
import Login from "./components/Login/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav/Nav";

import { Routes, Route, Link, Outlet } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// console.log(auth);

const App: React.FC = () => {
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
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route
            path="/login"
            element={
              <Login
              // email={email}
              // setEmail={setEmail}
              // password={password}
              // setPassword={setPassword}
              // errorMsg={errorMsg}
              // setErrorMsg={setErrorMsg}
              />
            }
          />
          <Route path="/sign-up"element={<Signup/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
