import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Explore = lazy(() => import("../Explore/Explore"));
const Home = lazy(() => import("../Home/Home"));

const Routing = () => {
  return (
    <>
      <Suspense fallback={<div className="allcenter text-white w-full h-screen">Loading..</div>}>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Explore Main Page */}
          <Route path="/explore" element={<Explore />} />

          {/* Explore Dynamic Route */}
          <Route path="/explore/:id" element={<Explore />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Routing;
