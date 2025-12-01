import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import FallbackLoader from "../Loader/FallbackLoader";

const Explore = lazy(() => import("../Explore/Explore"));
const Home = lazy(() => import("../Home/Home"));

const Routing = () => {
  return (
    <>
      <Suspense fallback={<FallbackLoader />}>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Explore Main Page */}
          <Route path="/explore" element={<Explore />} />

          {/* Explore Dynamic Route */}
          {/* <Route path="/explore/:id" element={<Explore />} /> */}
          <Route path="/explore/:category/:id" element={<Explore />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Routing;
