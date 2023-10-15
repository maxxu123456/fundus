import { Link } from "react-router-dom";
import "./Post.css";
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
      <p>{"Title: " + props.post.postTitle}</p>
      <p>{"Description: " + props.post.postDescription}</p>
      <p>{"Cost: " + props.post.cost}</p>
      <p>{"Minimum Number of People Required: " + props.post.minPeople}</p>
      <p>{"Item Link " + props.post.itemLink}</p>
      {joinElement}
    </div>
  );
}

export default Post;
