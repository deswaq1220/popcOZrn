import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav/Nav";
import Ticketing from "./components/Ticketing/Ticketing";
import MovieBannerSlider from "./components/Main/MovieBannerSlider";
import MyPage from "./components/Mypage/Mypage";

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/ticketing" element={<Ticketing />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/" element={<MovieBannerSlider />} />{" "}
        <Route path="/my-page" element={<MyPage />} />{" "}
      </Routes>
      {/* <Footer/> */}
    </div>
  );
};

export default App;
