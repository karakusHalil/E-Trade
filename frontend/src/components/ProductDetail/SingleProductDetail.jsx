import Breadcrumb from "./BreadCrumb/Breadcrumb";
import SingleTabs from "./SingleTabs/SingleTabs";
import SingleContent from "./SingleContent";
import "./SingleProductDetail.css";

const SingleProductDetail = () => {
  return (
    <>
      <section className="single-product">
        <div className="container">
          <div className="single-product-wrapper">
            <Breadcrumb />

            <SingleContent />

            <SingleTabs />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProductDetail;
