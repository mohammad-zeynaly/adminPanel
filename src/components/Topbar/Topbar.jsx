import { useContext } from "react";
import { AdminPanelContext } from "../../context/AdminPanelContext";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import QuickAccessModal from "../QuickAccessModal/QuickAccessModal";
import MessagesModal from "../MessagesModal/MessagesModal";
import NotificationsModal from "../NotificationsModal/NotificationsModal";
import MenuModals from "./MenuModals";
import AdminDetailModal from "../AdminDetailModal/AdminDetailModal";

function Topbar({ BreadcrumbTitle, BreadcrumbLink }) {
  const {
    isShowQuickAccessModal,
    isShowMessageModal,
    isShowNotificationsModal,
    setIsShowSidebar,
    isShowMenuModals,
    setIsShowMenuModals,
    isShowAdminDetailModal,
  } = useContext(AdminPanelContext);

  return (
    <header className="header py-4">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex items-center" id="topbar-right">
            <div className="ml-3 sm:ml-4 lg:hidden">
              <img
                className="w-full object-cover"
                src="./assets/images/logo-sm.png"
                alt="logo"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-lg sm:text-xl mb-1 font-iranYekanBold lg:hidden">
                داشبورد
              </h4>
              <Breadcrumbs className="hidden sm:block" aria-label="breadcrumb">
                <Link
                  className="font-iranYekanMedium text-black text-sm lg:text-2sm"
                  to=""
                >
                  داشبورد
                </Link>
                <Link
                  className="font-iranYekanMedium text-primary text-[15px]"
                  to={BreadcrumbLink}
                >
                  {BreadcrumbTitle}
                </Link>
              </Breadcrumbs>
            </div>
          </div>
          <div className="" id="topbar-left">
            <div className="lg:hidden mobile-btn">
              <button
                id="menuBtn"
                onClick={(event) => {
                  event.stopPropagation();
                  setIsShowSidebar((prevShowSidebar) => !prevShowSidebar);
                }}
                className="ml-4 bg-white rounded-lg px-3 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
              <button
                id="menuBtn"
                onClick={(event) => {
                  event.stopPropagation();
                  setIsShowMenuModals((prevMenuModals) => !prevMenuModals);
                }}
                className="bg-white rounded-lg px-3 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </button>
            </div>
            <MenuModals
              isShowFormDesktop={true}
              allClassDesktop="hidden lg:flex lg:items-center"
            />
          </div>
        </div>
        {/* Show And Close Menu Modals In Mobile */}
        {isShowMenuModals ? (
          <MenuModals allClassMobile="flex bg-[#f5f5f5] items-center justify-center py-3 rounded-lg mt-4" />
        ) : (
          ""
        )}

        {/* Show And Close Modal In Mobile  */}

        <div className="block lg:hidden">
          {isShowQuickAccessModal && <QuickAccessModal />}
        </div>
        <div className="block lg:hidden">
          {isShowMessageModal && <MessagesModal />}
        </div>
        <div className="block lg:hidden">
          {isShowNotificationsModal && <NotificationsModal />}
        </div>
        <div className="block lg:hidden">
          {isShowAdminDetailModal && <AdminDetailModal />}
        </div>
      </div>
    </header>
  );
}

export default Topbar;
