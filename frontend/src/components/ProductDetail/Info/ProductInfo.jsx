import { useEffect, useState } from "react";
import "./ProductInfo.css";
import PropTypes from "prop-types";

const ProductInfo = ({ singleProduct }) => {
  if (!singleProduct) return <div>Loading...</div>;
  const discountPrice =
    singleProduct.price - singleProduct.price * (singleProduct.discount / 100);
  return (
    <>
      <div className="product-info">
        <h1 className="product-title">{singleProduct.name}</h1>
        <div className="product-review">
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
          <span>2 reviews</span>
        </div>
        <div className="product-price">
          <s className="old-price">${singleProduct.price.toFixed(2)}</s>
          <strong className="new-price">${discountPrice.toFixed(2)}</strong>
        </div>
        <p className="product-description">{singleProduct.description}</p>
        <form className="variations-form">
          <div className="variations">
            <div className="colors">
              <div className="colors-label">
                <span>Color</span>
              </div>
              <div className="colors-wrapper">
                <div className="color-wrapper">
                  <label className="blue-color">
                    <input type="radio" name="product-color" />
                  </label>
                </div>
                <div className="color-wrapper">
                  <label className="red-color">
                    <input type="radio" name="product-color" />
                  </label>
                </div>
                <div className="color-wrapper active">
                  <label className="green-color">
                    <input type="radio" name="product-color" />
                  </label>
                </div>
                <div className="color-wrapper">
                  <label className="purple-color">
                    <input type="radio" name="product-color" />
                  </label>
                </div>
              </div>
            </div>
            <div className="values">
              <div className="values-label">
                <span>Size</span>
              </div>
              <div className="values-list">
                <span className="active">XS</span>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>
            </div>
            <div className="cart-button">
              <input type="number" defaultValue={1} min={1} id="quantity" />
              <button
                className="btn btn-lg btn-primary"
                id="add-to-cart"
                type="button"
              >
                Add to cart
              </button>
            </div>
            <div className="product-extra-buttons">
              <a href="#">
                <i className="bi bi-globe" />
                <span>Size Guide</span>
              </a>
              <a href="#">
                <i className="bi bi-heart" />
                <span>Add to Wislist</span>
              </a>
              <a href="#">
                <i className="bi bi-share" />
                <span>Share this Product</span>
              </a>
            </div>
          </div>
        </form>
        <div className="divider" />
        <div className="product-meta">
          <div className="product-sku">
            <span>SKU:</span>
            <strong>BE45VGRT</strong>
          </div>
          <div className="product-categories">
            <span>Categories:</span>
            <strong>Pants , Women</strong>
          </div>
          <div className="product-tags">
            <span>Tags:</span>
            <a href="#">black</a>,<a href="#">white</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;

ProductInfo.propTypes = {
  singleProduct: PropTypes.shape({
    _id: PropTypes.string, // MongoDB'nin otomatik oluşturduğu id
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    sizes: PropTypes.arrayOf(PropTypes.string),
    stockCode: PropTypes.string.isRequired,
    discount: PropTypes.number,
  }),
};
