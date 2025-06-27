import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { message } from "antd";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:5100/api/products");
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
          // console.log("data", data);
        } else {
          message.error("Ürünler getirilirken hata oldu !");
        }
      } catch (error) {
        console.log("Sunucu Hatası !");
      }
    };
    getProducts();
  }, []);
  // console.log(products);
  return (
    <>
      <section className="products">
        <div className="container">
          <div className="section-title">
            <h2>Featured Products</h2>
            <p>Summer Collection New Morden Design</p>
          </div>
          <div className="product-wrapper product-carousel glide--ltr glide--slider glide--swipeable">
            <div className="glide__track">
              <ul
                className="product-list glide__slides"
                id="product-list"
                style={{
                  transition: "transform cubic-bezier(0.165, 0.84, 0.44, 1)",
                  width: 1525,
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                {products.map((product) => (
                  <ProductItem key={product._id} product={product} />
                ))}
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button
                className="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                <i className="bi bi-chevron-left" />
              </button>
              <button
                className="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                <i className="bi bi-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
