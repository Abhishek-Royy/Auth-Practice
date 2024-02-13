import React, { useEffect } from "react";
import Typed from "typed.js";
import { NavLink } from "react-router-dom";

import { MdOutlineTravelExplore } from "react-icons/md";
import { PiPackageFill } from "react-icons/pi";

const HomePage = () => {
  useEffect(() => {
    const typed = new Typed(".movement", {
      strings: [
        "Programming",
        "React JS",
        "CSS",
        "MongoDB",
        "Node JS",
        "JavaScript",
      ],
      typeSpeed: 90,
      backSpeed: 85,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <main className="w-full bg-gradient-to-l from-blue-950 to-zinc-800 h-full pt-28 pb-10 px-24 text-white flex">
        <div className="left w-2/4 flex items-center justify-center flex-col">
          <div className="w-full font-semibold">
            <span className="movement text-3xl w-full text-lime-300"></span>

            <h1 className="text-6xl">
              <span className="text-amber-300 font-bold">C☺deCrasher</span> is a
              platform to crash the code
            </h1>
          </div>
          <div className="w-full flex mt-8">
            <button className="w-36 py-3 border-none rounded-xl mr-8 bg-cyan-500 shadow-sm hover:bg-cyan-600 flex items-center justify-center gap-1">
              Explore
              <MdOutlineTravelExplore />
            </button>

            <NavLink to="/package">
              <button className="w-36 py-3 border-none rounded-xl bg-cyan-500 shadow-sm hover:bg-cyan-600 flex items-center justify-center gap-1">
                Package
                <PiPackageFill />
              </button>
            </NavLink>
          </div>
          <div className="mt-8">
            No matter which field of work you want to go into, it is of great
            importance to learn at least one programming language.
          </div>
        </div>
        <div className="right w-2/4 border-none border-lime-500 flex items-center justify-center">
          <img
            src="https://amoeboids.com/wp-content/uploads/2019/11/Extreme-Programming-What-Is-It-Exactly-Banner.png"
            alt="Extreme Programming"
            className="w-full"
          />
        </div>
      </main>

      <div className="bg-gradient-to-l from-blue-950 to-zinc-800 py-24 sm:py-30 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold leading-8 text-amber-300">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {/* Replace the image URLs with your actual image URLs */}
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
              alt="Transistor"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
              alt="Reform"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
              alt="Tuple"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
              alt="SavvyCal"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
              alt="Statamic"
              width="158"
              height="48"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
