import { useRef } from "react";
import styles from "./Login.module.css";
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
      <h1 className={styles.h1}>moneyPool</h1>
      <div>
        <input type="text" className={styles.input} placeholder="Email" ref={emailRef}></input>
      </div>
      <div>
        <input type="password" className={styles.input} placeholder="Password" ref={passwordRef}></input>
      </div>

      <button className={styles.button} onClick={onSubmit}>Log in</button>
    </div>
  );
}

export default Login;
