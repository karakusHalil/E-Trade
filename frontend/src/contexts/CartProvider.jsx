import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

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
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
