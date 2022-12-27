import React from "react";

const TopTitle = ({ children }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold bg-white p-4 rounded-lg my-7">
        {children}
      </h3>
    </div>
  );
};

export default TopTitle;
