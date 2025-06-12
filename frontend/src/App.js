import { Route, Routes } from "react-router-dom";
import BlogList from "./pages/BlogList";
import ContactPage from "./pages/ContactPage";
import Account from "./pages/Account";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";
import SingleBlog from "./pages/SingleBlog";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/auth" element={<Account />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </div>
  );
}

export default App;
