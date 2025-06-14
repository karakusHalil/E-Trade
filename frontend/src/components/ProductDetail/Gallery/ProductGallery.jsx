import "./ProductGallery.css";
const ProductGallery = () => {
  return (
    <>
      <div className="product-gallery">
        <div className="single-image-wrapper">
          <img src="img/products/product2/1.png" id="single-image" alt />
        </div>
        <div className="product-thumb">
          <div className="glide__track" data-glide-el="track">
            <ol className="gallery-thumbs glide__slides">
              <li
                className="glide__slide glide__slide--active"
                style={{ width: 109, marginRight: 5 }}
              >
                <img
                  src="img/products/product2/1.png"
                  alt
                  className="img-fluid active"
                />
              </li>
              <li
                className="glide__slide"
                style={{ width: 109, marginLeft: 5, marginRight: 5 }}
              >
                <img
                  src="img/products/product2/2.png"
                  alt
                  className="img-fluid"
                />
              </li>
              <li
                className="glide__slide"
                style={{ width: 109, marginLeft: 5 }}
              >
                <img
                  src="img/products/product2/3.png"
                  alt
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
