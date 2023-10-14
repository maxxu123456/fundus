import { useRef, useState } from "react";
import "./Signup.css";
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
      <div>
        <label>First Name: </label>
        <input type="text" ref={firstNameRef}></input>
      </div>
      <div>
        <label>Last Name: </label>
        <input type="text" ref={lastNameRef}></input>
      </div>
      <div>
        <label>Location: </label>
        <input type="text" ref={locationRef}></input>
      </div>
      <div>
        <label>Email: </label>
        <input type="text" ref={emailRef}></input>
      </div>
      <div>
        <label>Create Password: </label>
        <input type="text" ref={passwordRef}></input>
      </div>

      <button onClick={onSubmit}>Create Account</button>
    </div>
  );
}

export default Signup;
