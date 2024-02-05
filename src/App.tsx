import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup';
import Nav from './components/Nav/Nav';
import Ticketing from './components/Ticketing/Ticketing';
import MovieBannerSlider from './components/Main/MovieBannerSlider';

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/ticketing" element={<Ticketing />} />
        <Route path="/" element={<MovieBannerSlider />} /> {/* 메인 화면으로 MovieBannerSlider 렌더링 */}
        {/* <Route path="/MovieBannerSlider" element={<MovieBannerSlider />} /> 이 경로는 삭제하거나 주석 처리 */}
      </Routes>
    </div>
  );
};

export default App;
