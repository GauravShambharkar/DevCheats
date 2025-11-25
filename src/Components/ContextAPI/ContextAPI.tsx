import React from "react";
import BreadCrumb from "../BreadCrumbs/BreadCrumb";

type breadCrumbType = {
  breadCrumb: string;
};

const ContextAPI: React.FC<breadCrumbType> = ({ breadCrumb }) => {
  return (
    <>
      <div className="flex py-2 flex-col">
        <BreadCrumb breadCrumb={breadCrumb} />
        {/* <div>ContextAPI</div> */}
      </div>
    </>
  );
};

export default ContextAPI;
