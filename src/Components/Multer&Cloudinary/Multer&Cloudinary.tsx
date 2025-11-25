import BreadCrumb from "../BreadCrumbs/BreadCrumb";

type breadCrumbType = {
  breadCrumb: string;
};

const Multer_Cloudinary: React.FC<breadCrumbType> = ({ breadCrumb }) => {
  return (
    <>
      <div className="flex py-2 flex-col">
        <BreadCrumb breadCrumb={breadCrumb} />
        {/* <div>Multer&Cloudinary</div> */}
      </div>
    </>
  );
};

export default Multer_Cloudinary;
