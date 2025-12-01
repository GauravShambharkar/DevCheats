import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import SideBarNavProvider from "./Components/globalState/GlobalState.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <SideBarNavProvider>
      <App />
    </SideBarNavProvider>
  </BrowserRouter>
);
