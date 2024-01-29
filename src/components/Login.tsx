import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import SocialLogin from "./SocialLogin";
// import { useHistory } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Login: React.FC<{
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  errorMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
}> = ({ email, setEmail, password, setPassword, errorMsg, setErrorMsg }) => {
  // const navigate = useNavigate();
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //가입성공했을 때
        const user = userCredential.user;
        alert("로그인성공!");
        setEmail("");
        setPassword("");
        setErrorMsg("");
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
          // case "auth/weak-password":
          //   setErrorMsg("비밀번호는 6자리 이상이어야 합니다.");
          //   break;
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
    <form>
      <h2>로그인</h2>
      <div>
        <input
          type="email"
          onChange={handleEmailChange}
          placeholder="email"
          value={email}
        ></input>
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          onChange={handlePasswordChange}
          value={password}
          // value={password}
        ></input>
      </div>
      <p>{errorMsg}</p>
      <button
        type="submit"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleLogin(e)}
      >
        로그인
      </button>
      <div>
        <a>회원가입하기 </a>
      </div>
    </form>
  );
};

export default Login;
