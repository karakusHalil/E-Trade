import Footer from "./components/Layout/footer/Footer";
import Header from "./components/Layout/header/Header";
import Policy from "./components/Layout/policy/Policy";
import Sliders from "./components/Sliders/Sliders";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Campaigns from "./components/Campaigns/Campaigns";
import ProductSingle from "./components/Products/ProductSingle.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Brands from "./components/Brands/Brands.jsx";
import CampaignSingle from "./components/CampaignSingle/CampaignSingle.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <ProductSingle />
      <Blogs />
      <Brands />
      <CampaignSingle />
      <Policy />
      <Footer />
    </div>
  );
}

export default App;
