import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div style={{ textAlign: "center", padding: "100px 20px" }}>
      <h1>✅ Payment Successful!</h1>
      <p>Your order has been received. Thank you for shopping with us.</p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default Success;
