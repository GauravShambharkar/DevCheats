import { useNavigate, useParams } from "react-router-dom";
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

  const Topic_Cards = [
    {
      title: "Redux",
      img: "https://th.bing.com/th/id/R.ee72c19029938b25ca14c9387d5095ab?rik=u4VByRhq6u0OYg&riu=http%3a%2f%2fmichaelsoriano.com%2fwp-content%2fuploads%2f2020%2f07%2fredux.jpg&ehk=GO24Lp25NvUHFXPkFpxkQ25d7Bzal3N1VV%2bzFkiqJbY%3d&risl=&pid=ImgRaw&r=0",
      description: "Redux is an state Management library for React to hadnle",
      to: "stateManagement/redux",
    },
    {
      title: "Zustand",
      img: "https://tse1.mm.bing.net/th/id/OIP.BV_3VVtA8aRzModThtq6dQHaD3?rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Zustand is an state Management library for React to hadnle",
      to: "stateManagement/zustand"
    },
    {
      title: "Context API",
      img: "https://tse2.mm.bing.net/th/id/OIP.8iSkAgJE8YCjIQCYFPVo7QHaD-?rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "ZContext API is an state Management library for React to hadnle",
        to: "stateManagement/contextapi"
    },
  ];
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-full flex flex-col gap-4 py-2 border border-gray-300 p-2 rounded-lg ">
        <div className="w-full xcenter">
          <h1 className="text-3xl tracking-tighter">Select your Topic</h1>
        </div>

        {/* Topic cards */}
        <div className="w-full">
          <div className="grid grid-cols-[1fr_1fr_1fr] gap-4">
            {Topic_Cards.map((item, id) => (
              <div
                key={id}
                onClick={() => {
                  navigate(`${item.to}`);
                }}
                className="border border-gray-300 cursor-pointer rounded-xl p-3 flex flex-col gap-3 hover:shadow-md transition"
              >
                <div className="w-full overflow-hidden rounded-lg">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover w-full h-40"
                  />
                </div>

                <div className="flex flex-col">
                  <h1 className="font-semibold text-lg">{item.title}</h1>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreTopics;
