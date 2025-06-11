import Sliders from "../components/Sliders/Sliders";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Campaigns from "../components/Campaigns/Campaigns";
import ProductSingle from "../components/Products/ProductSingle.jsx";
import Blogs from "../components/Blogs/Blogs.jsx";
import Brands from "../components/Brands/Brands.jsx";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle.jsx";

const Home = () => {
  return (
    <>
      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <ProductSingle />
      <Blogs />
      <Brands />
      <CampaignSingle />
    </>
  );
};

export default Home;
