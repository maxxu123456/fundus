import { useRef } from "react";
import "./CreatePost.css";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

function CreatePost(props) {
  const titleRef = useRef();
  const costRef = useRef();
  const minParticipantsRef = useRef();
  const maxPostTimeRef = useRef();
  const linkRef = useRef();
  const descriptionRef = useRef();

  async function onSubmit() {
    const postId = crypto.randomUUID();
    console.log(postId);
    await setDoc(doc(db, "posts", postId), {
      postId: postId,
      postTitle: titleRef.current.value,
      postDescription: descriptionRef.current.value,
      cost: costRef.current.value,
      minPeople: minParticipantsRef.current.value,
      maxPostTime: maxPostTimeRef.current.value,
      itemLink: linkRef.current.value,
    });
    titleRef.current.value = "";
    costRef.current.value = "";
    minParticipantsRef.current.value = "";
    maxPostTimeRef.current.value = "";
    linkRef.current.value = "";
    descriptionRef.current.value = "";
  }

  return (
    <div>
      <input placeholder="Title/Item" type="text" ref={titleRef}></input>
      <input placeholder="Cost" type="number" ref={costRef}></input>
      <input
        placeholder="Minimum Number of Participants"
        type="number"
        ref={minParticipantsRef}
      ></input>
      <input
        placeholder="Deadline Length"
        type="number"
        ref={maxPostTimeRef}
      ></input>
      <input
        placeholder="Link to item eg: Amazon..."
        type="text"
        ref={linkRef}
      ></input>
      <input placeholder="Description" type="text" ref={descriptionRef}></input>
      <button onClick={onSubmit}>Create Post</button>
    </div>
  );
}

export default CreatePost;
