import logo from "./logo.svg";
import "./App.css";
import Post from "./components/post/Post";

function App() {
  let post1 = {
    postTitle: "Need paper towel",
    postDescription:
      "We need to put paper towels inside the restroom because there's nothing",
    cost: 5.0,
    minPeople: 2,
    //hours
    maxPostTime: 12,
    maxDeliveryTime: 13,
  };
  let post2 = {
    postTitle: "Microwave",
    postDescription: "We need microwave inside the dorm floor kitchen",
    cost: 150.0,
    minPeople: 10,
    maxPostTime: 23,
    maxDeliveryTime: 22,
  };
  let posts = [];
  posts.push(post1);
  posts.push(post2);
  return (
    <div className="App">
      {posts.map(function (post) {
        return <Post post={post}></Post>;
      })}
    </div>
  );
}

export default App;
