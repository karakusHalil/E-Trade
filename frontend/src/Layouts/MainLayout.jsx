import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Footer from "../components/Layout/footer/Footer";
import Header from "../components/Layout/header/Header";
import Policy from "../components/Layout/policy/Policy";
import Dialog from "../components/Modals/Dialog/Dialog";
import Search from "../components/Modals/Search/Search";

const MainLayout = ({ children }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  useEffect(() => {
    const isClosed = sessionStorage.getItem("dialog-closed");
    if (!isClosed) {
      const timer = setTimeout(() => {
        setIsDialogVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosed = () => {
    setIsDialogVisible(false);
    sessionStorage.setItem("dialog-closed", "true");
  };

  return (
    <>
      <div className="main-layout">
        <Header setIsSearchVisible={setIsSearchVisible} />
        <Search
          isSearchVisible={isSearchVisible}
          setIsSearchVisible={setIsSearchVisible}
        />
        <Dialog isDialogVisible={isDialogVisible} handleClosed={handleClosed} />
        {children}
        <Policy />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node,
};
