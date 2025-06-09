import React from "react";
import "./Products.css";
import ProductItem from "./ProductItem";
const Products = () => {
  return (
    <>
      <section class="products">
        <div class="container">
          <div class="section-title">
            <h2>Featured Products</h2>
            <p>Summer Collection New Morden Design</p>
          </div>
          <div class="product-wrapper product-carousel">
            <div class="glide__track">
              <ul class="product-list glide__slides" id="product-list">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </ul>
            </div>
            <div class="glide__arrows">
              <button
                class="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                <i class="bi bi-chevron-left"></i>
              </button>
              <button
                class="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
