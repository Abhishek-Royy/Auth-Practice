// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useAuth } from "../auth/auth";

// const Navbar = () => {
//   const { isLoggedIn } = useAuth();
//   return (
//     <>
//       <nav className="w-full h-20 bg-slate-900 text-white flex px-20 items-center justify-between">
//         <img
//           src="https://static.vecteezy.com/system/resources/previews/013/441/088/original/code-symbol-illustration-png.png"
//           className="w-16"
//           alt=""
//         />

//         <ul className="flex gap-20 text-lg list-none">
//           <li className="hover:text-amber-300">
//             <NavLink to="/"> Home</NavLink>
//           </li>
//           <li className="hover:text-amber-300">
//             <NavLink to="/about"> About</NavLink>
//           </li>
//           <li className="hover:text-amber-300">
//             <NavLink to="/blog"> Blogs</NavLink>
//           </li>
//           <li className="hover:text-amber-300">
//             <NavLink to="/register"> SignUp</NavLink>
//           </li>
//           <li className="hover:text-amber-300">
//             <NavLink to="/login"> Login</NavLink>
//           </li>
//           {isLoggedIn ?
//           <li className="hover:text-amber-300">
//             <NavLink to="/logout"> Logout</NavLink>
//           </li>
//           }
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/auth";

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <nav className="w-full h-20 bg-slate-900 text-white flex px-20 items-center justify-between">
        <img
          src="https://static.vecteezy.com/system/resources/previews/013/441/088/original/code-symbol-illustration-png.png"
          className="w-16"
          alt="Code Symbol"
        />

        <ul className="flex gap-20 text-lg list-none">
          <li className="hover:text-amber-300">
            <NavLink to="/" activeClassName="text-amber-300">
              Home
            </NavLink>
          </li>
          <li className="hover:text-amber-300">
            <NavLink to="/about" activeClassName="text-amber-300">
              About
            </NavLink>
          </li>
          <li className="hover:text-amber-300">
            <NavLink to="/blog" activeClassName="text-amber-300">
              Blogs
            </NavLink>
          </li>

          {isLoggedIn ? (
            <li className="hover:text-amber-300">
              <NavLink to="/logout" activeClassName="text-amber-300">
                Logout
              </NavLink>
            </li>
          ) : (
            <>
              <li className="hover:text-amber-300">
                <NavLink to="/register" activeClassName="text-amber-300">
                  SignUp
                </NavLink>
              </li>
              <li className="hover:text-amber-300">
                <NavLink to="/login" activeClassName="text-amber-300">
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
