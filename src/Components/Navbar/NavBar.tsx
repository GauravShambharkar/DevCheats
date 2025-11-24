import { DraftingCompass, HomeIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="w-full h-20 flex items-center justify-center py-1">
        <div className="w-270 rounded-2xl bg-orange-200 shadow-lg flex h-full justify-between items-center border px-2">
          <span className="flex gap-1">
            <img className="w-5" src="devCheatsOnlyLogo.svg" alt="" />
            <img className="w-20" src="devCheatsTextLogo.svg" alt="" />
          </span>
          <div className="flex gap-2 items-center justify-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-1 allcenter rounded-md transition-all ease-in-out border  ${
                  isActive
                    ? "inset-shadow-sm inset-shadow-orange-500 bg-orange-200 border-amber-600"
                    : "border-transparent "
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
                    : "border-transparent "
                }`
              }
            >
              <DraftingCompass className="size-4" strokeWidth={1} />
            </NavLink>
          </div>

          <div className="flex gap-2 ">
            <NavLink>Login</NavLink>
            <NavLink>Regiser</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
