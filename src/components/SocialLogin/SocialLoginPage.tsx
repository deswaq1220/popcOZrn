import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase";
function SocialLoginPage() {
  const [userData, setUserData] = useState({});
  console.log(userData);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserData(result.user);
        alert("로그인 되었습니다");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <button onClick={handleAuth}>구글 로그인 </button>
    </>
  );
}

export default SocialLoginPage;
