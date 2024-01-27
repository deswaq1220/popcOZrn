import React,{useEffect,useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from '../../firebase';
function SocialLoginPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const { pathname } = useLocation();

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (!user) {
  //       navigate("/");
  //     } else if (user && pathname === "/") {
  //       navigate("/main");
  //     }
  //   });
  // }, [auth, navigate, pathname]);

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserData(result.user);
        alert("로그인 되었습니다")
      })
      .catch((error) => {
        alert(error.message);
      });
  };


  return (
    <>
      <button  onClick={handleAuth} >구글 로그인 </button>

    </>
  )
}

export default SocialLoginPage