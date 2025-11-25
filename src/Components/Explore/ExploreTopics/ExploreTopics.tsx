import { useParams } from "react-router-dom";
import Redux from "../Redux/Redux";
import ContextAPI from "@/Components/ContextAPI/ContextAPI";
import Multer_Cloudinary from "@/Components/Multer&Cloudinary/Multer&Cloudinary";
import Zustand from "@/Components/Zustand/Zustand";

const ExploreTopics = () => {
  const { id } = useParams();

  if (id === "redux") {
    const breadCrumb: string = `> Redux`;

    return <Redux breadCrumb={breadCrumb} />;
  }
  if (id === "contextapi") {
    const breadCrumb: string = `> Context API`;
    return <ContextAPI breadCrumb={breadCrumb} />;
  }
  if (id === "zustand") {
    const breadCrumb: string = `> Zustand`;
    return <Zustand breadCrumb={breadCrumb} />;
  }
  if (id === "multer&cloudinary") {
    const breadCrumb: string = `> Multer & Cloudinary`;
    return <Multer_Cloudinary breadCrumb={breadCrumb} />;
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
