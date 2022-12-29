import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../context/ContextProvider";

const Register = () => {
  const { userRegisterCreate } = useContext(AuthProvider);

  const handleRegisterMethod = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    userRegisterCreate(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="m-7">
      <div className="md:max-w-[25%] mx-auto py-2 bg-white p-7 rounded-lg">
        <h3 className="py-4 font-bold text-xl text-center">Register now</h3>
        <form onSubmit={handleRegisterMethod}>
          <div>
            <input
              type="text"
              className="file-input w-full border-2 border-gray-300 mt-2 p-2"
              name="name"
              placeholder="Name"
            />
          </div>

          <div>
            <input
              type="email"
              className="file-input w-full border-2 border-gray-300 mt-2 p-2"
              name="email"
              placeholder="Email"
            />
          </div>

          <div>
            <input
              type="password"
              className="file-input w-full border-2 border-gray-300 mt-2 p-2 mb-7"
              name="password"
              placeholder="/*******"
            />
          </div>
          <Button type="submit" variant="contained" className="w-full">
            Register
          </Button>
        </form>

        <div className="my-7">
          <span>
            Already have an account?{" "}
            <Link className="text-blue-500" to="/login">
              login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
