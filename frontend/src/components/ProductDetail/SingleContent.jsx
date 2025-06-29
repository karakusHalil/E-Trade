import ProductGallery from "./Gallery/ProductGallery";
import ProductInfo from "./Info/ProductInfo";
import PropTypes from "prop-types";
const SingleContent = ({ singleProduct }) => {
  return (
    <>
      <div className="single-content">
        <main className="site-main">
          <ProductGallery singleProduct={singleProduct} />
          <ProductInfo singleProduct={singleProduct} />
        </main>
      </div>
    </>
  );
};

export default SingleContent;

SingleContent.propTypes = {
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
