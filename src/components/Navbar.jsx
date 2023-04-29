import React from "react";
import NavBarProfile from "./NavBarProfile";

const Navbar = ({ data, title }) => {
  console.log(window.innerWidth);
  return (
    <nav className="px-2 py-2 md:mt-0 fixed bg-white md:relative flex w-full items-center justify-between border-b border-gray-300 pb-2">
      <span className="text-xl font-semibold">{title}</span>
      <div className="relative">
        <NavBarProfile user={data} />
      </div>
    </nav>
  );
};

export default Navbar;
