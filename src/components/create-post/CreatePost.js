import { Link } from "react-router-dom";
import { useRef } from "react";
import styles from "./CreatePost.module.css";
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
      <h1 className={styles.title}>Create Post</h1>

      <div className={styles.container}>

        <div className={styles.left}>
          <input className={styles.input} placeholder="Item" type="text" ref={titleRef}></input>
          <input className={styles.input} placeholder="Cost ($)" type="number" ref={costRef}></input>
          <input 
            className={styles.input}
            placeholder="# of min participants"
            type="number"
            ref={minParticipantsRef}
          ></input>

        </div>

        <div className={styles.right}>
          <input
            className={styles.input}
            placeholder="Item link"
            type="text"
            ref={linkRef}
          ></input>
          <textarea  
            placeholder="Description" 
            rows="4"
            ref={descriptionRef}>
            </textarea>
          <div className={styles.buttons}>
            <Link to="/dashboard">
              <button className={styles.button2}>Cancel</button>
            </Link>
            <button className={styles.button} onClick={onSubmit}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
