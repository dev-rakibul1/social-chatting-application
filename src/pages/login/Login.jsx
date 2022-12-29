import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();

    // const { signInUser } = useContext(AuthProvider);

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // signInUser(email, password)
    //   .then((result) => {
    //     const user = result.user;
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //   });
  };

  return (
    <div className="m-7">
      <div className="md:max-w-[25%] mx-auto py-2 bg-white p-7 rounded-lg">
        <h3 className="py-4 font-bold text-xl text-center">Login now</h3>
        <form onSubmit={handleLogin}>
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
            Login
          </Button>
        </form>

        <div className="my-7">
          <span>
            Register with new account?{" "}
            <Link className="text-blue-500" to="/register">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
