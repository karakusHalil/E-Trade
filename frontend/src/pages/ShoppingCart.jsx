import React from "react";
import Cart from "../components/Cart/Cart";
import Header from "../components/Layout/header/Header";
import Footer from "../components/Layout/footer/Footer";
import Policy from "../components/Layout/policy/Policy";

const ShoppingCart = () => {
  return (
    <>
      <Header />
      <Cart />
      <Policy />
      <Footer />
    </>
  );
};

export default ShoppingCart;
