import { Link } from "react-router-dom";
import "./Dashboard.css";
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
    return (
      <div>
        <Link to="/create">
          <button>Create Post</button>
        </Link>
        <Link to="/browse">
          <button> Browse</button>
        </Link>
        <div>
          <h1>Profile</h1>
          <h2>{user.firstName + " " + user.lastName}</h2>
          <h3>{user.email}</h3>
          <h3>{user.location}</h3>
          <h1>My Pools</h1>
          {posts.map((post) => {
            if (
              post.peopleJoined.includes(user.email) ||
              post.creator === user.email
            ) {
              return (
                <div>
                  <p>{post.postTitle}</p>
                  <p>Contribute:</p>
                  <p>
                    {"$" +
                      (post.peopleJoined.length / post.minPeople) * post.cost}
                  </p>
                  <p>of</p>
                  <p>{"$" + post.cost}</p>
                  <p>{determineJoinElement(post)}</p>
                </div>
              );
            }
          })}
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
