import React from "react";
import "./ProductItem.css";
const ProductItem = () => {
  return (
    <>
      <li
        className="product-item glide__slide"
        style={{ width: 265, marginLeft: 10, marginRight: 10 }}
      >
        <div className="product-image">
          <a href="#" draggable="true">
            <img src="img/products/product2/1.png" alt className="img1" />
            <img src="img/products/product2/2.png" alt className="img2" />
          </a>
        </div>
        <div className="product-info">
          <a href="$" className="product-title" draggable="true">
            Ridley High Waist
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
            <strong className="new-price">$100.00</strong>
            <span className="old-price">$208.00</span>
          </div>
          <span className="product-discount">-33%</span>
          <div className="product-links">
            <button className="add-to-cart" data-id={2}>
              <i className="bi bi-basket-fill" />
            </button>
            <button>
              <i className="bi bi-heart-fill" />
            </button>
            <a href="#" className="product-link" data-id={2} draggable="true">
              <i className="bi bi-eye-fill" />
            </a>
            <a href="#" draggable="true">
              <i className="bi bi-share-fill" />
            </a>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProductItem;
