import BreadCrumb from "@/Components/BreadCrumbs/BreadCrumb";
import React from "react";
import TreeStructure from "../ExploreTopics/Tree/comp-567";

type breadCrumbType = {
  breadCrumb: string;
};

const TopicType = {
  topic: "Redux",
  folders: {
    frontend: [
      {
        reducers: "Reducers.tsx",
        store: "Store.tsx",
      },
    ],
  },
};

const Redux: React.FC<breadCrumbType> = ({ breadCrumb }) => {
  return (
    <>
      <div className="flex py-2 flex-col gap-2 w-full h-full">
        <BreadCrumb breadCrumb={breadCrumb} />
        {/* <div>Redux</div> */}
        <div className=" w-fit">
          <TreeStructure TopicType={TopicType} />
        </div>
      </div>
    </>
  );
};

export default Redux;
