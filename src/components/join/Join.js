import { useEffect, useState } from "react";
import styles from "./Join.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Join(props) {
  const navigate = useNavigate();
  const params = useParams();
  const postId = params.postId;
  const [post, setPost] = useState([]);
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  const createOrder = (data, actions) => {
    const priceToPay = Math.floor(((post.cost / post.minPeople) * 100) / 100);
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              value: priceToPay,
            },
          },
        ],
      })
      .then((orderID) => {
        console.log(orderID);
        return orderID;
      });
  };
  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      const { payer } = details;
      console.log(payer);
      const postRef = doc(db, "posts", post.postId);
      let peopleJoinedCopy = structuredClone(post.peopleJoined);
      peopleJoinedCopy.push(user.email);
      updateDoc(postRef, { peopleJoined: peopleJoinedCopy });
      navigate("/payment-success");
    });
  };
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
      <div className={styles.wholething}>
        <div className={styles.left}>
          <h1 className={styles.title}>{post.postTitle}</h1>
          <div className={styles.pay}>
            <h2 className={styles.leftPay}> {"Pay: $" + post.cost  / post.minPeople} </h2>
            <h3 className={styles.rightPay}>{" / $" + post.cost}</h3> 
          </div>
          <h2 className={styles.j}>
            {"Joined members: " + post.peopleJoined.length + "/" + post.minPeople}
          </h2>
          <h2 className={styles.t}>
            {"Total raised: $" + post.cost*post.peopleJoined.length/post.minPeople + "/$" + post.cost}
          </h2>
          <p className={styles.link}>Product Link: </p>
          <a
            className={styles.linkl}
            target="_blank"
            rel="noopener noreferrer"
            href={post.itemLink}
          >
            {post.itemLink}
          </a>
        </div>

        <div className={styles.right}>
          <p className={styles.desc}>{"Description: " + post.postDescription}</p>

          <PayPalScriptProvider
            options={{
              clientId:
                "ASut3Cttv65_rzvCTMI98Osx53Hkz_wkjBwMjEVeXT5IPf5bWb-ej3c3ap4RF5FALUgKRFLnN-MDVHKe",
              currency: "USD",
              intent: "capture",
            }}
          >
            <PayPalButtons
              style={{ color: "blue" }}
              fundingSource="paypal"
              createOrder={createOrder}
              onApprove={onApprove}
            ></PayPalButtons>
          </PayPalScriptProvider>
        </div>
      </div>
    );
  } else {
    return <p>Loading ...</p>;
  }
}

export default Join;