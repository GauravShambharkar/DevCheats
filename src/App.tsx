import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import Routing from "./Components/Navbar/Routing";

const App = () => {
  return (
    <>
      <div className="w-full h-screen">
        <NavBar />
        <Routing />
      </div>
    </>
  );
};

export default App;
