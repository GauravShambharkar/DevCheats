import React from "react";

type breadCrumbType = {
  breadCrumb: string;
};

const BreadCrumb: React.FC<breadCrumbType> = ({ breadCrumb }) => {
  return (
    <>
      <span className="border w-fit bg-[#0F1324] text-white border-gray-400 border-dashed px-2 py-1.5 rounded-lg">
        <a
          href="/explore"
          className="hover:underline transition-all ease-in-out"
        >
          Explore{" "} 
        </a>
        {breadCrumb}
      </span>
    </>
  );
};

export default BreadCrumb;
