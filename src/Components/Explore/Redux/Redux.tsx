import BreadCrumb from "@/Components/BreadCrumbs/BreadCrumb";
import React from "react";
import TreeStructure from "../ExploreTopics/Tree/TreeStructure";

type breadCrumbType = {
  breadCrumb: string;
};

const TopicType = {
  topic: "Redux",
  folders: {
    frontend: {
      reducers: "Reducers.tsx",
      store: "Store.tsx",
    },
  },
};

const Redux: React.FC<breadCrumbType> = ({ breadCrumb }) => {
  return (
    <>
      <div className="flex py-2 flex-col gap-2 w-full h-full">
        <BreadCrumb breadCrumb={breadCrumb} />
        {/* <div>Redux</div> */}
        <div autoFocus className=" w-fit">
          <TreeStructure
            rootFolder="frontend"
            files={[
              "src/App.tsx",
              "src/main.tsx",
              "src/reducers/Reducer.tsx",
              "src/store/store.tsx",
              "src/components/Navbar.tsx",
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Redux;
