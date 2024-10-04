import React, { Children } from "react";
import Header from "../Home Pages/Header";
import Footer from "../Home Pages/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
