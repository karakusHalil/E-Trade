const CartTable = () => {
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
          <tr className="cart-item">
            <td></td>
            <td className="cart-image">
              <img src="img/products/product1/1.png" alt="" />
              <i className="bi bi-x delete-cart" data-id="1"></i>
            </td>
            <td>Analogue Resign Strap</td>
            <td>$108.00</td>
            <td className="product-quantity">1</td>
            <td className="product-subtotal">$108.00</td>
          </tr>
          <tr className="cart-item">
            <td></td>
            <td className="cart-image">
              <img src="img/products/product2/1.png" alt="" />
              <i className="bi bi-x delete-cart" data-id="2"></i>
            </td>
            <td>Ridley High Waist</td>
            <td>$100.00</td>
            <td className="product-quantity">1</td>
            <td className="product-subtotal">$100.00</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CartTable;
