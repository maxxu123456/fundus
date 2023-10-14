import { useState } from "react";
import styles from "./Signup.module.css";

function Signup(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const locationHandler = (event) => {
    setLocation(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h2>Create your account</h2>
      <div>
        <input className={styles.input} type="text" placeholder="First Name" onChange={firstNameHandler}></input>
      </div>
      <div>
        <input className={styles.input} type="text" placeholder="Last Name" onChange={lastNameHandler}></input>
      </div>
      <div>
        <input className={styles.input} type="text" placeholder="Location" onChange={locationHandler}></input>
      </div>
      <div>
        <input className={styles.input} type="text" placeholder="Email" onChange={emailHandler}></input>
      </div>
      <div>
        <input className={styles.input} type="password" placeholder="Create Password" onChange={passwordHandler}></input>
      </div>

      <button className={styles.button}>Create Account</button>
    </div>
  );
}

export default Signup;
