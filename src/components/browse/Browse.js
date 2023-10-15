import { Link } from "react-router-dom";
import { db } from "../../firebase";
import Post from "../post/Post";
import "./Browse.css";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

function Browse() {
  const [posts, setPosts] = useState([]);

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
  return (
    <div>
      {posts.map((post) => {
        return (
          <div>
            <Post key={post.postId} post={post} />
          </div>
        );
      })}
    </div>
  );
}

export default Browse;
