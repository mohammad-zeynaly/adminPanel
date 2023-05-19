import { useState } from "react";
import { useRoutes } from "react-router-dom";
import { AdminPanelContext } from "./context/AdminPanelContext";
import routes from "./routes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const routers = useRoutes(routes);


  // states
  const [isShowQuickAccessModal, setIsShowQuickAccessModal] = useState(false);
  const [isShowMessageModal, setIsShowMessageModal] = useState(false);
  const [isShowNotificationsModal, setIsShowNotificationsModal] = useState(false);
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [isShowMenuModals, setIsShowMenuModals] = useState(false);
  const [isShowAdminDetailModal, setIsShowAdminDetailModal] = useState(false);
  

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
