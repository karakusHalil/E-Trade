import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ProductGallery.css";

const ProductGallery = ({ singleProduct }) => {
  const [productImages, setProductImages] = useState({
    images: [],
  });

  useEffect(() => {
    if (singleProduct?.images)
      setProductImages({images :singleProduct.images});
  }, [singleProduct]);

  return (
    <>
      <div className="product-gallery">
        <div className="single-image-wrapper">
          <img src={`/${productImages.images[0]}`} id="single-image" alt="" />
        </div>
        <div className="product-thumb">
          <div className="glide__track" data-glide-el="track">
            <ol className="gallery-thumbs glide__slides">
              <li
                className="glide__slide glide__slide--active"
                style={{ width: 109, marginRight: 5 }}
              >
                <img
                  src={`/${productImages.images[0]}`}
                  alt=""
                  className="img-fluid active"
                />
              </li>
              <li
                className="glide__slide"
                style={{ width: 109, marginLeft: 5, marginRight: 5 }}
              >
                <img
                  src={`/${productImages.images[1]}`}
                  alt=""
                  className="img-fluid"
                />
              </li>
              <li
                className="glide__slide"
                style={{ width: 109, marginLeft: 5 }}
              >
                <img
                  src={`/${productImages.images[2]}`}
                  alt=""
                  className="img-fluid"
                />
              </li>
            </ol>
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
    </>
  );
};

export default ProductGallery;

ProductGallery.propTypes = {
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
