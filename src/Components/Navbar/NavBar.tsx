import React from "react";
import { NavLink } from "react-router-dom";
import Routing from "./Routing";

const NavBar = () => {
  return (
    <>
      <div className=" w-full h-20 py-2 xcenter fixed">
        <div className="w-280 h-full rounded-2xl px-3  top-0 flex justify-between items-center border">
          <div className="flex gap-1">
            <img
              className="w-5"
              src="devCheatsOnlyLogo.svg"
              alt="devCheatLogo"
            />
            <img
              className="w-20"
              src="devCheatsTextLogo.svg"
              alt="devCheatLogo"
            />
          </div>
          <div className="flex gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "underline"
                  : "transition-all ease-in-out "
              }
            >
              Home
            </NavLink>
            <NavLink to="/feed">Feed</NavLink>
          </div>
        </div>
      </div>
      <Routing />
    </>
  );
};

export default NavBar;
