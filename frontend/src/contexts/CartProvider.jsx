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
    return (
      (product.price - product.price * (product.discount / 100)) *
      (product.quantity || 1)
    );
  };

  // const addToCart = (cartItem) => {
  //   setCartItems([...cartItems, cartItem]);
  // };

  const addToCart = (cartItem, newQuantity = null) => {
    setCartItems((prevCartItems) => {
      const existingIndex = prevCartItems.findIndex(
        (item) => item._id === cartItem._id
      );

      if (existingIndex !== -1) {
        const updatedCart = [...prevCartItems];
        const currentQuantity = updatedCart[existingIndex].quantity || 1;

        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity:
            newQuantity !== null
              ? currentQuantity + newQuantity
              : currentQuantity + 1,
        };

        return updatedCart;
      } else {
        return [
          ...prevCartItems,
          { ...cartItem, quantity: newQuantity !== null ? newQuantity : 1 },
        ];
      }
    });
  };

  // console.log("Sepet durumu:", cartItems);

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
