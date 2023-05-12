import { NavLink } from "react-router-dom";
// import { BsBarChartLineFill } from "react-icons/bs";
// import { TfiEmail } from "react-icons/tfi";
// import { AiOutlineUser } from "react-icons/ai";
import SummaryItem from "./../SummaryItem/SummaryItem";
const summaryBox = [
  { id: 1, bgClass: "bg-[#ffb822]", title: "مجموع فروش", caption: "15,687" },
  { id: 2, bgClass: "bg-[#0abb87]", title: "مجموع تیکت ها", caption: "214" },
  {
    id: 3,
    bgClass: "bg-[#55a6eb]",
    title: " بازدید کنندگان",
    caption: "30,313",
  },
];

function Sidebar() {
  return (
    <div className="bg-white w-64 sm:w-96 fixed top-0 bottom-0 right-0 p-4">
      <div className="flex justify-center">
        <img
          className="object-cover"
          src="./assets/images/logo-lg.png"
          alt="logo"
        />
      </div>
      <ul className="menu flex flex-col py-4 p-4 sm:p-8 text-[#323232]">
        <li className="text-[15px] font-iranYekanBold pr-2 text-primary">
          داشبورد
        </li>
        <li className="mt-2">
          <NavLink
            className="menu__link w-full flex p-2 hover:bg-[#f5f5f5] rounded-lg"
            to="/"
          >
            فروش و مدیریت مشتری
          </NavLink>
        </li>
        <li className="mt-2">
          <NavLink
            className="menu__link w-full flex p-2 hover:bg-[#f5f5f5] rounded-lg"
            to="/support"
          >
            پشتیبانی
          </NavLink>
        </li>
        <li className="mt-2">
          <NavLink
            className="menu__link w-full flex p-2 hover:bg-[#f5f5f5] rounded-lg"
            to="/statistics"
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
          {summaryBox.map((item) => (
            <SummaryItem key={item.id} {...item} />
          ))}
        </div>
        {/* <li className="mt-2 flex items-center hover:bg-[#f5f5f5] p-2 rounded-lg cursor-pointer">
          <div className="bg-[#ffb822] flex justify-center items-center w-11 h-11 rounded-lg">
            <BsBarChartLineFill className="text-white w-5 h-5" />
          </div>
          <div className="mr-3">
            <h4 className="">مجموع فروش</h4>
            <h5 className="mt-1 text-xl font-iranYekanBold">15,687</h5>
          </div>
        </li>
        <li className="mt-2 flex items-center hover:bg-[#f5f5f5] p-2 rounded-lg cursor-pointer">
          <div className="bg-[#0abb87] flex justify-center items-center w-11 h-11 rounded-lg">
            <TfiEmail className="text-white w-5 h-5" />
          </div>
          <div className="mr-3">
            <h4 className="">مجموع تیکت ها</h4>
            <h5 className="mt-1 text-xl font-iranYekanBold">214</h5>
          </div>
        </li>
        <li className="mt-2 flex items-center hover:bg-[#f5f5f5] p-2 rounded-lg cursor-pointer">
          <div className="bg-[#55a6eb] flex justify-center items-center w-11 h-11 rounded-lg">
            <AiOutlineUser className="text-white w-5 h-5" />
          </div>
          <div className="mr-3">
            <h4 className=""> بازدید کنندگان</h4>
            <h5 className="mt-1 text-xl font-iranYekanBold">30,313</h5>
          </div>
        </li> */}
      </ul>
    </div>
  );
}

export default Sidebar;
