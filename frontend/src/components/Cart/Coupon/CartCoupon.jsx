import React, { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartProvider";
import { message } from "antd";

const CartCoupon = () => {
  const {
    couponCode,
    setCouponCode,
    setCouponDiscount,
    isCouponApplied,
    setIsCouponApplied,
  } = useContext(CartContext);
  const applyCoupon = async () => {
    if (couponCode.trim().length === 0) {
      return message.warning("Kupon kodu boş girilemez...");
    }
    if (isCouponApplied) {
      return message.warning("Kupon zaten uygulandı.");
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
            return message.warning("Kupon kullanım hakkı kalmamıştır !");
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

      // const updatedCart = cartItems.map((item) => {
      //   const updatedUnitPrice = item.price * (1 - data.discount / 100);
      //   // console.log("updatedUnitPrice:", updatedUnitPrice);
      //   return { ...item, price: updatedUnitPrice };
      // });
      // setCartItems(updatedCart);

      // setTotalPrice(() => {
      //   const shopBalance = cartItems.map((item) => {
      //     return calculatePrice(item.price * (1 - data.discount / 100));
      //   });
      //   shopBalance.totalPrice.reduce((prev, current) => prev + current, 0);
      // });
      setCouponDiscount(data.discount);
      setIsCouponApplied(true);
    } catch (error) {
      console.log("Sunucu Hatası !");
    }
  };

  const removeCoupon = () => {
    setCouponDiscount(0);
    setIsCouponApplied(false);
    setCouponCode("");
    message.info("Kupon iptal edildi.");
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
            disabled={isCouponApplied} // Kupon uygulandıysa input kapalı
            value={couponCode}
          />
          <button
            className="btn"
            type="button"
            onClick={applyCoupon}
            disabled={isCouponApplied} // Kupon uygulandıysa buton kapalı
          >
            Apply Coupon
          </button>
          {isCouponApplied && (
            <button
              className="btn btn-danger"
              type="button"
              onClick={removeCoupon}
              style={{ marginLeft: "10px" }}
            >
              Kuponu Kaldır
            </button>
          )}
        </div>

        <div className="update-cart">
          <button className="btn">Update Cart</button>
        </div>
      </div>
    </>
  );
};

export default CartCoupon;
