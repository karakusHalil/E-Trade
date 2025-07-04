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
      if (new Date(data.expired).getTime() < Date.now()) {
        return message.warning("Girdiğiniz kupon süresi dolmuştur !");
      }

      const updateCoupon = async (coupon) => {
        try {
          if (coupon.count <= 0) {
            return console.log("Kupon kullanım hakkı kalmamıştır !");
          }
          const updatedCount = coupon.count - 1;
          await fetch(`http://localhost:5100/api/coupons/${coupon._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              code: coupon.code,
              discount: coupon.discount,
              expired: coupon.expired,
              count: updatedCount,
            }),
          });
          console.log(data);
        } catch (error) {
          console.log("Sunucu Hatası !");
        }
      };
      await updateCoupon(data);

      const updatedCart = cartItems.map((item) => {
        const updatedUnitPrice = item.price * (1 - data.discount / 100);
        // console.log("updatedUnitPrice:", updatedUnitPrice);
        return { ...item, price: updatedUnitPrice };
      });
      setCartItems(updatedCart);
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
