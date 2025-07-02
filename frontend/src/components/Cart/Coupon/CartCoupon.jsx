import React, { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartProvider";
import { message } from "antd";

const CartCoupon = () => {
  const [couponCode, setCouponCode] = useState("");
  const { cartItems, setCartItems } = useContext(CartContext);
  const applyCoupon = async () => {
    if (couponCode.trim().length === 0) {
      return message.warning("Kupon kodu boş girilemez...");
    }
    try {
      const response = await fetch(
        `http://localhost:5100/api/coupons/code/${couponCode}`
      );
      if (!response.ok) {
        return message.warning("Geçersiz kupon kodu !");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Sunucu Hatası !");
    }
  };

  return (
    <>
      <div className="actions-wrapper">
        <div className="coupon">
          <input
            type="text"
            className="input-text"
            placeholder="Coupon code"
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button className="btn" type="button" onClick={applyCoupon}>
            Apply Coupon
          </button>
        </div>
        <div className="update-cart">
          <button className="btn">Update Cart</button>
        </div>
      </div>
    </>
  );
};

export default CartCoupon;
