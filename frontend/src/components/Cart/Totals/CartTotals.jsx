import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { message } from "antd";
import { loadStripe } from "@stripe/stripe-js";
import { CartContext } from "../../../contexts/CartProvider";

const CartTotals = () => {
  const { cartItems, calculatePrice, couponDiscount } = useContext(CartContext);
  const [fastCargo, setFastCargo] = useState(false);
  const totalPrice = cartItems.map((product) => {
    return calculatePrice(product);
  });
  const cargoPrice = 15.0;
  let subtotal = totalPrice.reduce((prev, current) => prev + current, 0);
  subtotal = subtotal * (1 - couponDiscount / 100);
  // console.log("subtotal:", subtotal);
  const generalTotal = fastCargo
    ? (subtotal + cargoPrice).toFixed(2)
    : subtotal.toFixed(2);

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const handlePayment = async () => {
    if (!user) {
      return message.info(
        "Ödeme işlemleri için giriş yapmanız gerekmektedir !"
      );
    }
    const body = {
      products: cartItems,
      totalPrice: subtotal,
      user: user,
      cargoFee: fastCargo ? cargoPrice : 0,
    };
    // console.log(body);
    try {
      const stripe = await loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
      const response = await fetch(`http://localhost:5100/api/payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        return message.error("Ödeme işlemi başarısız !");
      }
      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="cart-totals">
        <h2>Cart totals</h2>
        <table>
          <tbody>
            <tr className="cart-subtotal">
              <th>Subtotal</th>
              <td>
                <span id="subtotal">${subtotal.toFixed(2)}</span>
              </td>
            </tr>
            <tr>
              <th>Shipping</th>
              <td>
                <ul>
                  <li>
                    <label>
                      Fast Cargo: $15.00
                      <input
                        type="checkbox"
                        id="fast-cargo"
                        checked={fastCargo}
                        onChange={() => setFastCargo(!fastCargo)}
                      />
                    </label>
                  </li>
                  <li>
                    <a href="#">Change Address</a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Total</th>
              <td>
                <strong id="cart-total">${generalTotal}</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="checkout">
          <button className="btn btn-lg" type="button" onClick={handlePayment}>
            Proceed to checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartTotals;

CartTotals.propTypes = {
  cartItems: PropTypes.arrayOf({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number,
  }).isRequired,
  calculatePrice: PropTypes.func,
};
