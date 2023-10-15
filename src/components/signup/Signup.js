import { useRef, useState } from "react";
import styles from "./Signup.module.css";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
function Signup(props) {
  const navigate = useNavigate();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const locationRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  async function onSubmit(event) {
    await setDoc(doc(db, "users", emailRef.current.value), {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      location: locationRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    locationRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";

    navigate("/login");
  }

  return (
    <div>
       <h2>Create your account</h2>
      <div>
        <input type="text" className={styles.input} placeholder="First Name" ref={firstNameRef}></input>
      </div>
      <div>
        <input type="text" className={styles.input} placeholder="Last Name" ref={lastNameRef}></input>
      </div>
      <div>
        <input type="text" className={styles.input} placeholder="Location" ref={locationRef}></input>
      </div>
      <div>
        <input type="text" className={styles.input} placeholder="Email" ref={emailRef}></input>
      </div>
      <div>
        <input type="password" className={styles.input} placeholder="Password" ref={passwordRef}></input>
      </div>

      <button className={styles.button} onClick={onSubmit}>Create Account</button>
    </div>
  );
}

export default Signup;
