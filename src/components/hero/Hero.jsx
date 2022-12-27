import React from "react";
const heroImages =
  "https://i.ibb.co/MCxCRX1/chat-rooms-online-pakistani-chat-rooms.png";

const Hero = () => {
  return (
    <>
      <div className="hero max-w-[90%] mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={heroImages} alt="hero" />
          <div>
            <h1 className="text-5xl font-bold">
              Share your story with your friends
            </h1>
            <p className="py-6">
              Chat with your share your emotion with him and enjoy your free
              time with your best friends{" "}
            </p>

            <button className="btn btn-primary">Create a post</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
