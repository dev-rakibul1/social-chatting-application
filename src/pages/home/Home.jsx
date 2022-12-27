import React from "react";
import DownloadApp from "../../components/app/DownloadApp";
import Hero from "../../components/hero/Hero";
import HomeCover from "../../components/hoemcover/HomeCover";
import Post from "../../components/post/Post";

const Home = () => {
  return (
    <div>
      <Hero />
      <Post />
      <HomeCover />
      <DownloadApp />
    </div>
  );
};

export default Home;
