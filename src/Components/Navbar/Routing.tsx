import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Explore from "../Explore/Explore";
import Redux from "../Explore/Redux/Redux";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          home
        </Route>
        <Route path="/Explore" element={<Explore />}>
          feed
        </Route>
        <Route path="/explore/:lable" element={<Explore />}>
          feed
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
