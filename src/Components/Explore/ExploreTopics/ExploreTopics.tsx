import { useParams } from "react-router-dom";
import { Suspense, lazy, useContext } from "react";
import FallbackLoader from "@/Components/Loader/FallbackLoader";
import { SideBarNavigationContext } from "@/Components/globalState/GlobalState";
const Redux = lazy(() => import("../Redux/Redux"));
const ContextAPI = lazy(() => import("@/Components/ContextAPI/ContextAPI"));
const Multer_Cloudinary = lazy(
  () => import("@/Components/Multer&Cloudinary/Multer&Cloudinary")
);
const Zustand = lazy(() => import("@/Components/Zustand/Zustand"));

const ExploreTopics = () => {
  const { id, category } = useParams();

  const sideBarNavigation = useContext(SideBarNavigationContext);
  const FilteredCategory = sideBarNavigation.find(
    (item: any) =>
      item.category.split(" ").join("").toLowerCase() ===
      (category || "").toLowerCase()
  )?.category;

  if (id === "redux") {
    const breadCrumb: string = `> ${FilteredCategory} > Redux`;

    return (
      <Suspense fallback={<FallbackLoader />}>
        <Redux breadCrumb={breadCrumb} />
      </Suspense>
    );
  }
  if (id === "contextapi") {
    const breadCrumb: string = `> ${FilteredCategory} > Context API`;
    return (
      <Suspense fallback={<FallbackLoader />}>
        <ContextAPI breadCrumb={breadCrumb} />
      </Suspense>
    );
  }
  if (id === "zustand") {
    const breadCrumb: string = `> ${FilteredCategory} > Zustand`;
    return (
      <Suspense fallback={<FallbackLoader />}>
        <Zustand breadCrumb={breadCrumb} />{" "}
      </Suspense>
    );
  }
  if (id === "multer&cloudinary") {
    const breadCrumb: string = `> ${FilteredCategory} > Multer & Cloudinary`;
    return (
      <Suspense fallback={<FallbackLoader />}>
        <Multer_Cloudinary breadCrumb={breadCrumb} />
      </Suspense>
    );
  }

  return (
    <>
      <div className="flex flex-col py-2">
        <div>Select a topic</div>
      </div>
    </>
  );
};

export default ExploreTopics;
