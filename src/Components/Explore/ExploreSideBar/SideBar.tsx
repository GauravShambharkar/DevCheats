import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SideBarNavigationContext } from "@/Components/globalState/GlobalState";

const SideBar = () => {
  const sideBarNavigation = useContext(SideBarNavigationContext);

  return (
    <div className="border w-50 h-full bg-orange-200 flex flex-col gap-3 px-3 py-3 rounded-lg border-gray-400">
      <h2 className="font-semibold text-lg">Explore Learning</h2>

      {sideBarNavigation.map((group: any, index: number) => (
        <div key={index} className="flex flex-col gap-1">
          <h3 className="text-xs text-gray-700">{group.category}</h3>

          {group.items.map((item: any) => (
            <NavLink
              key={item.id}
              to={item.href}
              className={({ isActive }) =>
                `ycenter rounded-lg transition-all ease-in-out 
                ${
                  isActive
                    ? "px-3 py-2 text-white border border-white  bg-amber-600 shadow inset-shadow-sm inset-shadow-orange-200"
                    : "px-3 py-2 hover:bg-orange-300 border-transparent hover:inset-shadow-orange-500 hover:inset-shadow-sm"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
