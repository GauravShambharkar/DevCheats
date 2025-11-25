import React from "react";

type breadCrumbType = {
  breadCrumb: string;
};

const ContextAPI: React.FC<breadCrumbType> = ({ breadCrumb }) => {
  return (
    <>
      <div className="">
        <span>{breadCrumb}</span>
        {/* <div>ContextAPI</div> */}
      </div>
    </>
  );
};

export default ContextAPI;
