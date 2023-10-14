import "./Post.css";
function Post(props) {
  return (
    <div>
      <p>{"Title: " + props.post.postTitle}</p>
      <p>{"Description: " + props.post.postDescription}</p>
      <p>{"Cost: " + props.post.cost}</p>
      <p>{"Minimum Number of People Required: " + props.post.minPeople}</p>
      <p>{"Maximum Amount for people to Pledge " + props.post.maxPostTime}</p>
      <p>
        {"Max Amount of Poster to deliver after enough people pledge " +
          props.post.maxDeliveryTime}
      </p>
    </div>
  );
}

export default Post;
