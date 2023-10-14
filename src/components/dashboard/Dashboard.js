import { Link } from "react-router-dom";
import "./Dashboard.css";
function Dashboard(props) {
  let user = localStorage.getItem("user");
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
