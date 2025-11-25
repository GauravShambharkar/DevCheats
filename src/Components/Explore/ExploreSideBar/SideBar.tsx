import { NavLink } from "react-router-dom";

const SideBar = () => {
  const sideBarNavigation = [
    { lable: "Redux", href: "/explore/redux" },
    { lable: "ContextApi", href: "/explore/contextApi" },
    { lable: "Multer & Cloudinary", href: "/explore/multer&cloudinary" }
];

  return (
    <>
      <div className="border w-50 h-full flex flex-col gap-2">
        <h2>Explore-learning</h2>
        <div className="w-full flex flex-col gap-2">
          {sideBarNavigation.map((item, id) => {
            return (
              <NavLink key={id} className="border h-7 ycenter" to={item.href}>
                {item.lable}
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideBar;
