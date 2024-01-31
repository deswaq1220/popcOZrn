import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Signup: React.FC<{
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  errorMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
}> = ({ email, setEmail, password, setPassword, errorMsg, setErrorMsg }) => {
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSignup = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential, user);

        alert("가입을 축하합니다!");

        setErrorMsg("");

        setEmail("");
        setPassword("");

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
    <form>
      <h2>회원가입</h2>
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
        ></input>
      </div>
      <p>{errorMsg}</p>
      <button
        type="submit"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSignup(e)}
      >
        가입하기
      </button>
    </form>
  );
};

export default Signup;
