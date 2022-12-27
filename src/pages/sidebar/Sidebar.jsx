import { AddSharp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/user.json")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" bg-white mb-4 rounded-lg max-w-full h-screen overflow-y-scroll">
      <div className="sidebar-wrapper p-4">
        <div>
          <h4 className="text-lg font-semibold">Birthday</h4>
          <div className="flex items-top mt-3">
            <img src="/assets/gift.png" className="w-5 h-5 mr-2" alt="" />
            <span>
              <strong>Tom Crus</strong> others 5 people birthday today.
            </span>
          </div>
          <hr className="mt-7" />
          <div>
            {/* active users */}
            <h4 className="text-lg font-semibold mt-2 mb-3">Active friends</h4>

            {users?.map((user) => (
              <div
                className="flex items-center  cursor-pointer hover:bg-slate-300 p-2 rounded-md"
                key={user.id}
              >
                <div className="relative">
                  <img
                    src={user?.profilePicture}
                    className="w-10 h-10 rounded-full object-cover mr-2"
                    alt=""
                  />
                  <div className="online w-3 h-3 rounded-full bg-green-600 absolute top-0 right-[10px] border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="font-bold">{user?.username}</h4>
                </div>
              </div>
            ))}
          </div>

          <hr className="mt-7" />
          {/* group conversions */}
          <div>
            <h4 className="text-lg font-semibold mt-2 mb-3">
              Group conversions
            </h4>
            <div>
              <div className="flex items-center  cursor-pointer hover:bg-slate-300 p-2 rounded-md">
                <div className="relative">
                  <img
                    src="/assets/person/9.jpeg"
                    className="w-10 h-10 rounded-full object-cover mr-2"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="font-bold">English spoken practice</h4>
                </div>
              </div>
            </div>

            {/* new group create */}
            <div className="text-center mt-4 cursor-pointer">
              <h3>
                {" "}
                <AddSharp className="w-5 h-6 rounded-full p-1 text-xl border border-gray-500" />{" "}
                <span>Create new group</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
