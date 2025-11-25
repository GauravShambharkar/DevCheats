import React from "react";

type breadCrumbType = {
  breadCrumb: string;
};

const Redux: React.FC<breadCrumbType> = ({ breadCrumb }) => {
  return (
    <>
      <div className="">
        <h1>{breadCrumb}</h1>
        <div>Redux</div>
      </div>
    </>
  );
};

export default Redux;
