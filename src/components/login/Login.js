import styles from "./Login.module.css";
function Login(props) {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const emailHandler = (event) => {
        
    // };
    // const passwordHandler = (event) => {
        
    // };

    return (
        <div>
            <h1>moneyPool</h1>
            <div>
                <input className={styles.input} type="text" placeholder="Email" ></input>
            </div>
            <div>
                <input className={styles.input} type="password" placeholder="Password" ></input>
            </div>

            <button className={styles.button}>Log In</button>
        </div>
    );
}

export default Login;
