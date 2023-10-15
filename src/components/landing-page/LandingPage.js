import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
function LandingPage(props) {
  return (
    <div className={styles.all}>
      <h1 className={styles.h1}>moneyPool</h1>
      <div className={styles.container}>
        <Link to="/signup">
          <button className={styles.button + ' ' + styles.first}>Sign Up</button>
        </Link>

        <Link to="/login">
          <button className={styles.button}>Log In</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
