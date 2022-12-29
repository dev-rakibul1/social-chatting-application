import React from "react";
import ProfileTabs from "../../components/profileTabs/ProfileTabs";
import "./Profile.css";
const coverPhoto = "../../images/cover.jpg";
const placeholderProfile = "../../images/placeholder-person.png";

const Profile = () => {
  return (
    <>
      <div className=" mx-auto max-w-[60%] bg-white p-4">
        <div className="profile-wrapper">
          <div className="profile-top relative">
            <img
              src={coverPhoto}
              alt="cover"
              className="profile-cover-photo max-w-full w-screen object-cover h-72 rounded-lg"
            />
            <div className="profile   flex items-end">
              <img
                src={placeholderProfile}
                alt="profile"
                className="profile-picture w-40 h-40 object-cover	 rounded-full border-3 border-white"
              />

              <div className="ml-5">
                <h2 className="text-4xl font-bold">John Doe</h2>
                <span>1.9K Friends</span>
              </div>
            </div>
          </div>
          <hr className="mt-28 border" />
          <div className="profile-bottom">
            <ProfileTabs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
