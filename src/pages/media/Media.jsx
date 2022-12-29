import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./Media.css";
import MediaDetails from "./MediaDetails";

const placeholderPost = "https://i.ibb.co/tL2W75X/ezgif-com-gif-maker-5.jpg";

const Media = () => {
  const data = useLoaderData();
  console.log(data);

  const [liked, setLiked] = useState(data.like);

  return (
    <>
      <div className="media h-screen overflow-y-scroll">
        <div className="media-wrapper px-2 border ">
          {data?.map((post) => (
            <MediaDetails key={post._id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Media;
