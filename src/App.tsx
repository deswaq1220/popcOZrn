import { useState } from "react";
import Nav from "./components/Nav/Nav";

import { Routes, Route, Link, Outlet } from "react-router-dom";
import Ticketing from "./components/Ticketing/Ticketing";
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
          <Route path="/ticketing" element={<Ticketing />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
