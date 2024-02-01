import {
  getAuth,
  signInWithEmailAndPassword,
  // onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
// import SocialLogin from "../SocialLogin";
// import { useHistory } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { auth } from "../../firebase";
import Signup from "../Signup";

// React.FC<{
//   // email: string;
//   // setEmail: React.Dispatch<React.SetStateAction<string>>;
//   // password: string;
//   // setPassword: React.Dispatch<React.SetStateAction<string>>;
//   // errorMsg: string;
//   // setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
//   // { email, setEmail, password, setPassword, errorMsg, setErrorMsg }
// }>
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //가입성공했을 때
        const user = userCredential.user;
        alert("로그인성공!");
        setEmail("");
        setPassword("");
        setErrorMsg("");
        localStorage.setItem("userData", JSON.stringify(userCredential.user))
      })
      .catch((error) => {
        //가입실패했을 때
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        switch (errorCode) {
          case "auth/invalid-email":
            setErrorMsg("잘못된 이메일 주소입니다.다시 입력해주세요");
            break;
          case "auth/missing-password":
            setErrorMsg("비밀번호를 입력해주세요.");
            break;
          case "auth/invalid-credential":
            setErrorMsg("입력하신 정보와 일치하는 계정이 없습니다.");
            setPassword("");
            setEmail("");
            break;
        }
      });
  };

  //로그인 상태 파악
  // const [IsLoggined, setIsLoggined] = useState(false);
  // const auth = getAuth();
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/auth.user
  //     const uid = user.uid;
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });

  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="login-title">로그인</h2>
        <div className="input-div">
          <div className="input-email">
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              className="input"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="이메일"
            ></input>
          </div>
          <div className="input-pw">
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              className="input"
              type="password"
              placeholder="비밀번호"
              onChange={handlePasswordChange}
              value={password}
            ></input>
          </div>
        </div>
        <p className="errorMsg">{errorMsg}</p>
        <button
          className="login-button"
          type="submit"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleLogin(e)}
        >
          로그인
        </button>
        <div className="else">
          <span className="else-text">또는</span>
        </div>
        <div className="google-login">
          <img
            src="/src/img/google-logo.png"
            alt="google-logo"
            className="google-logo"
          />
          Google로 로그인
        </div>
        <div>
          <button className="signup">
            아직 회원이 아니라면?
            <Link to="/sign-up">
              <span className="signupbtn">회원가입</span>
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
