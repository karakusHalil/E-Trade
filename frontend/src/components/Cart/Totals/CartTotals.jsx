import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../../contexts/CartProvider";

const CartTotals = () => {
  const { cartItems, calculatePrice } = useContext(CartContext);
  const [fastCargo, setFastCargo] = useState(false);

  const totalPrice = cartItems.map((product) => {
    return calculatePrice(product);
  });
  console.log("totalPrice:", totalPrice);
  const cargoPrice = 15.0;
  const subtotal = totalPrice.reduce((prev, current) => prev + current, 0);
  console.log("subtotal:", subtotal);
  const generalTotal = fastCargo
    ? (subtotal + cargoPrice).toFixed(2)
    : subtotal.toFixed(2);
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
          <button className="btn btn-lg">Proceed to checkout</button>
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
