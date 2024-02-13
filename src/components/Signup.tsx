import { useState } from "react";
import TermsofUse from "./TermsofUse/TermsofUse";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav/Nav";
import './Signup.css'



const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  //이용약관 동의
  const [termsAgreed, setTermsAgreed] = useState(false);


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  
  const handleSignup = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    
    if(password !== confirmPassword) {
      setErrorMsg("비밀번호가 일치하지 않습니다.")
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential, user);

        updateProfile(user,{
          displayName:name
        }).then(() => {
          console.log(user.displayName)

          alert(`${user.displayName}님 가입을 축하합니다!`);
          navigate('/login')
  
          setErrorMsg("");
  
          setEmail("");
          setName("");
          setPassword("");
          setConfirmPassword("");
          setErrorMsg("");

        }).catch((error) => {
          console.error("에러낫으용",error)
        })
        
        // ...
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // alert(errorMessage);
        // alert("가입실패!");
        // setEmail("");
        // setPassword("");
        switch (errorCode) {
          case "auth/invalid-email":
            setErrorMsg("잘못된 이메일 주소입니다.");
            break;
          case "auth/missing-password":
            setErrorMsg("비밀번호를 입력해주세요.");
            break;
          case "auth/weak-password":
            setErrorMsg("비밀번호는 6자리 이상이어야 합니다.");
            break;
          case "auth/email-already-in-use":
            setErrorMsg("이미 가입되어 있는 계정입니다");
            break;
        }

        // ..
      });
  };

  return (
    <>
    <div className="sign_up_wrap">
    {/* <Nav/> */}
    <div className="sign_up_form_wrap">

    <form>
      <h2>회원가입</h2>
      <div className="name">
        <label htmlFor="name">이름</label>
        <input
          id="name"
          type="text"
          onChange={handleNameChange}
          placeholder="이름을 입력하세요"
          value={name}
        ></input>
      </div>
      <div className="email">
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          onChange={handleEmailChange}
          placeholder="이메일을 입력하세요"
          value={email}
        ></input>
      </div>
      <div className="password">
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handlePasswordChange}
          value={password}
        ></input>
      </div>
      <div className="reconfirm_password">
      <label htmlFor="reconfirm_password">비밀번호 재확인</label>
        <input
          id="reconfirm_password"
          type="password"
          placeholder="비밀번호를 한번 더 입력하세요"
          onChange={handleConfirmPasswordChange}
          value={confirmPassword}
        ></input>
      </div>
      <p className="error">{errorMsg}</p>

     <TermsofUse termsAgreed={termsAgreed} setTermsAgreed={setTermsAgreed}/>
      <button
        type="submit"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSignup(e)}
      >
        가입하기
      </button>
    </form>
    </div>
    </div>
    </>
  );
};

export default Signup;
