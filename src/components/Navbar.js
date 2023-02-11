import React from "react";
import { GiStarSattelites } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 rounded-lg">
      <div className="m-auto text-4xl font-semibold">
        Astr
        <GiStarSattelites />
        Calc
      </div>
      <div className="flex-none"></div>
    </div>
  );
};

export default Navbar;
