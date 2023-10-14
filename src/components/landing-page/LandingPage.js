import { Link } from "react-router-dom";
function LandingPage(props) {
  return (
    <div>
      <p>Fund Us!</p>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>

      <Link to="/login">
        <button>Log In</button>
      </Link>
    </div>
  );
}

export default LandingPage;
