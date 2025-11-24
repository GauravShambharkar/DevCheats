import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Feed from "../Feed/Feed";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} >home</Route>
        <Route path="/feed" element={<Feed/>} >feed</Route>
        <Route path="/feed/:id" element={<Feed/>} >feed</Route>
      </Routes>
    </>
  );
};

export default Routing;
