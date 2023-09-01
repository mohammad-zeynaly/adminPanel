import { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { AdminPanelContext } from "./context/AdminPanelContext";
import routes from "./routes/routes";
import Sidebar from "./components/Sidebar/Sidebar";
import supabase from "./config/supabaseClient";

function App() {
  // all routes
  const routers = useRoutes(routes);

  // states
  const [isShowModals, setIsShowModals] = useState({
    isShowQuickAccessModal: false,
    isShowMessageModal: false,
    isShowNotificationsModal: false,
    isShowSidebar: false,
    isShowMenuModals: false,
    isShowAdminDetailModal: false,
  });
  const [loadingTime, setLoadingTime] = useState(true);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const getRequest = async () => {
      const { data, error } = await supabase.from("allPanelData").select();

      if (data) {
        setAllData([...data]);
        setLoadingTime(false);
      } else {
        console.log("error => ", error);
      }
    };

    getRequest();
  }, []);

  const closeAllModal = () => {
    setIsShowModals({ isShowQuickAccessModal: false });
    setIsShowModals({ isShowMessageModal: false });
    setIsShowModals({ isShowNotificationsModal: false });
    setIsShowModals({ isShowSidebar: false });
    setIsShowModals({ isShowMenuModals: false });
    setIsShowModals({ isShowAdminDetailModal: false });
  };

  return (
    <AdminPanelContext.Provider
      value={{
        isShowModals,
        loadingTime,
        allData,
        setAllData,
        setIsShowModals,
      }}
    >
      <div
        onClick={closeAllModal}
        className="font-iranYekanMedium bg-[#E7EBEE] overflow-x-hidden h-full"
      >
        <div className={isShowModals.isShowSidebar ? "overlay" : ""}></div>
        <div className="container">
          <div className="flex items-center">
            <Sidebar />
            <main className="lg:pr-80 2xl:pr-72 w-full">{routers}</main>
          </div>
        </div>
      </div>
    </AdminPanelContext.Provider>
  );
}

export default App;
