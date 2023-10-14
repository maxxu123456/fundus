import { Link } from "react-router-dom";
import "./Success.css";

function Success(props) {
  return (
    <div>
      <p>Posted</p>
      <Link to="/dashboard">
        <button>Go to dashboard</button>
      </Link>
    </div>
  );
}

export default Success;
