import { useContext } from "react";
import { AdminPanelContext } from "../../context/AdminPanelContext";
import QuickAccessModal from "../QuickAccessModal/QuickAccessModal";
import MessagesModal from "../MessagesModal/MessagesModal";
import NotificationsModal from "../NotificationsModal/NotificationsModal";
import { Avatar, Badge } from "@mui/material";
import AdminDetailModal from "../AdminDetailModal/AdminDetailModal";

function MenuModals({ isShowForm, allClassMobile, allClassDesktop }) {
  const {
    isShowQuickAccessModal,
    setIsShowQuickAccessModal,
    isShowMessageModal,
    setIsShowMessageModal,
    isShowNotificationsModal,
    setIsShowNotificationsModal,
    isShowAdminDetailModal,
    setIsShowAdminDetailModal,
  } = useContext(AdminPanelContext);
  return (
    <div className={`flex items-center ${allClassDesktop} ${allClassMobile} `}>
      {isShowForm ? (
        <form className="relative" action="#" method="get">
          <input
            type="text"
            placeholder="جستجو"
            className="border-none text-sm py-[6px] px-2 rounded-lg focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0"
            className="absolute top-2 left-2 text-primary"
            viewBox="0 0 1024 1024"
          >
            <path
              stroke="none"
              d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
            ></path>
          </svg>
        </form>
      ) : (
        ""
      )}
      <div className="btns flex items-center">
        <div className="mr-4 relative" id="QuickAccess">
          <button
            onClick={(event) => {
              event.stopPropagation();
              setIsShowMessageModal(false);
              setIsShowNotificationsModal(false);
              setIsShowAdminDetailModal(false);
              setIsShowQuickAccessModal((prevAccess) => !prevAccess);
            }}
            className="bg-white rounded-lg text-[#828282] px-3 py-2 hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              stroke="currentColor"
              viewBox="0 0 1024 1024"
            >
              <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
              <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
            </svg>
          </button>
          <div className="hidden lg:block">
            {isShowQuickAccessModal && <QuickAccessModal />}
          </div>
        </div>

        <div className="mr-4 relative" id="Messages">
          <button
            onClick={(event) => {
              event.stopPropagation();
              setIsShowQuickAccessModal(false);
              setIsShowNotificationsModal(false);
              setIsShowAdminDetailModal(false);
              setIsShowMessageModal((prevMessageShow) => !prevMessageShow);
            }}
            className="bg-white rounded-lg text-[#828282] px-3 py-2 hover:text-primary relative"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"></path>
            </svg>
            <span className="bg-third w-2 h-2 rounded-lg absolute -top-1 left-0"></span>
          </button>
          <div className="hidden lg:block">
            {isShowMessageModal && <MessagesModal />}
          </div>
        </div>

        <div className="mr-4 relative" id="Notifications">
          <button
            onClick={(event) => {
              event.stopPropagation();
              setIsShowQuickAccessModal(false);
              setIsShowMessageModal(false);
              setIsShowAdminDetailModal(false);
              setIsShowNotificationsModal(
                (prevNotification) => !prevNotification
              );
            }}
            className="bg-white rounded-lg text-[#828282] px-3 py-2 hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 16 16"
            >
              <path
                stroke="none"
                d="M8 16a2 2 0 002-2H6a2 2 0 002 2zM8 1.918l-.797.161A4.002 4.002 0 004 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 00-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 111.99 0A5.002 5.002 0 0113 6c0 .88.32 4.2 1.22 6z"
              ></path>
            </svg>
          </button>
          <div className="hidden lg:block">
            {isShowNotificationsModal && <NotificationsModal />}
          </div>
        </div>
      </div>
      <div
        onClick={(event) => {
          event.stopPropagation();
          setIsShowQuickAccessModal(false);
          setIsShowMessageModal(false);
          setIsShowNotificationsModal(false);
          setIsShowAdminDetailModal((prevDetailModal) => !prevDetailModal);
        }}
        className="relative"
      >
        <Badge
          className="mr-4 avatar "
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          badgeContent={
            <span className="bg-[#43d854] w-2 h-2 rounded-lg z-20"></span>
          }
        >
          <Avatar
            className="cursor-pointer"
            alt=" عکس ادمین "
            src="./assets/images/avatar.jpg"
          />
        </Badge>

        <div className="hidden lg:block">
          {isShowAdminDetailModal && <AdminDetailModal />}
        </div>
      </div>
    </div>
  );
}

export default MenuModals;
