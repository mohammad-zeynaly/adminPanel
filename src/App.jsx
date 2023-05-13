import { useState } from "react";
import { useRoutes } from "react-router-dom";
import { adminPanelContext } from "./context/adminPanelContext";
import routes from "./routes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  
  const routers = useRoutes(routes);
  const [quickAccess, setQuickAccess] = useState(false);

  return (
    <adminPanelContext.Provider value={{ quickAccess, setQuickAccess }}>
      <div onClick={() => setQuickAccess(false)} className="font-iranYekanMedium bg-[#E7EBEE]">
        <div className="container">
          <div className="flex items-center">
            <Sidebar />
            <div className="lg:mr-80 w-full h-screen">{routers}</div>
          </div>
        </div>
      </div>
    </adminPanelContext.Provider>
  );
}

export default App;
