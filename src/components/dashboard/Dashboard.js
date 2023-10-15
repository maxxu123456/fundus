import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import plus from "./images/plus.png";
import magnify from "./images/magnify.png";

import { useEffect, useState } from "react";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
function Dashboard(props) {
  let user = localStorage.getItem("user");
  const [posts, setPosts] = useState([]);

  function determineJoinElement(post) {
    let joinElement;
    const completed = post.peopleJoined.length === post.minPeople;
    if (completed) {
      joinElement = <p>Completed</p>;
    } else if (post.peopleJoined.includes(user.email)) {
      joinElement = <p>Joined</p>;
    } else {
      joinElement = (
        <Link to={"/join/" + post.postId}>
          <button>Join</button>
        </Link>
      );
    }
    return joinElement;
  }
  useEffect(() => {
    async function loadData() {
      const querySnapshot = await getDocs(collection(db, "posts"));
      let newPosts = [];
      querySnapshot.forEach((post) => {
        newPosts.push(post.data());
      });
      setPosts(newPosts);
      console.log(newPosts);
    }
    loadData();
  }, []);
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
                <button className={styles.create}>
                  <img src={plus}></img>
                </button>
              </Link>
            </div>

            <div className={styles.browseBlock}>
              <p>Browse</p>
              <Link to="/browse">
                <button className={styles.browse}>
                  <img src={magnify}></img>
                </button>
              </Link>
            </div>
          </div>

          <div className={styles.three}>
            <div className={styles.profileBlock}>
              <p>Profile</p>
              <div className={styles.profile}>
                <h2 className={styles.h2}>
                  {user.firstName + " " + user.lastName}
                </h2>
                <h3 className={styles.subtext}>{user.email}</h3>
                <h3 className={styles.subtext}>{user.location}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.top}></div>

        <div className={styles.bottom}>
          <p className={styles.bottomTitle}>My Pools</p>

          <div>
            {posts.map((post) => {
              if (
                post.peopleJoined.includes(user.email) ||
                post.creator === user.email
              ) {
                return (
                  <div className={styles.section}>
                    <p className={styles.title}>{post.postTitle}</p>
                    <div className={styles.middle}>
                    <p>{"Pay: $" + (post.cost / post.minPeople) + " / " + "$" + post.cost}</p>
                    </div>
                    <p className={styles.right}>Joined</p>
                  </div>
                );
              }
            })}
          </div>
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
