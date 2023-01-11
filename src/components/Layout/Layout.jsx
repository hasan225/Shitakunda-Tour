import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
    <Navbar/>
      <main className="main">
        <div className="container-main">{children}</div>
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
