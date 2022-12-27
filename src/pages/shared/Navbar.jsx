import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/media">Media</Link>
      </li>
      <li>
        <Link to="/message">
          <div className="relative">message</div>
          <span className="absolute top-[-2px] right-[5px] text-white bg-red-600 w-5 h-5 text-center rounded-full">
            2
          </span>
        </Link>
      </li>
      <li>
        <Link to="/notifications">
          <div className="relative">Notifications</div>
          <span className="absolute top-[-2px] right-[5px] text-white bg-red-600 w-5 h-5 text-center rounded-full">
            1
          </span>
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div
        className="bg-green-900"
        style={{ position: "sticky", top: "0", zIndex: 1090 }}
      >
        {/* second nav */}
        <div className="navbar max-w-[80%] mx-auto text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
              >
                {navItems}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              My Chat
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end text-black">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/">Settings</Link>
                </li>
                <li>
                  <Link to="/">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
