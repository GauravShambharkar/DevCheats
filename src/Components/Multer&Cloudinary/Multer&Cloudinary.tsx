import React from "react";

type breadCrumbType = {
  breadCrumb: string;
};

const Multer_Cloudinary: React.FC<breadCrumbType> = ({ breadCrumb }) => {
  return (
    <>
      <div className="">
        <span>{breadCrumb}</span>
        {/* <div>Multer&Cloudinary</div> */}
      </div>
    </>
  );
};

export default Multer_Cloudinary;
