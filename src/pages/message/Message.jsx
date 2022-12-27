import React from "react";
import { Link } from "react-router-dom";
import TopTitle from "../shared/TopTitle";

const Message = () => {
  let x = [1, 0, 3, 4, 5, 4, 7, 8];
  return (
    <div>
      <div className="message-wrapper md:max-w-[60%] w-full mx-auto px-2 bg-white my-7 p-4">
        <div className=" border-gray-300">
          <TopTitle>Friends message</TopTitle>
          {x.map(() => (
            <Link to="/messageDetails">
              <div className="flex items-center border-b-2 py-4">
                <div>
                  <img
                    src="/assets/person/1.jpeg"
                    className="w-20 h-20 rounded-full object-cover mr-6"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Karina</h4>
                  <p className="font-normal">
                    Hi dear, My I talk to you let's a several minutes about our
                    application how can we develop our social application.{" "}
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

export default Message;
