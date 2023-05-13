import { useContext } from "react";
import { adminPanelContext } from "../../context/adminPanelContext";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import QuickAccessModal from "../QuickAccessModal/QuickAccessModal";
import MessagesModal from "../MessagesModal/MessagesModal"


function Topbar({ BreadcrumbTitle, BreadcrumbLink }) {
  
  const { quickAccess, setQuickAccess } = useContext(adminPanelContext);

  return (
    <header className="header py-4">
      <div className="container">
        <div className="flex justify-between">
          <div className="">
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                className="font-iranYekanMedium text-black text-[15px]"
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
          <div className="flex items-center">
            <form className="relative" action="#" method="get">
              <input
                type="text"
                placeholder="جستجو"
                className="border-none text-sm py-[6px] px-2 rounded-lg focus:outline-none"
              />
              <AiOutlineSearch className="absolute top-2 left-2 text-primary" />
            </form>
            <div className="btns flex items-center">
              <div className="mr-4 relative" id="QuickAccess">
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    setQuickAccess((prevAccess) => !prevAccess);
                  }}
                  className="bg-white rounded-lg text-[#828282] px-3 py-2 hover:text-primary"
                >
                  <AiOutlinePlus className="w-5 h-5" />
                </button>
                <div className="hidden lg:block">
                  {quickAccess && <QuickAccessModal />}
                </div>
              </div>
              <div className="mr-4">
                <button className="bg-white rounded-lg text-[#828282] px-3 py-2 hover:text-primary relative">
                  <FaRegCommentAlt />
                  <span className="bg-[#E04B4B] w-2 h-2 rounded-lg absolute -top-1 left-0"></span>
                </button>
              </div>
              <div className="mr-4">
                <button className="bg-white rounded-lg text-[#828282] px-3 py-2 hover:text-primary">
                  <BsBell className="w-5 h-5" />
                </button>
              </div>
            </div>
            <Badge
              className="mr-4 avatar"
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
              badgeContent={
                <span className="bg-[#43d854] w-2 h-2 rounded-lg z-20"></span>
              }
            >
              <Avatar alt="Travis Howard" src="./assets/images/avatar.jpg" />
            </Badge>
          </div>
        </div>
        {/* Show And Close Modals */}
        <div className="block lg:hidden">{quickAccess && <QuickAccessModal />}</div>
        <MessagesModal />
      </div>
    </header>
  );
}

export default Topbar;
