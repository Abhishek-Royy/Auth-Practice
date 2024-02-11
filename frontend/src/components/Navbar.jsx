import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-20 bg-slate-900 text-white flex px-20 items-center justify-between">
        <img
          src="https://static.vecteezy.com/system/resources/previews/013/441/088/original/code-symbol-illustration-png.png"
          className="w-16"
          alt=""
        />

        <ul className="flex gap-20 text-lg list-none">
          <li className="hover:text-amber-300">
            <NavLink to="/"> Home</NavLink>
          </li>
          <li className="hover:text-amber-300">
            <NavLink to="/about"> About</NavLink>
          </li>
          <li className="hover:text-amber-300">
            <NavLink to="/blog"> Blogs</NavLink>
          </li>
          <li className="hover:text-amber-300">
            <NavLink to="/register"> SignUp</NavLink>
          </li>
          <li className="hover:text-amber-300">
            <NavLink to="/login"> Login</NavLink>
          </li>
          <li className="hover:text-amber-300">
            <NavLink to="/logout"> Logout</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
