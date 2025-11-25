import React from "react";
import SideBar from "./ExploreSideBar/SideBar";
import ExploreTopics from "./ExploreTopics/ExploreTopics";

const Explore = () => {
  return (
    <>
      <div className="w-full xcenter">
        <div className="w-320 border border-[#84848481] mt-22 rounded-xl h-screen p-4 flex gap-2">
          <SideBar/>
          <ExploreTopics/>
        </div>
      </div>
    </>
  );
};

export default Explore;
