import { createContext, useState } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (cartItem) => {
    setCartItems([...cartItems, cartItem]);
  };
  return (
    <>
      <CartContext.Provider
        value={{
          addToCart: addToCart,
          cartItems: cartItems,
          setCartItems: setCartItems,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
