import SideBar from "./ExploreSideBar/SideBar";
import ExploreTopics from "./ExploreTopics/ExploreTopics";

const Explore = () => {
  return (
    <>
      <div className="w-full xcenter ">
        <div className="w-7xl border bg-white border-[#84848481] mt-22 rounded-xl h-screen p-2 flex gap-2">
          <SideBar />
          <ExploreTopics />
        </div>
      </div>
    </>
  );
};

export default Explore;
