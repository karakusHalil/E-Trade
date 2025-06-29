import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ProductGallery.css";

const ProductGallery = ({ singleProduct }) => {
  const [productImages, setProductImages] = useState(
    singleProduct?.images || []
  );
  const [activeImage, setActiveImage] = useState(
    singleProduct?.images[0] || ""
  );

  useEffect(() => {
    if (singleProduct?.images) {
      setProductImages(singleProduct.images);
      setActiveImage(singleProduct.images[0]);
    }
  }, [singleProduct]);

  const handleThumbnailClick = (image) => {
    setActiveImage(image);
  };

  return (
    <>
      <div className="product-gallery">
        <div className="single-image-wrapper">
          <img src={`/${activeImage}`} id="single-image" alt="" />
        </div>
        <div className="product-thumb">
          <div className="glide__track" data-glide-el="track">
            <ol className="gallery-thumbs glide__slides">
              {productImages.length > 0 &&
                productImages.map((image, index) => (
                  <li
                    key={index}
                    className={`glide__slide  ${
                      image === activeImage ? "glide__slide--active" : ""
                    }`}
                    style={{ width: 109, marginRight: 5 }}
                  >
                    <img
                      src={`/${image}`}
                      alt={`Product thumbnail ${index + 1}`}
                      className="img-fluid"
                      onClick={() => handleThumbnailClick(image)}
                    />
                  </li>
                ))}
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
