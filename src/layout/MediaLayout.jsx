import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Sidebar from "../pages/sidebar/Sidebar";

const MediaLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[60%] mx-auto">
        <h3 className="text-2xl font-bold bg-white p-4 rounded-lg my-7">
          Recent post
        </h3>
        <div className="flex  gap-5">
          <div className="max-w-[60%]">
            <Outlet />
          </div>
          <div className="max-w-[40%]">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaLayout;
