import React from "react";
import "./Products.css";
import ProductItem from "./ProductItem";
const Products = () => {
  return (
    <>
      <section className="products">
        <div className="container">
          <div className="section-title">
            <h2>Featured Products</h2>
            <p>Summer Collection New Morden Design</p>
          </div>
          <div className="product-wrapper product-carousel glide--ltr glide--slider glide--swipeable">
            <div className="glide__track" data-glide-el="track">
              <ul
                className="product-list glide__slides"
                id="product-list"
                style={{
                  transition: "transform cubic-bezier(0.165, 0.84, 0.44, 1)",
                  width: 1525,
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                <ProductItem />

                <li
                  className="product-item glide__slide"
                  style={{ width: 265, marginLeft: 10, marginRight: 10 }}
                >
                  <div className="product-image">
                    <a href="#" draggable="true">
                      <img
                        src="img/products/product3/1.png"
                        alt
                        className="img1"
                      />
                      <img
                        src="img/products/product3/2.png"
                        alt
                        className="img2"
                      />
                    </a>
                  </div>
                  <div className="product-info">
                    <a href="$" className="product-title" draggable="true">
                      Blush Beanie
                    </a>
                    <ul className="product-star">
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-half" />
                      </li>
                    </ul>
                    <div className="product-prices">
                      <strong className="new-price">$38.00</strong>
                      <span className="old-price">$165.00</span>
                    </div>
                    <span className="product-discount">-90%</span>
                    <div className="product-links">
                      <button className="add-to-cart" data-id={3}>
                        <i className="bi bi-basket-fill" />
                      </button>
                      <button>
                        <i className="bi bi-heart-fill" />
                      </button>
                      <a
                        href="#"
                        className="product-link"
                        data-id={3}
                        draggable="true"
                      >
                        <i className="bi bi-eye-fill" />
                      </a>
                      <a href="#" draggable="true">
                        <i className="bi bi-share-fill" />
                      </a>
                    </div>
                  </div>
                </li>
                <li
                  className="product-item glide__slide"
                  style={{ width: 265, marginLeft: 10, marginRight: 10 }}
                >
                  <div className="product-image">
                    <a href="#" draggable="true">
                      <img
                        src="img/products/product4/1.png"
                        alt
                        className="img1"
                      />
                      <img
                        src="img/products/product4/2.png"
                        alt
                        className="img2"
                      />
                    </a>
                  </div>
                  <div className="product-info">
                    <a href="$" className="product-title" draggable="true">
                      Mercury Tee
                    </a>
                    <ul className="product-star">
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-half" />
                      </li>
                    </ul>
                    <div className="product-prices">
                      <strong className="new-price">$48.00</strong>
                      <span className="old-price">$165.00</span>
                    </div>
                    <span className="product-discount">-40%</span>
                    <div className="product-links">
                      <button className="add-to-cart" data-id={4}>
                        <i className="bi bi-basket-fill" />
                      </button>
                      <button>
                        <i className="bi bi-heart-fill" />
                      </button>
                      <a
                        href="#"
                        className="product-link"
                        data-id={4}
                        draggable="true"
                      >
                        <i className="bi bi-eye-fill" />
                      </a>
                      <a href="#" draggable="true">
                        <i className="bi bi-share-fill" />
                      </a>
                    </div>
                  </div>
                </li>
                <li
                  className="product-item glide__slide"
                  style={{ width: 265, marginLeft: 10, marginRight: 10 }}
                >
                  <div className="product-image">
                    <a href="#" draggable="true">
                      <img
                        src="img/products/product5/1.png"
                        alt
                        className="img1"
                      />
                      <img
                        src="img/products/product5/2.png"
                        alt
                        className="img2"
                      />
                    </a>
                  </div>
                  <div className="product-info">
                    <a href="$" className="product-title" draggable="true">
                      La Bohème Rose Gold
                    </a>
                    <ul className="product-star">
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-half" />
                      </li>
                    </ul>
                    <div className="product-prices">
                      <strong className="new-price">$48.00</strong>
                      <span className="old-price">$165.00</span>
                    </div>
                    <span className="product-discount">-40%</span>
                    <div className="product-links">
                      <button className="add-to-cart" data-id={5}>
                        <i className="bi bi-basket-fill" />
                      </button>
                      <button>
                        <i className="bi bi-heart-fill" />
                      </button>
                      <a
                        href="#"
                        className="product-link"
                        data-id={5}
                        draggable="true"
                      >
                        <i className="bi bi-eye-fill" />
                      </a>
                      <a href="#" draggable="true">
                        <i className="bi bi-share-fill" />
                      </a>
                    </div>
                  </div>
                </li>
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
