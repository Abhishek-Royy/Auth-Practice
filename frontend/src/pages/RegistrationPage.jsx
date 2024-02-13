import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [allUser, setallUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handelInput = (e) => {
    // console.log(e.target.value);
    let nameProperty = e.target.name;
    let allValue = e.target.value;

    setallUser({
      ...allUser,
      [nameProperty]: allValue,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(allUser);

    try {
      const response = await fetch(`http://localhost:5000/api/v1/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allUser),
      });

      if (response.statusText == "OK") {
        setallUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
      console.log(response);
    } catch (error) {
      console.log("error occur", error);
    }
  };

  return (
    <>
      <div className="main max-w-full px-20  bg-gradient-to-b from-blue-950 to-zinc-800 h-full text-white flex ">
        <div className="left w-2/4 flex items-center justify-center">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/male-programmer-5743382-4846824.png"
            alt="Programmer Illustration"
            width="550px"
          />
        </div>

        <div className="right w-2/4">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto"
                src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
                alt="Your Company"
                width="200px"
              />
              <h2 className="mt-0 text-center text-3xl font-bold leading-9 tracking-tight text-white">
                Register in to your Account
              </h2>
            </div>

            <div className="mt-3.5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-2" onSubmit={handelSubmit}>
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-2 text-white-900"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="username"
                      autoComplete="username"
                      required
                      value={allUser.username}
                      onChange={handelInput}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-2 text-white-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={allUser.email}
                      onChange={handelInput}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-2 text-white-900"
                  >
                    Phone No.
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      autoComplete="off"
                      required
                      value={allUser.phone}
                      onChange={handelInput}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-white-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={allUser.password}
                      onChange={handelInput}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-7"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-5 text-center text-sm text-gray-500">
                Are you a member?
                <NavLink
                  to="/login"
                  className="font-semibold leading-6 text-amber-300 hover:text-amber-500"
                >
                  Allready have an account
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
