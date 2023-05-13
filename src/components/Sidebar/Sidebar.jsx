import { NavLink } from "react-router-dom";
import SummaryItem from "./../SummaryItem/SummaryItem";
import { summaryItems } from "../../allDatas";

function Sidebar() {
  return (
    <div className="hidden lg:block bg-white w-64 sm:w-80 fixed top-0 bottom-0 right-0 p-4">
      <div className="flex justify-center">
        <img className="object-cover" src="./assets/images/logo-lg.png" alt="logo" />
      </div>
      <ul className="menu flex flex-col py-4 p-4 sm:p-8 text-[#323232]">
        <li className="text-[15px] font-iranYekanBold pr-2 text-primary">
          داشبورد
        </li>
        <li className="mt-2">
          <NavLink
            to="/"
            className="menu__link w-full flex p-2 hover:bg-[#f5f5f5] rounded-lg"
          >
            فروش و مدیریت مشتری
          </NavLink>
        </li>
        <li className="mt-2">
          <NavLink
            to="/support"
            className="menu__link w-full flex p-2 hover:bg-[#f5f5f5] rounded-lg"
          >
            پشتیبانی
          </NavLink>
        </li>
        <li className="mt-2">
          <NavLink
            to="/statistics"
            className="menu__link w-full flex p-2 hover:bg-[#f5f5f5] rounded-lg"
          >
            آمار وب سایت
          </NavLink>
        </li>
        <li className="mt-2">
          <NavLink
            className="menu__link w-full flex p-2 hover:bg-[#f5f5f5] rounded-lg"
            to="/profile"
          >
            پروفایل
          </NavLink>
        </li>
        <li className="text-[15px] font-iranYekanBold mt-4 pr-2 text-primary">
          خلاصه
        </li>

        <div id="summary">
          {summaryItems.map((item) => (
            <SummaryItem key={item.id} {...item} />
          ))}
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
