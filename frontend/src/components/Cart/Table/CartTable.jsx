import { useContext } from "react";
import { CartContext } from "../../../contexts/CartProvider";

const CartTable = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <table className="shop-table">
        <thead>
          <tr>
            <th className="product-thumbnail">&nbsp;</th>
            <th className="product-thumbnail">&nbsp;</th>
            <th className="product-name">Product</th>
            <th className="product-price">Price</th>
            <th className="product-quantity">Quantity</th>
            <th className="product-subtotal">Subtotal</th>
          </tr>
        </thead>
        <tbody className="cart-wrapper">
          {cartItems.map((product) => {
            return (
              <tr className="cart-item">
                <td></td>
                <td className="cart-image">
                  <img src={product.images[0]} alt="" />
                  <i className="bi bi-x delete-cart" data-id="1"></i>
                </td>
                <td>{product.name}</td>
                <td>
                  ${product.price - product.price * (product.discount / 100)}
                </td>
                <td className="product-quantity">1</td>
                <td className="product-subtotal">$108.00</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CartTable;
