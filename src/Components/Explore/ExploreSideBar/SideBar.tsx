import { NavLink } from "react-router-dom";

const SideBar = () => {
  const sideBarNavigation = [
    {
      category: "State Management",
      items: [
        { id: "Redux", lable: "Redux", href: "/explore/redux" },
        { id: "ContextAPI", lable: "Context API", href: "/explore/contextApi" },
        {
          id: "Multer&Cloudinary",
          lable: "Multer & Cloudinary",
          href: "/explore/multer&cloudinary",
        },
      ],
    },
  ];

  return (
    <div className="border w-50 h-full bg-orange-200 flex flex-col gap-3 px-3 py-3 rounded-lg border-gray-400">
      <h2 className="font-semibold text-lg">Explore Learning</h2>

      {sideBarNavigation.map((group, index) => (
        <div key={index} className="flex flex-col gap-2">
          <h3 className="text-xs text-gray-700">{group.category}</h3>

          {group.items.map((item, id) => (
            <NavLink
              key={id}
              to={item.href}
              className={({ isActive }) =>
                `ycenter rounded-lg transition-all ease-in-out 
                ${
                  isActive
                    ? "px-3 py-2 text-white bg-amber-600 shadow inset-shadow-sm inset-shadow-orange-200"
                    : "px-3 py-2 hover:bg-orange-300 hover:inset-shadow-orange-500 hover:inset-shadow-sm"
                }`
              }
            >
              {item.lable}
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
