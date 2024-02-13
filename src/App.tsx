import { useState } from "react";
import Login from "./components/Login/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav/Nav";

import Ticketing from "./components/Ticketing/Ticketing";
import MovieBannerSlider from "./components/Main/MovieBannerSlider";
import MyPage from "./components/Mypage/Mypage";


import { Routes, Route, Link, Outlet } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import { useHistory } from "react-router-dom";

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
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/ticketing" element={<Ticketing />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/" element={<MovieBannerSlider />} />{" "}
        <Route path="/my-page" element={<MyPage />} />{" "}

      </Routes>
    </div>
  );
};

export default App;
