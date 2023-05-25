import { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { AdminPanelContext } from "./context/AdminPanelContext";
import routes from "./routes/routes";
import Sidebar from "./components/Sidebar/Sidebar";
import supabase from "./config/supabaseClient";

function App() {
  const routers = useRoutes(routes);

  // states
  const [isShowQuickAccessModal, setIsShowQuickAccessModal] = useState(false);
  const [isShowMessageModal, setIsShowMessageModal] = useState(false);
  const [isShowNotificationsModal, setIsShowNotificationsModal] =
    useState(false);
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [isShowMenuModals, setIsShowMenuModals] = useState(false);
  const [isShowAdminDetailModal, setIsShowAdminDetailModal] = useState(false);
  const [allData, setAllData] = useState([]);
  const [loadingTime, setLoadingTime] = useState(true);

  const closeAllModal = () => {
    setIsShowQuickAccessModal(false);
    setIsShowMessageModal(false);
    setIsShowNotificationsModal(false);
    setIsShowSidebar(false);
    setIsShowMenuModals(false);
    setIsShowAdminDetailModal(false);
  };

  const getRequest = async () => {
    const { data, error } = await supabase.from("allPanelData").select();

    if (data) {
      console.log("datas", data);
      setAllData([...data]);
      setLoadingTime(false)
    } else {
      console.log("error => ", error);
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <AdminPanelContext.Provider
      value={{
        isShowQuickAccessModal,
        setIsShowQuickAccessModal,
        isShowMessageModal,
        setIsShowMessageModal,
        isShowNotificationsModal,
        setIsShowNotificationsModal,
        isShowSidebar,
        setIsShowSidebar,
        isShowMenuModals,
        setIsShowMenuModals,
        isShowAdminDetailModal,
        setIsShowAdminDetailModal,
        setAllData,
        allData,
        loadingTime,
        setLoadingTime,
      }}
    >
      <div
        onClick={closeAllModal}
        className="font-iranYekanMedium bg-[#E7EBEE]"
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
