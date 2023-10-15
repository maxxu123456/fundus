import styles from "./Post.module.css";
import blueButton from "./Blue Cross.png";


import { Link } from "react-router-dom";
function Post(props) {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  let joinElement;
  const completed = props.post.peopleJoined.length === props.post.minPeople;

  if (completed) {
    joinElement = <p>Completed</p>;
  } else if (props.post.peopleJoined.includes(user.email)) {
    joinElement = <p>Joined</p>;
  } else {
    joinElement = (
      <Link to={"/join/" + props.post.postId}>
        <button>Join</button>
      </Link>
    );
  }

  return (
    <div>
      <div className={styles.topRow}>
        <p>{props.post.postTitle}</p>
        <button className={styles.blue}><img src={blueButton}></img></button>
      </div>
      <div className={styles.all}>
        <div className={styles.left}>
          <div className={styles.cost}>
            <p className={styles.big}>{"$" + props.post.cost}</p>
            <p className={styles.little}>{" of $" + Math.round((props.post.cost/props.post.minPeople)*100) / 100}</p>
          </div>

          <p className={styles.joined}>{"Joined members: " + props.post.peopleJoined.length + "/" + props.post.minPeople}</p>
          <p className={styles.plink}>Product link:</p>
          <p>{props.post.itemLink}</p>
        </div>

        <div className={styles.right}>
          <p>{props.post.postDescription}</p>
          <button>Join</button>
        </div>
      </div>

      {joinElement}
    </div>
  );
}

export default Post;
