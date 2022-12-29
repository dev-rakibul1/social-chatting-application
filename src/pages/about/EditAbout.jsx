import { Button } from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router-dom";

const EditAbout = () => {
  const personalData = useLoaderData();
  const id = personalData[0]._id;

  // const [users, setUsers] = useState(personalData);
  // console.log(users[0]);

  console.log(
    "first oisdoqewiu oweujfo weij qoeru qwoeif qweurqeoi ruoqewowe oqweiru",
    personalData
  );

  const handleUserUpdateData = (event) => {
    // console.log(id);
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const mobile = form.mobile.value;
    const website = form.website.value;
    const relational = form.relational.value;
    const religion = form.religion.value;
    const language = form.language.value;
    const school = form.school.value;
    const schoolStartDate = form.schoolStartDate.value;
    const schoolEndDate = form.schoolEndDate.value;
    const schoolDetails = form.schoolDetails.value;
    const college = form.college.value;
    const collegeStartDate = form.collegeStartDate.value;
    const collegeEndDate = form.collegeEndDate.value;
    const collegeDetails = form.collegeDetails.value;
    const work = form.work.value;
    const workDetails = form.workDetails.value;

    const updateUserInfo = {
      name: name,
      email: email,
      mobile: mobile,
      website: website,
      relational: relational,
      religion: religion,
      language: language,
      school: school,
      schoolStartDate: schoolStartDate,
      schoolEndDate: schoolEndDate,
      schoolDetails: schoolDetails,
      college: college,
      collegeStartDate: collegeStartDate,
      collegeEndDate: collegeEndDate,
      collegeDetails: collegeDetails,
      work: work,
      workDetails: workDetails,
    };

    fetch(`https://project-01-server.vercel.app/${id}`, {
      method: "PUT",
      headers: {
        content: "application/json",
      },
      body: JSON.stringify(updateUserInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {personalData?.map((data) => (
        <div className="my-7 p-4 bg-white md:max-w-[60%] mx-auto rounded-lg">
          <form onSubmit={handleUserUpdateData}>
            <h3 className="font-bold text-xl">Personal information</h3>
            {/* name */}
            <div className="py-2">
              <label htmlFor="name" className="mr-4">
                Name:
              </label>
              <input
                id="name"
                type="text"
                placeholder="Type here"
                className="input input-ghost w-full max-w-xs"
                defaultValue={data.name}
                name="name"
              />
            </div>

            {/* email */}
            <div className="py-2">
              <label htmlFor="email" className="mr-4">
                Email:
              </label>
              <input
                id="email"
                type="text"
                placeholder="Type here"
                className="input input-ghost w-full max-w-xs"
                defaultValue={data?.email}
                name="email"
              />
            </div>

            {/* mobile */}
            <div className="py-2">
              <label htmlFor="mobile" className="mr-4">
                Mobile:
              </label>
              <input
                id="mobile"
                type="text"
                placeholder="Type here"
                className="input input-ghost w-full max-w-xs"
                defaultValue={data?.mobile}
                name="mobile"
              />
            </div>

            {/* website */}
            <div className="py-2">
              <label htmlFor="website" className="mr-4">
                Website:
              </label>
              <input
                id="website"
                type="text"
                placeholder="Type here"
                className="input input-ghost w-full max-w-xs"
                defaultValue={data?.website}
                name="website"
              />
            </div>

            {/* gender */}
            <div className="py-2">
              <label htmlFor="gender" className="mr-4">
                Gender:
              </label>
              <input
                id="gender"
                type="text"
                placeholder="Gender"
                className="input input-ghost w-full max-w-xs"
                defaultValue={data?.gender}
                name="gender"
              />
            </div>

            {/* Relational status */}
            <div className="py-2">
              <label htmlFor="relational" className="mr-4">
                Relational status:
              </label>
              <input
                id="relational"
                type="text"
                placeholder="Type here"
                className="input input-ghost w-full max-w-xs"
                defaultValue={data?.relational}
                name="relational"
              />
            </div>

            {/* Religion  */}
            <div className="py-2">
              <label htmlFor="religion " className="mr-4">
                Religion :
              </label>
              <input
                id="religion"
                type="text"
                placeholder="Type here"
                className="input input-ghost w-full max-w-xs"
                defaultValue={data?.religion}
                name="religion"
              />
            </div>

            {/* Language */}
            <div className="py-2">
              <label htmlFor="language" className="mr-4">
                Language:
              </label>
              <input
                id="language"
                type="text"
                placeholder="Type here"
                className="input input-ghost w-full max-w-xs"
                defaultValue={data?.language}
                name="language"
              />
            </div>

            {/* educational information */}
            <div className="mt-16">
              <h3 className="font-bold text-xl">Educational information</h3>

              {/* school name */}
              <div className="py-2">
                <label htmlFor="school" className="mr-4">
                  School name:
                </label>
                <input
                  id="school"
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost w-full max-w-xs"
                  defaultValue={data?.school}
                  name="school"
                />
              </div>

              {/* school start date */}
              <div className="py-2">
                <label htmlFor="startDate" className="mr-4">
                  Start date:
                </label>
                <input
                  id="startDate"
                  type="text"
                  placeholder="Start date"
                  className="input input-ghost w-full max-w-xs"
                  defaultValue={data?.schoolStartDate}
                  name="schoolStartDate"
                />
              </div>

              {/* school end date */}
              <div className="py-2">
                <label htmlFor="endDate" className="mr-4">
                  End date:
                </label>
                <input
                  id="endDate"
                  type="text"
                  placeholder="End date"
                  className="input input-ghost w-full max-w-xs"
                  defaultValue={data?.schoolEndDate}
                  name="schoolEndDate"
                />
              </div>

              {/* school descriptions */}
              <div className="py-2">
                <label htmlFor="descriptions" className="mr-4">
                  descriptions:
                </label>
                <textarea
                  className="textarea textarea-ghost w-full mt-2"
                  placeholder="Bio"
                  defaultValue={data?.schoolDetails}
                  name="schoolDetails"
                ></textarea>
              </div>
            </div>

            {/* educational college information */}
            <div className="mt-7">
              {/* College/University name */}
              <div className="py-2">
                <label htmlFor="college" className="mr-4">
                  College/University name:
                </label>
                <input
                  id="college"
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost w-full max-w-xs"
                  defaultValue={data?.college}
                  name="college"
                />
              </div>

              {/* college start date */}
              <div className="py-2">
                <label htmlFor="collegeStartDate" className="mr-4">
                  Start date:
                </label>
                <input
                  id="collegeStartDate"
                  type="text"
                  placeholder="Start date"
                  className="input input-ghost w-full max-w-xs"
                  defaultValue={data?.collegeStartDate}
                  name="collegeStartDate"
                />
              </div>

              {/* school end date */}
              <div className="py-2">
                <label htmlFor="collegeEndDate" className="mr-4">
                  End date:
                </label>
                <input
                  id="collegeEndDate"
                  type="text"
                  placeholder="End date"
                  className="input input-ghost w-full max-w-xs"
                  defaultValue={data?.collegeEndDate}
                  name="collegeEndDate"
                />
              </div>

              {/* college descriptions */}
              <div className="py-2">
                <label htmlFor="collegeDetails" className="mr-4">
                  descriptions:
                </label>
                <textarea
                  className="textarea textarea-ghost w-full mt-2"
                  placeholder="Bio"
                  defaultValue={data?.collegeDetails}
                  name="collegeDetails"
                ></textarea>
              </div>
            </div>

            {/* educational college information */}
            <div className="mt-16">
              <h3 className="font-bold text-xl">Work information</h3>
              {/* College/University name */}
              <div className="py-2">
                <label htmlFor="college" className="mr-4">
                  Work:
                </label>
                <input
                  id="college"
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost w-full max-w-xs"
                  defaultValue={data?.work}
                  name="work"
                />
              </div>

              <div className="py-2">
                <label htmlFor="college" className="mr-4">
                  Work details:
                </label>

                <textarea
                  className="textarea textarea-ghost w-full mt-2"
                  placeholder="Bio"
                  defaultValue={data?.workDetails}
                  name="workDetails"
                ></textarea>
              </div>
            </div>
            <Button variant="contained" type="submit" className="w-full mt-7">
              Data update
            </Button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default EditAbout;
