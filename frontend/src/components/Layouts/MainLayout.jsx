import { useState } from "react";
import PropTypes from "prop-types";
import Footer from "../Layout/footer/Footer";
import Header from "../Layout/header/Header";
import Policy from "../Layout/policy/Policy";
import Dialog from "../Modals/Dialog/Dialog";
import Search from "../Modals/Search/Search";

const MainLayout = ({ children }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isDialogVisible, setIsDialogVisible] = useState(true);
  return (
    <>
      <Header setIsSearchVisible={setIsSearchVisible} />
      <Search
        isSearchVisible={isSearchVisible}
        setIsSearchVisible={setIsSearchVisible}
      />
      <Dialog
        isDialogVisible={isDialogVisible}
        setIsDialogVisible={setIsDialogVisible}
      />
      {children}
      <Policy />
      <Footer />
    </>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node,
};
