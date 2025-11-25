import { useParams } from "react-router-dom";
import Redux from "../Redux/Redux";
import ContextAPI from "@/Components/ContextAPI/ContextAPI";
import Multer_Cloudinary from "@/Components/Multer&Cloudinary/Multer&Cloudinary";

const ExploreTopics = () => {
  const { lable } = useParams();

  if (lable === "redux") {
    const breadCrumb: string = `Explore > ${lable}`;
    return <Redux breadCrumb={breadCrumb} />;
  }
  if (lable === "contextApi") {
    const breadCrumb: string = `Explore > ${lable}`;
    return <ContextAPI breadCrumb={breadCrumb} />;
  }
  if (lable === "multer&cloudinary") {
    const breadCrumb: string = `Explore > ${lable}`;
    return <Multer_Cloudinary breadCrumb={breadCrumb} />;
  }

  return <div>Select a topic</div>;
};

export default ExploreTopics;
