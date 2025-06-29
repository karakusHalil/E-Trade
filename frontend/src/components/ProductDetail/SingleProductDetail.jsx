import Breadcrumb from "./BreadCrumb/Breadcrumb";
import SingleTabs from "./SingleTabs/SingleTabs";
import SingleContent from "./SingleContent";
import CampaignSingle from "../CampaignSingle/CampaignSingle";
import "./SingleProductDetail.css";
import PropTypes from "prop-types";

const SingleProductDetail = ({ singleProduct }) => {
  return (
    <>
      <section className="single-product">
        <div className="container">
          <div className="single-product-wrapper">
            <Breadcrumb />

            <SingleContent singleProduct={singleProduct}/>

            <SingleTabs />
          </div>
        </div>
        <CampaignSingle />
      </section>
    </>
  );
};

export default SingleProductDetail;

SingleProductDetail.propTypes = {
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
