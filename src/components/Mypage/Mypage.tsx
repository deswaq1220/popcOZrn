import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { IoIosPerson } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import './MyPage.css';

interface Movie {
  id: number;
  title: string;
  posterPath: string; 
}

const MyPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [favoritedMovies, setFavoritedMovies] = useState<Movie[]>([]);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        loadFavoritedMovies();
      } else {
        setUser(null);
        setFavoritedMovies([]);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const loadFavoritedMovies = () => {
    const favoritedMovies: Movie[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("favorite_")) {
        const movie = JSON.parse(localStorage.getItem(key)!);
        favoritedMovies.push(movie);
      }
    }
    setFavoritedMovies(favoritedMovies);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setFavoritedMovies([]);
        navigate("/login");
        localStorage.clear();
      })
      .catch((error) => {
        console.error("로그아웃 에러", error);
      });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className='mypage-container'>
      <div className='mypage-title'>
        마이페이지
      </div>
      {user ? (
        <div className='mypage-flex'>
          <div className="mypage-profile">
            <span className='mypage-image'><IoIosPerson /></span>
            <form className='mypage-info'>
              <p>{user.displayName}님의 방문을 환영합니다</p>
              <p>이메일: {user.email}</p>
              <button className='logout-btn' onClick={handleLogout}>로그아웃</button>
            </form>
          </div>
          <div className="favorited-movies">
            <h2>찜한 영화 목록</h2>
            <div className="favorited-movies-detail">
            {favoritedMovies.map((movie) => (
              <div key={movie.id} className="favorited-movie">
                <img className='movie-img'src={movie.posterPath} alt={movie.title} />
                <p className="movie-title">{movie.title}</p>
              </div>
              
            ))}
          </div>
          </div>
        </div>
      ) : (
        <div className="needYourId">
          <p>로그인이 필요한 페이지입니다.</p>
          <button className='login-btn' onClick={handleLogin}>로그인</button>
        </div>
      )}
    </div>
  );
};

export default MyPage;
