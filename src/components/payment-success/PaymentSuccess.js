import { Link } from "react-router-dom";
import styles from "./PaymentSuccess.module.css";
import check from "./checkmark2.png"
import ex from "./Gray Cross2.png";

function PaymentSuccess(props) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.exTotal}>
          <Link to="/dashboard">
            <button className={styles.button}><img className={styles.ex} src={ex}></img></button>
          </Link>
        </div>
        <div className={styles.under}>
          <img className={styles.check} src={check}></img>
          <p className={styles.posted}>Payment successful!</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
