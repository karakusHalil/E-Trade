import Footer from "./components/Layout/footer/Footer";
import Header from "./components/Layout/header/Header";
import Policy from "./components/Layout/policy/Policy";
import Sliders from "./components/Sliders/Sliders";
import "./App.css";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Campaigns from "./components/Campaigns/Campaigns";

function App() {
  return (
    <div className="App">
      <Header />
      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <Policy />
      <Footer />
    </div>
  );
}

export default App;
