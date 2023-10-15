import styles from "./Post.module.css";
import blueButton from "./Blue Cross.png";


import { Link } from "react-router-dom";
function Post(props) {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  let joinElement;
  const completed = props.post.peopleJoined.length === props.post.minPeople;
  let type = '';

  if (completed) {
    joinElement = (
        <button className={styles.buttona}>Completed</button>
    );
  } else if (props.post.peopleJoined.includes(user.email)) {
    joinElement = (
      <button className={styles.buttonb}>Joined</button>
  );
  } else {
    joinElement = (
      <Link to={"/join/" + props.post.postId}>
        <button className={styles.buttonc + " " + styles.pointer}>Join</button>
      </Link>
    );
  }  

  return (
    <div className={styles.unit}>
      <div className={styles.left}>
        <p className={styles.title}>{props.post.postTitle}</p>
        <div className={styles.hor}>
          <p className={styles.bigger}>{"Contribute: $" + props.post.cost/props.post.minPeople + " "}</p>
          <p className={styles.smaller}>{" / $" + props.post.cost}</p>
        </div>
      </div>

      <div className={styles.right}>
        {joinElement}
      </div>
    </div>
  );
}

export default Post;
