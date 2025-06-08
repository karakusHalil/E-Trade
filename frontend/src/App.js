import Footer from "./components/Layout/footer/Footer";
import Header from "./components/Layout/header/Header";
import Policy from "./components/Layout/policy/Policy";
import Sliders from "./components/Sliders/Sliders";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Sliders />
      <Policy />
      <Footer />
    </div>
  );
}

export default App;
