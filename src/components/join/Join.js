import { useEffect, useState } from "react";
import "./Join.css";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
function Join(props) {
  const params = useParams();
  const postId = params.postId;
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function loadData() {
      const docRef = doc(db, "posts", postId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost(docSnap.data());
        console.log(docSnap.data());
      }
    }
    loadData();
  }, []);
  if (post.peopleJoined) {
    return (
      <div>
        <h1>{post.postTitle}</h1>
        <h1>
          {post.peopleJoined.length <= post.cost
            ? "$" + (post.peopleJoined.length / post.minPeople) * post.cost
            : "$" + post.cost}
        </h1>
        <h2>{"of " + post.cost}</h2>
        <h2>
          {"Joined members: " + post.peopleJoined.length + "/" + post.minPeople}
        </h2>
        <p>Product Link: </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://" + post.itemLink}
        >
          {post.itemLink}
        </a>
        <button>Join</button>
      </div>
    );
  } else {
    return <p>Loading ...</p>;
  }
}

export default Join;
