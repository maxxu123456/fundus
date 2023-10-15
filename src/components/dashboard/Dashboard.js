import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import plus from './images/plus.png';
import magnify from './images/magnify.png';

function Dashboard(props) {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
    let plusURL = plus;

    return (
      <div>
        <div className={styles.bar}>
          <p>moneyPool</p>
        </div>

        <div className={styles.titles}>
          <div className={styles.one}>

            <div className={styles.createBlock}>
              <p> Create Post</p>
              <Link to="/create">
                <button className={styles.create}><img src={plus}></img></button>
              </Link>
            </div>

            <div className={styles.browseBlock}>
              <p>Browse</p>
              <button className={styles.browse}><img src={magnify}></img></button>
            </div>

          </div>

            <div className={styles.three}>
              <div className={styles.profileBlock}>
                <p>Profile</p>
                <div className={styles.profile}>
                  <h2 className={styles.h2}>{user.firstName + " " + user.lastName}</h2>
                  <h3 className={styles.subtext}>{user.email}</h3>
                  <h3 className={styles.subtext}>{user.location}</h3>
                </div>
              </div>
            </div>
        </div>

        <div className={styles.top}>


        </div>

        <div className={styles.bottom}>
          <p className={styles.bottomTitle}>My Pools</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <p>You are not signed in!</p>
    </div>
  );
}

export default Dashboard;
