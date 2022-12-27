import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";
import Navbar from "../pages/shared/Navbar";

const ProfileLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ProfileLayout;
