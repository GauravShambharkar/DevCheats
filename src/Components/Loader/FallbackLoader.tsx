import React from "react";
import { Loader } from "lucide-react";

const FallbackLoader = () => {
  return (
    <>
      <div className="w-full h-full allcenter">
        <div>
          <Loader />
        </div>
      </div>
    </>
  );
};

export default FallbackLoader;
