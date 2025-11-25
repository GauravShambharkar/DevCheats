import { createContext, type ReactNode } from "react";

export const SideBarNavigationContext = createContext<any>(null);

const SideBarNavProvider = ({ children }: { children: ReactNode }) => {
  const sideBarNavigation = [
    {
      category: "State Management",
      items: [
        { id: "redux", label: "Redux", href: "/explore/redux" },
        { id: "zustand", label: "Zustand", href: "/explore/zustand" },
        { id: "contextapi", label: "Context Api", href: "/explore/contextapi" },
        {
          id: "multer&cloudinary",
          label: "Multer & Cloudinary",
          href: "/explore/multer&cloudinary",
        },
      ],
    },
  ];

  return (
    <SideBarNavigationContext.Provider value={sideBarNavigation}>
      {children}
    </SideBarNavigationContext.Provider>
  );
};

export default SideBarNavProvider;
