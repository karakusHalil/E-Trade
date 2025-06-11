import Footer from "../Layout/footer/Footer";
import Header from "../Layout/header/Header";
import Policy from "../Layout/policy/Policy";
import Dialog from "../Modals/Dialog/Dialog";
import Search from "../Modals/Search/Search";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Search />
      <Dialog />
      {children}
      <Policy />
      <Footer />
    </>
  );
};

export default MainLayout;
