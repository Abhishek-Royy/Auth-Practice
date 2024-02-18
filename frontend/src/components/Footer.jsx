import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-white shadow dark:bg-gray-900 w-full">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/013/441/088/original/code-symbol-illustration-png.png"
                className="h-14"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                C☺deCrasher
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <NavLink
                  to="/navAbout"
                  className="hover:underline me-4 md:me-6"
                >
                  {" "}
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/navAbout"
                  className="hover:underline me-4 md:me-6"
                >
                  {" "}
                  Privacy Policy{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/navAbout"
                  className="hover:underline me-4 md:me-6"
                >
                  {" "}
                  Licensing
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:underline me-4 md:me-6">
                  {" "}
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              C☺deCrasher™
            </a>
            . All Rights Reserved • Developed-{" "}
            <a
              href="https://www.linkedin.com/in/abhishek-roy-4a5244239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              Abhishek Roy
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
