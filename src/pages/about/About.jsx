import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then((data) => setAbouts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <div
          className="flex items-center py-4 "
          style={{ justifyContent: "space-between" }}
        >
          <h3 className="font-bold text-xl">Personal information</h3>
          <Link>
            <h3 className="font-bold text-xl">Edit</h3>
          </Link>
        </div>

        {abouts?.map((about) => (
          <div>
            <div>
              <div className="text-gray-700">
                <h4 className="mt-1 text-md">
                  <strong>Name:</strong> {about?.name}
                </h4>
                <p className="mt-1 text-md">
                  <strong>Email:</strong> {about?.email}
                </p>
                <p className="mt-1 text-md">
                  <strong>Mobile:</strong> {about?.mobile}
                </p>
                <p className="mt-1 text-md">
                  <strong>Website:</strong> {about?.website}
                </p>

                <p className="mt-1 text-md">
                  <strong>Gender - </strong> {about?.gender}
                </p>
                <p className="mt-1 text-md">
                  <strong>Relational status - </strong> {about?.relational}
                </p>
                <p className="mt-1 text-md">
                  <strong>Religion - </strong> {about?.religion}
                </p>
                <p className="mt-1 text-md">
                  <strong>Language - </strong> {about?.language}
                </p>
              </div>
            </div>

            {/* educational info */}
            <div className="mt-7">
              <h3 className="font-bold text-xl">Educational information</h3>
              {/* school name */}
              <div className="text-gray-700 mt-3">
                <h4 className="mt-1 text-md">
                  <strong>School name:</strong> {about?.school}
                </h4>
                <p className="mt-1 text-md">
                  <strong>Start date - </strong> {about?.schoolStartDate}
                </p>
                <p className="mt-1 text-md">
                  <strong>End date - </strong> {about?.schoolEndDate}
                </p>
                <p className="text-gray-500 font-normal text-md">
                  {about?.schoolDetails}
                </p>
              </div>

              {/* college life */}
              <div className="text-gray-700 mt-3">
                <h4 className="mt-1 text-md">
                  <strong>College/university</strong> {about?.college}
                </h4>
                <p className="mt-1 text-md">
                  <strong>Start date - </strong> {about?.collegeStartDate}
                </p>
                <p className="mt-1 text-md">
                  <strong>End date - </strong> {about?.collegeEndDate}
                </p>

                <p className="text-gray-500 font-normal text-md">
                  {about?.collegeDetails}
                </p>
              </div>
            </div>

            {/* additional information */}
            <div className="mt-7">
              <h3 className="font-bold text-xl">Work information</h3>
              <div className="text-gray-700">
                <h4 className="mt-1 text-md">
                  <strong>Work:</strong> {about?.work}
                </h4>

                <p className="text-gray-500 font-normal text-md">
                  {about?.workDetails}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
