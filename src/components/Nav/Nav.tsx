
// import React from 'react'
import { SlLock, SlCreditCard, SlUser, SlUserFollow, SlLogout } from "react-icons/sl";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { app } from "../../firebase";
import "./Nav.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const initialUserData = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : {};

function Nav() {
  const [userData, setUserData] = useState(initialUserData);
  const [isLogin, setIsLogin] = useState(false);
  const auth = getAuth(app);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    })
  }, [auth])

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUserData({});
        localStorage.removeItem('userData')
        navigate("/");
        alert("로그아웃 되었습니다.")
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleClickMain = () => {
    navigate('/')
  }

  const handleLogin = () => {
    navigate('/login')
  }

  const handleSignUp = () => {
    navigate('/sign-up')
  }


  return (
    <>
      <header>

        <div className="headerWrap">
          <p className="logo" onClick={handleClickMain}>popcOZrn</p>
          <ul className="icons">
            <li>
              <SlCreditCard size={20} />
              <p>예매하기</p>
            </li>
            <li onClick={isLogin ? handleLogOut : handleLogin}>
              {isLogin ? <SlLogout size={20} /> : <SlLock size={20} />}
              <p>{isLogin ? "로그아웃" : "로그인"}</p>
            </li>
            <li onClick={handleSignUp}>
              <SlUserFollow size={20} />
              <p>회원가입</p>
            </li>
            <li>
              <SlUser size={20} />

              <p>마이페이지</p>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}


export default Nav

