import React, { useState } from "react";
import Spinner from "../../pages/shared/Spinner";

const Post = () => {
  const [loading, setLoading] = useState(false);

  const handleUserPost = (event) => {
    event.preventDefault();

    setLoading(true);

    const form = event.target;
    const message = form.message.value;
    // const image = form.image.files[0].name;
    const image = form.image.files[0];
    console.log(message, image);
    console.log("first images", image);

    // user images
    const imagesHostKey = process.env.REACT_APP_IMAGES_HOST_KEY;
    const url = `https://api.imgbb.com/1/upload?key=${imagesHostKey}`;

    const imagesFormData = new FormData();
    // const images = image;
    console.log(image);
    imagesFormData.append("image", image);

    fetch(url, {
      method: "POST",
      body: imagesFormData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        setLoading(false);

        if (imgData) {
          const serverImages = imgData;
          console.log(serverImages);

          // date
          const date = new Date();
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          const time = date.toLocaleTimeString();
          const currentDate = `${day}-${month}-${year} Time ${time}`;

          const userPostInfo = {
            desc: message,
            photo: imgData?.data?.url,
            like: 0,
            comment: 0,
            date: currentDate,
          };

          // POST request
          fetch("https://project-01-server.vercel.app/posts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userPostInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              setLoading(false);
              if (data.success) {
                alert(data.message);
              } else {
                alert(data.error);
              }
            })
            .catch((error) => {
              console.log(error);
              setLoading(false);
            });
        } else {
          alert("not success");
        }
      })
      .catch((error) => console.log(error));

    form.reset();
  };

  return (
    <div>
      <div className="post-wrapper mx-auto max-w-[90%]">
        <form
          action=""
          className="md:max-w-[50%] max-w-[90%] mx-auto"
          onSubmit={handleUserPost}
        >
          {/* message */}
          <div className="h-48 mt-4">
            <textarea
              className="textarea  border-2 border-gray-300 h-full w-full "
              placeholder="Your message..."
              name="message"
              required
            ></textarea>
          </div>

          {/* images */}
          <div className=" mt-4">
            <input
              type="file"
              className="file-input w-full border-2 border-gray-300"
              name="image"
              required
            />
          </div>

          {loading ? (
            <Spinner>Loading...</Spinner>
          ) : (
            <button type="submit" class="btn btn-primary mt-4 w-full">
              Post now
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Post;
