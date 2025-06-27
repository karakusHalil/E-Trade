import React from "react";
import PropTypes from "prop-types";
import "./ProductItem.css";
const ProductItem = ({ product }) => {
  return (
    <>
      <li
        className="product-item glide__slide"
        style={{ width: 265, marginLeft: 10, marginRight: 10 }}
      >
        <div className="product-image">
          <a href="#" draggable="true">
            <img src={product.images[0]} alt={product.name} className="img1" />
            <img src={product.images[1]} alt={product.name} className="img2" />
          </a>
        </div>
        <div className="product-info">
          <a href="$" className="product-title" draggable="true">
            {product.name}
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
            <strong className="new-price">${product.price}</strong>
            <span className="old-price">$208.00</span>
          </div>
          <span className="product-discount">-{product.discount}%</span>
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

ProductItem.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number,
  }).isRequired,
};
