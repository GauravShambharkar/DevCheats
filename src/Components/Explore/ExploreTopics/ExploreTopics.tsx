import { useParams } from "react-router-dom";
import Redux from "../Redux/Redux";
import ContextAPI from "@/Components/ContextAPI/ContextAPI";
import Multer_Cloudinary from "@/Components/Multer&Cloudinary/Multer&Cloudinary";

const ExploreTopics = () => {
  const { id } = useParams();

  if (id) {
    const breadCrumb: string = `> ${id}`;
    return <Redux breadCrumb={breadCrumb} />;
  }
  if (id) {
    const breadCrumb: string = `> ${id}`;
    return <ContextAPI breadCrumb={breadCrumb} />;
  }
  if (id) {
    const breadCrumb: string = `> ${id}`;
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
