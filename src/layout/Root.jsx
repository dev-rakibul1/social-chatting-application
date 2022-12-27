import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";
import Navbar from "../pages/shared/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
