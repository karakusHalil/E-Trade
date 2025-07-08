import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div style={{ textAlign: "center", padding: "100px 20px" }}>
      <h1>❌ Payment Canceled</h1>
      <p>Your payment was canceled. You can continue shopping or try again.</p>
      <Link to="/cart" className="btn btn-primary">
        Back to Cart
      </Link>
    </div>
  );
};

export default Cancel;
