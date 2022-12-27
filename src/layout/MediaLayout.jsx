import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import TopTitle from "../pages/shared/TopTitle";
import Sidebar from "../pages/sidebar/Sidebar";

const MediaLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="md:max-w-[60%] mx-auto w-full md:px-0 px-2">
        <TopTitle> Recent post</TopTitle>
        <div className="flex  gap-5">
          <div className="max-w-[60%] ">
            <Outlet />
          </div>
          <div className="max-w-[40%] xs:hidden block">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaLayout;
