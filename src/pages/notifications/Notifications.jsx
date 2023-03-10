import React from "react";
import { Link } from "react-router-dom";
import TopTitle from "../shared/TopTitle";

const Notifications = () => {
  let x = [1, 0, 3, 4, 5, 4, 7, 8];
  return (
    <div>
      <div className="message-wrapper md:max-w-[60%] w-full mx-auto px-2 bg-white my-7 p-4">
        <div className=" border-gray-300">
          <TopTitle>Notifications</TopTitle>
          {x.map((meg, index) => (
            <Link to="/messageDetails">
              <div className="flex items-center border-b-2 py-4">
                <div>
                  <img
                    src="/assets/person/2.jpeg"
                    className="w-20 h-20 rounded-full object-cover mr-6"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold">John Doe</h4>
                  <p className="font-normal">
                    Today <strong>John Doe</strong> birthday{" "}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
