import { DraftingCompass, HomeIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="w-full h-20 flex items-center justify-center py-1 fixed">
        <div className="w-270 rounded-2xl bg-[#ffffff1b] backdrop-blur-sm shadow-lg flex h-full justify-between items-center border border-[#b0b0b0] px-2">
          <span className="flex gap-1">
            <img className="w-5" src="devCheatsOnlyLogo.svg" alt="" />
            <img className="w-20 text-white " src="devCheatsTextLogo.svg" alt="" />
          </span>
          <div className="flex gap-2 items-center justify-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-1 allcenter rounded-md transition-all ease-in-out border  ${
                  isActive
                    ? "inset-shadow-sm inset-shadow-orange-500 bg-orange-200 border-amber-600"
                    : "border-transparent text-white "
                }`
              }
            >
              <HomeIcon className="size-4" strokeWidth={1} />
            </NavLink>

            <NavLink
              to="/explore"
              className={({ isActive }) =>
                `p-1 allcenter rounded-md transition-all ease-in-out border  ${
                  isActive
                    ? "inset-shadow-sm inset-shadow-orange-500 bg-orange-200 border-amber-600"
                    : "border-transparent text-white "
                }`
              }
            >
              <DraftingCompass className="size-4" strokeWidth={1} />
            </NavLink>
          </div>

          <div className="flex">
            <NavLink className="px-3 py-1.5 rounded-lg text-white " >Register</NavLink>
            <NavLink className="border px-3 py-1.5 rounded-lg text-white bg-amber-600 shadow inset-shadow-sm inset-shadow-orange-200" >Login</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
