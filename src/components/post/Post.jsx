import React from "react";

const Post = () => {
  return (
    <div>
      <div className="post-wrapper mx-auto max-w-[90%]">
        <form action="" className="md:max-w-[50%] max-w-[90%] mx-auto">
          {/* message */}
          <div className="h-48 mt-4">
            <textarea
              className="textarea  border-2 border-gray-300 h-full w-full "
              placeholder="Your message..."
            ></textarea>
          </div>

          {/* images */}
          <div className=" mt-4">
            <input
              type="file"
              className="file-input w-full border-2 border-gray-300"
            />
          </div>

          <button type="submit" class="btn btn-primary mt-4 w-full">
            Button
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
