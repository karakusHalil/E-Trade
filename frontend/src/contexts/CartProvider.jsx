import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const calculatePrice = (product) => {
    return product.price - product.price * (product.discount / 100);
  };

  const addToCart = (cartItem) => {
    setCartItems([...cartItems, cartItem]);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (productId) => {
    const filterCarts = cartItems.filter((item) => {
      return productId !== item._id;
    });
    setCartItems(filterCarts);
  };
  return (
    <>
      <CartContext.Provider
        value={{
          addToCart: addToCart,
          cartItems: cartItems,
          setCartItems: setCartItems,
          removeFromCart: removeFromCart,
          calculatePrice: calculatePrice,
          couponCode: couponCode,
          setCouponCode: setCouponCode,
          couponDiscount: couponDiscount,
          setCouponDiscount: setCouponDiscount,
          isCouponApplied: isCouponApplied,
          setIsCouponApplied: setIsCouponApplied,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
