import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <h1 className="text-center py-5 text-4xl font-medium text-indigo-500 underline">
        ♥ Wellcome to Admin Panel ♥
      </h1>
      <nav className="w-full h-20 flex items-center justify-center">
        <ul className="flex gap-40 list-none">
          <li className="bg-white w-28 py-2 flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-800 to-indigo-500 text-yellow-50 font-medium rounded-md">
            <NavLink to="/admin/users">Users</NavLink>
          </li>
          <li className="bg-white w-28 py-2 flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-800 to-indigo-500 text-yellow-50 font-medium rounded-md">
            <NavLink to="/admin/services">Services</NavLink>
          </li>
          <li className="bg-white w-28 py-2 flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-800 to-indigo-500 text-yellow-50 font-medium rounded-md">
            Booking
          </li>
          <li className="bg-white w-28 py-2 flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-800 to-indigo-500 text-yellow-50 font-medium rounded-md">
            Schedule
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default AdminLayout;
