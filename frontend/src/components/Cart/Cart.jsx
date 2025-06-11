import CartCoupon from "./Coupon/CartCoupon";
import CartProgress from "./Progress/CartProgress";
import CartTable from "./Table/CartTable";
import CartTotals from "./Totals/CartTotals";
import "./Cart.css";

const Cart = () => {
  return (
    <>
      <section className="cart-page">
        <div className="container">
          <div className="cart-page-wrapper">
            <form className="cart-form">
              <CartProgress />
              <div className="shop-table-wrapper">
                <CartTable />
                <CartCoupon />
              </div>
            </form>
            <div className="cart-collaterals">
              <CartTotals />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
