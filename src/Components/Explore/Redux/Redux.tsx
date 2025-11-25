import BreadCrumb from "@/Components/BreadCrumbs/BreadCrumb";
import React from "react";

type breadCrumbType = {
  breadCrumb: string;
};

const Redux: React.FC<breadCrumbType> = ({ breadCrumb }) => {
  return (
    <>
      <div className="flex py-2 flex-col">
        <BreadCrumb breadCrumb={breadCrumb} />
        {/* <div>Redux</div> */}
      </div>
    </>
  );
};

export default Redux;
