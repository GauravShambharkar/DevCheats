import { useParams } from "react-router-dom";
import { Suspense, lazy } from "react";
import FallbackLoader from "@/Components/Loader/FallbackLoader";
const Redux = lazy(() => import("../Redux/Redux"));
const ContextAPI = lazy(() => import("@/Components/ContextAPI/ContextAPI"));
const Multer_Cloudinary = lazy(
  () => import("@/Components/Multer&Cloudinary/Multer&Cloudinary")
);
const Zustand = lazy(() => import("@/Components/Zustand/Zustand"));

const ExploreTopics = () => {
  const { id } = useParams();

  if (id === "redux") {
    const breadCrumb: string = `> Redux`;

    return (
      <Suspense fallback={<FallbackLoader />}>
        <Redux breadCrumb={breadCrumb} />
      </Suspense>
    );
  }
  if (id === "contextapi") {
    const breadCrumb: string = `> Context API`;
    return (
      <Suspense fallback={<FallbackLoader />}>
        <ContextAPI breadCrumb={breadCrumb} />
      </Suspense>
    );
  }
  if (id === "zustand") {
    const breadCrumb: string = `> Zustand`;
    return (
      <Suspense fallback={<FallbackLoader />}>
        <Zustand breadCrumb={breadCrumb} />{" "}
      </Suspense>
    );
  }
  if (id === "multer&cloudinary") {
    const breadCrumb: string = `> Multer & Cloudinary`;
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
