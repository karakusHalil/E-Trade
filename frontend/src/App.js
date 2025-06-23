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
import CreateCategory from "./pages/Admin/Category/CreateCategory";
import Dashboard from "./pages/Admin/Dashboard";
import CategoryList from "./pages/Admin/Category/CategoryList";
import UpdateCategory from "./pages/Admin/Category/UpdateCategory";
import ProductList from "./pages/Admin/Product/ProductList";
import CreateProduct from "./pages/Admin/Product/CreateProduct";
import UpdateProduct from "./pages/Admin/Product/UpdateProduct";
import CreateBlog from "./pages/Admin/Blogs/CreateBlog";
import UpdateBlog from "./pages/Admin/Blogs/UpdateBlog";
import BlogAdminList from "./pages/Admin/Blogs/BlogAdminList";
import "./App.css";
import UserList from "./pages/Admin/User/UserList";

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
          <Route path="categories/list" element={<CategoryList />} />
          <Route path="categories/create" element={<CreateCategory />} />
          <Route path="categories/update" element={<UpdateCategory />} />
          <Route path="products/list" element={<ProductList />} />
          <Route path="products/create" element={<CreateProduct />} />
          <Route path="products/update" element={<UpdateProduct />} />
          <Route path="blogs" element={<BlogAdminList />} />
          <Route path="blogs/create" element={<CreateBlog />} />
          <Route path="blogs/update" element={<UpdateBlog />} />
          <Route path="users/list" element={<UserList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
