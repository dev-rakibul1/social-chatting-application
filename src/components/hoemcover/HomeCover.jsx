import React from "react";

const HomeCover = () => {
  return (
    <div className="w-full px-2 mx-auto my-16">
      <div
        className="hero py-48 min-h-screen  bg-fixed w-full h-full"
        style={{
          backgroundImage: `url("https://i.ibb.co/7r9sPXf/laurent-cassagne-5w-Wg-GR2a-Qpg-unsplash.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-100 bg-black"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-semibold">
              Hello Friends be enjoy your favorite people
            </h1>
            <p>
              friendship, a state of enduring affection, esteem, intimacy, and
              trust between two people. In all cultures, friendships are
              important relationships throughout a person's life span.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCover;
