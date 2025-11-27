import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import Routing from "./Components/Navbar/Routing";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-950">
      <NavBar />
      <main className="flex-1 overflow-x-hidden">
        <Routing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
