import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Services from "../../pages/services/Services";
import Contact from "../../pages/contact/Contact";
import SignUp from "../../pages/signup/SignUp";
import Error from "../../pages/error/Error";
import Layout from "../Layout/Layout";

const Routing = () => {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
};

export default Routing;
