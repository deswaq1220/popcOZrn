import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav/Nav";
import Ticketing from "./components/Ticketing/Ticketing";
import MovieBannerSlider from "./components/Main/MovieBannerSlider";

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/ticketing" element={<Ticketing />} />
        <Route path="/" element={<MovieBannerSlider />} />{" "}
      </Routes>
    </div>
  );
};

export default App;
