import { useRef } from "react";
import "./Login.css";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  async function onSubmit(event) {
    const docRef = doc(db, "users", emailRef.current.value);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const user = docSnap.data();
      if (passwordRef.current.value === user.password) {
        localStorage.setItem("user", JSON.stringify(docSnap.data()));
        navigate("/dashboard");
      } else {
        console.log("Password is incorrect!");
      }
    } else {
      console.log("You don't exist!");
    }

    emailRef.current.value = "";
    passwordRef.current.value = "";

    navigate("/dashboard");
  }

  return (
    <div>
      <div>
        <label>Email: </label>
        <input type="text" ref={emailRef}></input>
      </div>
      <div>
        <label>Password: </label>
        <input type="text" ref={passwordRef}></input>
      </div>

      <button onClick={onSubmit}>Log in</button>
    </div>
  );
}

export default Login;
