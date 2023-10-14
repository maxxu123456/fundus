import { useState } from "react";
import "./Signup.css";

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
      <div>
        <label>First Name: </label>
        <input type="text" onChange={firstNameHandler}></input>
      </div>
      <div>
        <label>Last Name: </label>
        <input type="text" onChange={lastNameHandler}></input>
      </div>
      <div>
        <label>Location: </label>
        <input type="text" onChange={locationHandler}></input>
      </div>
      <div>
        <label>Email: </label>
        <input type="text" onChange={emailHandler}></input>
      </div>
      <div>
        <label>Create Password: </label>
        <input type="text" onChange={passwordHandler}></input>
      </div>

      <button>Create Account</button>
    </div>
  );
}

export default Signup;
