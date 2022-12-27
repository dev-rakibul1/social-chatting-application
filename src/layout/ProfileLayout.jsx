import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const ProfileLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
