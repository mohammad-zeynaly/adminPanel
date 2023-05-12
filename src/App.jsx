import { useState } from "react";
import { useRoutes } from "react-router-dom";
import { adminPanelContext } from "./context/adminPanelContext";
import routes from "./routes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const routers = useRoutes(routes);
  const [userData, setUserData] = useState([]);

  return (
    <adminPanelContext.Provider value={{ userData, setUserData }}>
      <div className="font-iranYekanMedium bg-[#E7EBEE]">
        <div className="container">
          <div className="flex items-center">
            <Sidebar />
            <div className="mr-96 h-screen">{routers}</div>
          </div>
        </div>
      </div>
    </adminPanelContext.Provider>
  );
}

export default App;
