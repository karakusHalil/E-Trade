import { useContext } from "react";
import { CartContext } from "../../../contexts/CartProvider";

const CartTable = () => {
  const { cartItem, cartItems, removeFromCart } = useContext(CartContext);
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
            const unitPrice =
              product.price - product.price * (product.discount / 100);
            return (
              <tr className="cart-item">
                <td></td>
                <td className="cart-image">
                  <img src={product.images[0]} alt="" />
                  <i
                    onClick={() => removeFromCart(product._id)}
                    className="bi bi-x delete-cart"
                    data-id={product._id}
                  ></i>
                </td>
                <td>{product.name}</td>
                <td>${unitPrice.toFixed(2)}</td>
                <td className="product-quantity">{product.quantity}</td>
                <td className="product-subtotal">
                  ${(unitPrice * 1).toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CartTable;
