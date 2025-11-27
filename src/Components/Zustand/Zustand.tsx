import BreadCrumb from "../BreadCrumbs/BreadCrumb";
import TreeStructure from "../Explore/ExploreTopics/Tree/TreeStructure";

type breadCrumbType = {
  breadCrumb: string;
};

const Zustand: React.FC<breadCrumbType> = ({ breadCrumb }) => {
  return (
    <>
      <div className="flex py-2 flex-col gap-2 w-full h-full">
        <BreadCrumb breadCrumb={breadCrumb} />

        {/* <div>Multer&Cloudinary</div> */}
        <div autoFocus className="w-fit">
          <TreeStructure
            rootFolder="Frontend"
            files={[
              "src/App.tsx",
              "src/main.tsx",
              "src/components/store/Store.tsx",
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Zustand;
