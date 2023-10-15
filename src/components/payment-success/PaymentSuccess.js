import { Link } from "react-router-dom";
import "./PaymentSuccess.css";

function PaymentSuccess(props) {
  return (
    <div>
      <p>Payment Successfull</p>
      <Link to="/dashboard">
        <button>Go to dashboard</button>
      </Link>
    </div>
  );
}

export default PaymentSuccess;
