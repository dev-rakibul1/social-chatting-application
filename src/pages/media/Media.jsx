import { Comment, MoreVert, ThumbUp } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Media.css";

const placeholderPost = "https://i.ibb.co/tL2W75X/ezgif-com-gif-maker-5.jpg";

const Media = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <div className="media h-screen overflow-y-scroll">
        <div className="media-wrapper px-2 border ">
          {data?.map((post) => (
            <div className="mb-4 p-4 rounded-lg bg-white">
              <Box
                sx={{
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="media-top flex content-between w-full"
              >
                <div className="media-top-left flex items-center">
                  <img
                    src="../../images/placeholder-person.png"
                    className="w-16 h-16"
                    alt=""
                  />
                  <div className="ml-5">
                    <span className="text-xl font-semibold">John Doe</span>
                    <p>{post?.date}</p>
                  </div>
                </div>
                <div className="media-top-right cursor-pointer">
                  <MoreVert />
                </div>
              </Box>
              <div className="media-bottom">
                <div className="media-bottom-top">
                  <p className="my-2">{post?.desc}</p>
                  <img
                    src={post?.photo ? post.photo : placeholderPost}
                    alt=""
                    className="w-full rounded-lg my-4"
                  />
                </div>
                <hr className="mt-10" />
                <div
                  className="media-bottom-bottom flex content-between py-7"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="like cursor-pointer">
                    <ThumbUp /> Like <span>{post?.like}</span>
                  </div>
                  <div className="comment cursor-pointer">
                    <Comment /> Comment <span>{post?.comment}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Media;
