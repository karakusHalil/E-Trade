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
import CreateCategory from "./pages/Admin/Category/CreateCategory";
import Dashboard from "./pages/Admin/Dashboard";
import CategoryList from "./pages/Admin/Category/CategoryList";
import UpdateCategory from "./pages/Admin/Category/UpdateCategory";
import ProductList from "./pages/Admin/Product/ProductList";
import CreateProduct from "./pages/Admin/Product/CreateProduct";
import UpdateProduct from "./pages/Admin/Product/UpdateProduct";

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
        <Route path="/admin/*">
          <Route index element={<Dashboard />} />
          <Route index element={<Dashboard />} />
          <Route path="categories/create" element={<CreateCategory />} />
          <Route path="categories/list" element={<CategoryList />} />
          <Route path="categories/update" element={<UpdateCategory />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/create" element={<CreateProduct />} />
          <Route path="products/update" element={<UpdateProduct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
