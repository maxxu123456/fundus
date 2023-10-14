import { Link } from "react-router-dom";
import "./Post.css";
function Post(props) {
  return (
    <div>
      <p>{"Title: " + props.post.postTitle}</p>
      <p>{"Description: " + props.post.postDescription}</p>
      <p>{"Cost: " + props.post.cost}</p>
      <p>{"Minimum Number of People Required: " + props.post.minPeople}</p>
      <p>{"Maximum Amount for people to Pledge " + props.post.maxPostTime}</p>
      <p>{"Item Link " + props.post.itemLink}</p>
      <Link to={"/join/" + props.post.postId}>
        <button>Join</button>
      </Link>
    </div>
  );
}

export default Post;
