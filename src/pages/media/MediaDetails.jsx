import { Comment, MoreVert } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useState } from "react";
import "./Media.css";

const placeholderPost = "https://i.ibb.co/tL2W75X/ezgif-com-gif-maker-5.jpg";

const MediaDetails = ({ post }) => {
  const { like, date, desc, photo, comment } = post;

  const [liked, setLiked] = useState(like);
  const [isLiked, setIsLiked] = useState(false);
  const [thumbLikeColor, SetThumbLikeColor] = useState(false);

  const likeHandle = () => {
    setLiked(isLiked ? liked - 1 : liked + 1);
    setIsLiked(!isLiked);
    SetThumbLikeColor(!thumbLikeColor);
  };

  return (
    <>
      <div className="mb-4 p-4 rounded-lg bg-white" key={post._id}>
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
              <p>{date}</p>
            </div>
          </div>
          <div className="media-top-right cursor-pointer">
            <MoreVert />
          </div>
        </Box>
        <div className="media-bottom">
          <div className="media-bottom-top">
            <p className="my-2">{desc}</p>
            <img src={photo} alt="" className="w-full rounded-lg my-4" />
          </div>
          <hr className="mt-10" />
          <div
            className="media-bottom-bottom flex content-between py-7"
            style={{ justifyContent: "space-between" }}
          >
            <div className="like cursor-pointer flex items-center">
              <div className="flex items-center  mr-4">
                <img
                  className="like-icon w-7 h-7 mr-1"
                  src="/assets/like.png"
                  alt="like"
                  onClick={likeHandle}
                />
                <img
                  className="like-icon  w-7 h-7"
                  src="/assets/heart.png"
                  alt="heart"
                  onClick={likeHandle}
                />
              </div>
              <span>{liked} Like</span>
            </div>
            <div className="comment cursor-pointer">
              <Comment /> Comment <span>{comment}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaDetails;
