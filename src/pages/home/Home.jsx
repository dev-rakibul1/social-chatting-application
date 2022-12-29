import React, { useContext, useState } from "react";
import DownloadApp from "../../components/app/DownloadApp";
import Hero from "../../components/hero/Hero";
import HomeCover from "../../components/hoemcover/HomeCover";
import PopularPost from "../../components/popularPost/PopularPost";
import Post from "../../components/post/Post";
import { AuthProvider } from "../../context/ContextProvider";

const Home = () => {
  const [topPost, setTopPost] = useState([]);
  const { name } = useContext(AuthProvider);

  fetch("https://project-01-server.vercel.app/top-posts")
    .then((res) => res.json())
    .then((data) => setTopPost(data))
    .catch((err) => console.log(err));

  return (
    <div>
      <h1>{name}</h1>
      <Hero />
      <Post />
      <div className="md:max-w-[60%] mx-auto py-2 bg-white p-7 rounded-lg my-7">
        <h3 className="text-xl font-bold mt-7">Most popular 3 post here</h3>
        {topPost?.map((post) => (
          <PopularPost key={post?._id} post={post} />
        ))}
      </div>
      <HomeCover />
      <DownloadApp />
    </div>
  );
};

export default Home;
