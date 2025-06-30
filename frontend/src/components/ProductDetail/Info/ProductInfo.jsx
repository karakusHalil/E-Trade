import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../../contexts/CartProvider";
import "./ProductInfo.css";

const ProductInfo = ({ singleProduct }) => {
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    setProduct(singleProduct);
  }, [singleProduct]);

  if (!product) return null;
  const discountPrice =
    product.price - product.price * (product.discount / 100);
  return (
    <>
      <div className="product-info">
        <h1 className="product-title">{product.name}</h1>
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
          <s className="old-price">${product.price.toFixed(2)}</s>
          <strong className="new-price">${discountPrice.toFixed(2)}</strong>
        </div>
        <p className="product-description">{product.description}</p>
        <form className="variations-form">
          <div className="variations">
            <div className="colors">
              <div className="colors-label">
                <span>Color</span>
              </div>
              <div className="colors-wrapper">
                {product?.colors.map((color, index) => {
                  return (
                    <div className="color-wrapper" key={index}>
                      <label className={`${color}-color`}>
                        <input type="radio" name="product-color" />
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="values">
              <div className="values-label">
                <span>Size</span>
              </div>
              <div className="values-list">
                {product?.sizes.map((size, index) => {
                  return (
                    <span className="" key={index}>
                      {size}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="cart-button">
              <input
                type="number"
                defaultValue={1}
                min={1}
                max={10}
                id="quantity"
                style={{ cursor: "default", userSelect: "none" }}
                onKeyDown={(e) => e.preventDefault()}
              />
              <button
                className="btn btn-lg btn-primary"
                id="add-to-cart"
                type="button"
                onClick={() => addToCart(product)}
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
            <strong>{product?.stockCode}</strong>
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
