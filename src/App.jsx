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
  const [isShowQuickAccessModal, setIsShowQuickAccessModal] = useState(false);
  const [isShowMessageModal, setIsShowMessageModal] = useState(false);
  const [isShowNotificationsModal, setIsShowNotificationsModal] = useState(false);
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [isShowMenuModals, setIsShowMenuModals] = useState(false);
  const [isShowAdminDetailModal, setIsShowAdminDetailModal] = useState(false);
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
    setIsShowQuickAccessModal(false);
    setIsShowMessageModal(false);
    setIsShowNotificationsModal(false);
    setIsShowSidebar(false);
    setIsShowMenuModals(false);
    setIsShowAdminDetailModal(false);
  };

  return (
    <AdminPanelContext.Provider
      value={{
        isShowQuickAccessModal,
        isShowMessageModal,
        isShowNotificationsModal,
        isShowSidebar,
        isShowMenuModals,
        isShowAdminDetailModal,
        loadingTime,
        allData,
        setAllData,
        setIsShowQuickAccessModal,
        setIsShowMessageModal,
        setIsShowNotificationsModal,
        setIsShowSidebar,
        setIsShowMenuModals,
        setIsShowAdminDetailModal,
      }}
    >
      <div
        onClick={closeAllModal}
        className="font-iranYekanMedium bg-[#E7EBEE] overflow-x-hidden h-full"
      >
        <div className={isShowSidebar ? "overlay" : ""}></div>
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
